import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { MeshBasicMaterial } from 'three'

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
dracoLoader.setDecoderConfig({ type: 'wasm' })

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true, simplifyMaterial: false }
) {
  const { receiveShadow, castShadow, simplifyMaterial } = options

  return new Promise((resolve, reject) => {
    gltfLoader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'ghost'
        obj.position.set(0, 0, 0)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(child => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow

            if (simplifyMaterial) {
              const material = new MeshBasicMaterial({
                color: child.material.color
              })

              if (child.material.map) {
                material.map = child.material.map
                material.map.needsUpdate = true
              }

              child.material = material
            }
          }
        })
        resolve(obj)
      },
      undefined,
      error => {
        console.error('An error occurred during the GLTF model loading:', error)
        reject(error)
      }
    )
  })
}
