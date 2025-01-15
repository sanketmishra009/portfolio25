import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import HackerRoom from '../components/HackerRoom'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../components/Target.jsx'
import Reactlogo from '../components/Reactlogo.jsx'
import Cube from '../components/Cube.jsx'
import Rings from '../components/Rings.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'

const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    console.log(sizes)
    return (
        <section className='h-screen 2-full flex flex-col relative'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 items-center">
                <div className='flex items-center gap-2'>
                    <p className='inline text-white font-semibold text-2xl font-generalsans text-grad-small'>Hello, I am Sanket.</p>
                    <span className='waving-hand'>🙂</span>
                </div>
                <p className='hero_tag text-grad'>Machine Learning Engineer</p>
            </div>
            <div className="h-full w-full inset-0">
                <Canvas className='w-full h-full flex'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        <HeroCamera>
                            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.4, -Math.PI, 0]} />
                            <group>
                                <Target position={sizes.targetPosition} sclae={sizes.deskScale} />
                                <Reactlogo position={sizes.reactLogoPosition} scale={sizes.deskScale * 0.03} />
                                <Cube position={sizes.cubePosition} scale={sizes.deskScale * 7} />
                                {/* <Rings position={sizes.ringsPosition} /> */}
                            </group>
                        </HeroCamera>

                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 right-0 left-0 w-full c-space z-10'>
                <a href="#about" className='w-full'>
                    <Button isBeam name="Let's work together" containerClass='' />
                </a>
            </div>
        </section>
    )
}

export default Hero
