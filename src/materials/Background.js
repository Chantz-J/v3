import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraShake, OrbitControls } from '@react-three/drei'
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Ground from './Ground'
import Triangle from './Triangle'
import Rig from './Rig'


export default function Background() {
    return (
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }} style={{height: '50vh', position: 'absolute'}}>
        <color attach="background" args={['black']} />
        <ambientLight />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Suspense fallback={null}>
          <Rig>
            <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
            <Triangle color="cyan" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
            <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
            <Triangle color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
            <Ground mirror={1} mixBlur={30} mixStrength={1} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8} />
          </Rig>
          <EffectComposer multisampling={8}>
            <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
            <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
          </EffectComposer>
        </Suspense>
        <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
      </Canvas>
    )
  }