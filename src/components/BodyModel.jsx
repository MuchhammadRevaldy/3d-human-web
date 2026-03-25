import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

// Holographic material
function applyHolographicMaterial(scene, options = {}) {
  const {
    color = '#446699',
    emissive = '#1133aa',
    emissiveIntensity = 0.05,
    roughness = 0.8,
    metalness = 0.0,
    opacity = 0.2,
    envMapIntensity = 0.5,
  } = options

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(emissive),
        emissiveIntensity,
        roughness,
        metalness,
        transparent: true,
        opacity,
        envMapIntensity,
        clearcoat: 0.6,
        clearcoatRoughness: 0.15,
        side: THREE.FrontSide,
        depthWrite: false,
      })
    }
  })
}

function MaleModel({ visible }) {
  const { scene } = useGLTF('/models/male_base_mesh.glb')

  useEffect(() => {
    applyHolographicMaterial(scene, { color: '#446699', emissive: '#1133aa', opacity: 0.2 })
  }, [scene])

  return (
    <primitive
      object={scene}
      scale={[0.13, 0.12, 0.13]}
      position={[0, -1.6, 0]}
      visible={visible}
    />
  )
}

function FemaleModel({ visible }) {
  const { scene } = useGLTF('/models/female_base_mesh (1).glb')

  useEffect(() => {
    applyHolographicMaterial(scene, { color: '#554499', emissive: '#3311aa', opacity: 0.2 })
  }, [scene])

  return (
    <primitive
      object={scene}
      scale={[2.25, 2.25, 2.25]}
      position={[0, -1.9, 0]}
      visible={visible}
    />
  )
}

export default function BodyModel({ sex, onLoaded }) {
  useEffect(() => {
    useGLTF.preload('/models/male_base_mesh.glb')
    useGLTF.preload('/models/female_base_mesh (1).glb')
    if (typeof onLoaded === 'function') {
      const timer = setTimeout(onLoaded, 1000)
      return () => clearTimeout(timer)
    }
  }, [onLoaded])

  return (
    <group>
      <MaleModel visible={sex === 'male'} />
      <FemaleModel visible={sex === 'female'} />
    </group>
  )
}
