import React, { useState } from 'react'
import { myProjects } from '../constants/index';

const Projects = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const currentProject = myProjects[projectIndex];
    return (
        <div>
            <h1 className='text-7xl font-semibold text-white text-center'>My Work</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-ful p-5'>
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-blue-400 rounded-xl">
                    <div className="absolute top-0 right-0 ">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover" />
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
                </div>

            </div>
        </div>
    )
}

export default Projects
