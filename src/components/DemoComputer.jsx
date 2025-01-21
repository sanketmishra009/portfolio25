import React from 'react'

const DemoComputer = () => {
    return (
        <div>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={0x00ff00} />
            </mesh>
        </div>
    )
}

export default DemoComputer
