import { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'


const Computers = ({isMobile}) => {
  const computer = useGLTF('../desktop_pc/scene.gltf')
  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15} groundColor="black" /> */}
      <ambientLight intensity={0.8} />
      <pointLight intensity={0.5} position={[5, 10, 5]} />
      {/* <spotLight position={[-20, 50, 10]} angle={0.15} penumbra={1} castShadow intensity={1} shadow-mapSize={1024}/> */}
      <primitive object={computer.scene} 
        scale={isMobile ? 0.7 : 0.75}
        position={ isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        receiveShadow
        castShadow
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 550px)')

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {  
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas
      frameloop='demand'
      camera={{ position: [20, 3, 5], fov: 25 }}
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
