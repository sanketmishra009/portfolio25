import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants/index';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import CanvasLoader from '../components/CanvasLoader';
// import DemoComputer from 

const Projects = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const handleNavigation = (dir) => {
        console.log('inside handleNavigation');
        if (!dir) {
            setProjectIndex((pi) => ((pi - 1) % myProjects.length + myProjects.length) % myProjects.length);
        }
        else {
            setProjectIndex((pi) => (pi + 1) % myProjects.length);
        }
    }

    const currentProject = myProjects[projectIndex];
    let random = Math.random();

    return (
        <section>
            <h1 className='text-7xl font-semibold text-white text-center'>My Work</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-ful p-5'>
                <div className={"flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-violet-900 rounded-xl bg-gradient-to-tr from-black to-fuchsia-900"}>
                    <div className="absolute top-0 right-0">
                        {/* <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover" /> */}
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.style}>
                        <img src={currentProject.logo} alt="logo" className='h-10 w-10 shadow-sm' />
                    </div>
                    <div className="flex flex-col gap-5 text-gray-300 my-5">
                        <p className=" font-semibold text-2xl animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="anmimatedText">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        {currentProject.tags.map((tag, index) => (
                            < img src={tag.path} alt={tag.name} key={index} className="teach-logo" />
                        ))}
                    </div>
                    <div className="flex justify-between items-center gap-5 mt-5">
                        <button className='arrow-button text-white' onClick={() => (handleNavigation(false))}><img src="/assets/left-arrow.png" alt="left-key" /></button>
                        <button className='arrow-button text-white' onClick={() => (handleNavigation(true))}><img src="/assets/right-arrow.png" alt="right-key" /></button>
                    </div>
                </div>
                <div className="h-96 md:h-full border border-slate-900 rounded-xl bg-violet-950 shadow-2xl shadow-fuchsia-900">
                    <Canvas>
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    {/* <DemoComputer texture={currentProject.texture} /> */}
                                    <OrbitControls />
                                    <ambientLight intensity={0.5} />
                                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                                    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                        <boxGeometry args={[1, 1, 1]} />
                                        <meshStandardMaterial color={'fuchsia'} />
                                    </mesh>
                                </group>
                            </Suspense>
                        </Center>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects
