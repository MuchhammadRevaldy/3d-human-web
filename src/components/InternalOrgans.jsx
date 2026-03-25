import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

// We removed the global activeMaterialParams constant.
// Instead, Active/Inactive materials will be generated dynamically per organ.

const inactiveMaterialParams = {
  color: new THREE.Color('#4466aa'),
  emissive: new THREE.Color('#223388'),
  emissiveIntensity: 0.0,
  roughness: 0.4,
  metalness: 0.3,
  transparent: true,
  opacity: 0.0,
  transmission: 0.0,
}

function InternalOrganMesh({ organ, isVisible, isActive }) {
  const { scene } = useGLTF(organ.file)
  const ref = useRef()

  // Clone scene so multiple instances don't share identical nested meshes
  const clonedScene = useMemo(() => scene.clone(true), [scene])

  const activeParams = useMemo(() => ({
    color: new THREE.Color(organ.color || '#ff3322'),
    emissive: new THREE.Color(organ.emissive || '#ff2200'),
    emissiveIntensity: 1.5,
    roughness: 0.2,
    metalness: 0.1,
    transparent: true,
    opacity: 0.9,
    transmission: 0.2,
    envMapIntensity: 1.0,
    depthWrite: true,
  }), [organ])

  const inactiveParams = useMemo(() => ({
    color: new THREE.Color('#050a15'), // Near-black / dark blue
    emissive: new THREE.Color('#000000'), // No glow
    emissiveIntensity: 0.0,
    roughness: 0.8, // Rough so it doesn't reflect sharp light
    metalness: 0.0, // No metal reflection
    transparent: true,
    opacity: 0.0, // Completely invisible
    transmission: 0.0,
    envMapIntensity: 0.0, // Absolutely zero reflections
    depthWrite: false, // Prevent depth sorting artifacts with outer mesh
  }), [])

  const materialRef = useRef(new THREE.MeshPhysicalMaterial(
    isVisible ? activeParams : inactiveParams
  ))

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.material = materialRef.current
      }
    })
  }, [clonedScene])

  // Smoothly interpolate between active and inactive states
  useFrame((state, delta) => {
    const targetParams = isVisible ? activeParams : inactiveParams

    // Pulsating Emission (Breathing Glow): Modulates inner light rhythmically without rubber-banding mesh
    const breath = (Math.sin(state.clock.elapsedTime * 2.0) + 1) / 2 // 0.0 to 1.0, slower, natural rhythm
    const dynamicEmissiveIntensity = isActive ? THREE.MathUtils.lerp(0.8, 2.5, breath) : (isVisible ? targetParams.emissiveIntensity : 0.0)

    const speed = 0.25 // Mempercepat transisi hide/show (tadinya 0.1)
    materialRef.current.color.lerp(targetParams.color, speed)
    materialRef.current.emissive.lerp(targetParams.emissive, speed)
    materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(materialRef.current.emissiveIntensity, dynamicEmissiveIntensity, speed)
    materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, targetParams.opacity, speed)
    materialRef.current.transmission = THREE.MathUtils.lerp(materialRef.current.transmission, targetParams.transmission, speed)
    
    // Smoothly fade out reflections for inactive organs
    materialRef.current.envMapIntensity = THREE.MathUtils.lerp(materialRef.current.envMapIntensity || 0, targetParams.envMapIntensity, speed)
    
    // Toggle depthWrite directly (cannot interpolate boolean)
    materialRef.current.depthWrite = isVisible

    // Ensure scale stays strictly uniform (removed physical balloon-like mesh expansion)
    if (ref.current) {
      ref.current.scale.setScalar(organ.scale)
    }
  })

  return (
    <primitive
      ref={ref}
      object={clonedScene}
      position={organ.position}
      rotation={organ.rotation || [0, 0, 0]}
      scale={[organ.scale, organ.scale, organ.scale]}
    />
  )
}

export default function InternalOrgans({ models, categories, activeCategoryId, hoveredCategoryId, activeSubHotspotId }) {

  const getVisibleModelIds = () => {
    const activeCat = categories.find(c => c.id === activeCategoryId)
    const hoveredCat = categories.find(c => c.id === hoveredCategoryId)

    const visibleIds = new Set()

    // Default: jangan tampilkan organ apapun jika tidak ada kategori yang aktif
    if (activeCat && activeCat.shows) activeCat.shows.forEach(id => visibleIds.add(id))
    if (hoveredCat && hoveredCat.shows) hoveredCat.shows.forEach(id => visibleIds.add(id))
    return visibleIds
  }

  const visibleModels = getVisibleModelIds()

  return (
    <group>
      {models.map((model) => {
        const isVisible = visibleModels.has(model.id)
        const isActive = activeCategoryId ? visibleModels.has(model.id) : false

        return (
          <InternalOrganMesh
            key={model.id}
            organ={model}
            isVisible={isVisible}
            isActive={isActive}
          />
        )
      })}
    </group>
  )
}
