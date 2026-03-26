import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

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

function InternalOrganMesh({ organ, isVisible, isActive, isMobile }) {
  const { scene } = useGLTF(organ.file)
  const ref = useRef()

  const clonedScene = useMemo(() => scene.clone(true), [scene])

  const activeParams = useMemo(() => ({
    color: new THREE.Color(organ.color || '#ff3322'),
    emissive: new THREE.Color(organ.emissive || '#ff2200'),
    emissiveIntensity: isMobile ? 0.35 : 1.2,
    roughness: 0.2,
    metalness: 0.1,
    transparent: true,
    opacity: 0.9,
    transmission: 0.2,
    envMapIntensity: 1.0,
    depthWrite: true,
  }), [organ, isMobile])

  const inactiveParams = useMemo(() => ({
    color: new THREE.Color('#050a15'),
    emissive: new THREE.Color('#000000'),
    emissiveIntensity: 0.0,
    roughness: 0.8,
    metalness: 0.0,
    transparent: true,
    opacity: 0.0,
    transmission: 0.0,
    envMapIntensity: 0.0,
    depthWrite: false,
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

  useFrame((state, delta) => {
    const targetParams = isVisible ? activeParams : inactiveParams

    const breath = (Math.sin(state.clock.elapsedTime * 2.0) + 1) / 2

    const maxGlow = isMobile ? 0.15 : 2.5

    const dynamicEmissiveIntensity = isActive ? THREE.MathUtils.lerp(0.05, maxGlow, breath) : (isVisible ? targetParams.emissiveIntensity : 0.0)

    const speed = 0.25
    materialRef.current.color.lerp(targetParams.color, speed)
    materialRef.current.emissive.lerp(targetParams.emissive, speed)
    materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(materialRef.current.emissiveIntensity, dynamicEmissiveIntensity, speed)
    materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, targetParams.opacity, speed)
    materialRef.current.transmission = THREE.MathUtils.lerp(materialRef.current.transmission, targetParams.transmission, speed)

    materialRef.current.envMapIntensity = THREE.MathUtils.lerp(materialRef.current.envMapIntensity || 0, targetParams.envMapIntensity, speed)

    materialRef.current.depthWrite = isVisible

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

export default function InternalOrgans({ models, categories, activeCategoryId, hoveredCategoryId, activeSubHotspotId, isMobile }) {

  const getVisibleModelIds = () => {
    const visibleIds = new Set()
    const activeCat = categories.find(c => c.id === activeCategoryId)

    if (activeSubHotspotId && activeCat) {
      const activeSub = activeCat.subHotspots?.find(s => s.id === activeSubHotspotId)
      if (activeSub && activeSub.focusOrgan) {
        visibleIds.add(activeSub.focusOrgan)
        return visibleIds
      }
    }

    const hoveredCat = categories.find(c => c.id === hoveredCategoryId)

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
            isMobile={isMobile}
          />
        )
      })}
    </group>
  )
}
