import React from 'react'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from '../CanvasLoader'
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float
      speed={0.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} intensity={0.5} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='white'
          polygonOffset
          polygonOffsetFactor={-1}
          flatShading
        />
        <Decal 
        map={decal} 
        position={[0, 0, 1]} 
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        scale={[1, 1, 1]} />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Tooltip
      title={name}
      position="top"
      trigger="mouseenter"
      arrow={true}
      open={isHovered}
      hideOnClick={false}
      >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-28 h-28"
        >

    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
    </Tooltip>
  )
}

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BallCanvas