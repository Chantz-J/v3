import React, { useState, useRef, useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import triangle from '../svgs/triangle.svg'

export default function Triangle({ color, ...props }) {
    const ref = useRef()
    const [r] = useState(() => Math.random() * 10000)
    useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
    const { paths: [path] } = useLoader(SVGLoader, triangle ) // prettier-ignore
    const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
    return (
      <group ref={ref}>
        <mesh geometry={geom} {...props}>
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      </group>
    )
  }

