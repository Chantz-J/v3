import React from 'react'
import { Reflector, useTexture } from '@react-three/drei'
import SurfaceImperfections from '../assets/SurfaceImperfections003_1K_var1.jpg'
import SurfaceImperfectionsNormal from '../assets/SurfaceImperfections003_1K_Normal.jpg'


export default function Ground(props) {
    const [floor, normal] = useTexture([SurfaceImperfections, SurfaceImperfectionsNormal])
    return (
      <Reflector resolution={1024} args={[8, 8]} {...props}>
        {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[0.6, 0.6]} {...props} />}
      </Reflector>
    )
  }

  // ./assets/SurfaceImperfections003_1K_var1.jpg
  // ./assets/SurfaceImperfections003_1K_Normal.jpg