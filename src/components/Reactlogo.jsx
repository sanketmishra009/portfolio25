import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Reactlogo = (props) => {
    const { nodes, materials } = useGLTF('/models/reactLogo.glb')
    return (
        <Float dispose={null}>
            <group {...props}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={props.position}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[39.166, 39.166, 52.734]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/reactLogo.glb')

export default Reactlogo;