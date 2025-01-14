import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react'
import { Mesh } from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
    useGSAP(() => {
        gsap.to(tref.current.position, {
            y: tref.current.position.y + 2,
            duration: 2,
            repeat: -1,
            yoyo: true
        });
    });
    const tref = useRef();
    const scene = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');
    return (
        <mesh {...props} ref={tref} rotation={[0.4, Math.PI / 8, 0]}>
            <primitive object={scene.scene} />
        </mesh >
    )
}

export default Target
