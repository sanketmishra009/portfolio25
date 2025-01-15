import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'sanketmishra009@gmail.com';
    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000 * 2);
    };
    return (
        <section className="c-space my-20 pt-28 bg-[url(' assets /gridbg.png')] bg-clip-border" id='about' >
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full bg-[url('assets/gridbg.png')] bg-contain">
                <div className='col-span-1 lg:row-span-2'>
                    <div className="grid-container bg-[url('assets/gridbg.png')]">
                        <img src="assets/grid1.png" alt="grid-1" className='sm:h-[276px] h-full w-full object-contain' />
                        <div className="">
                            <p className="grid-headtext text-grad-small">Hi, I'm Sanket Mishra</p>
                            <p className=" grid-subtext">
                                A machine learning engineer with interests in computer vision , data structures and algorithms.
                                <br />
                                I also develope fullstack nodejs applications.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:row-span-2">
                    <div className="grid-container ">
                        <img src="assets/grid2.png" alt="grid2" className='sm:h-[276px] h-full w-full object-contain' />
                        <p className="grid-headtext text-grad2">
                            Tech Stack
                        </p>
                        <p className="grid-subtext text-grad2-small">
                            I specialize in the mearn stack with familarity of tools in the nodejs ecosystem.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 lg:row-span-3">
                    <div className="grid-container bg-[url('assets/gridbg.png')] bg-top-right">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 32, lng: -99, text: 'Dallas, Texas', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext text-grad2">I’m very flexible with time zone communications & locations</p>
                            <br />
                            <p className="grid-subtext">I&apos;m based in Texas, United States of America and open to remote work worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 lg:row-span-2">
                    <div className="grid-container bg-[url('assets/gridbg.png')] bg-cover">
                        <div className="flex justify-evenly">
                            <img src="assets/gridml.png" alt="gridml" className='w-auto sm:h-[15rem] h-full object-contain' />
                            <img src="assets/gridml2.png" alt="gridml" className='w-auto sm:h-[15rem] h-full object-contain' />
                        </div>
                        <p className="grid-headtext text-grad2">
                            Machine Learning
                        </p>
                        <p className="grid-subtext bg-black">
                            I have a solid foundation in machine learning, with hands-on experience in developing and implementing algorithms for tasks like image analysis and data modeling. My expertise includes working with frameworks like TensorFlow and PyTorch, and I am proficient in tools like NumPy, Pandas, and scikit-learn for data preprocessing and analysis. I have applied machine learning techniques to real-world problems, enhancing my understanding of model training, evaluation, and optimization. My background reflects a strong passion for advancing AI solutions through continuous learning and practical application.
                        </p>
                    </div>
                </div>
                <div className="xl:col-span-1 lg:row-span-1">
                    <div className="grid-container">
                        <div className="flex justify-start">
                            <img src="/vite.svg" alt="gridImage" className="h-[5rem] w-auto object-contain" />
                            <img src="assets/gridReact.svg" alt="gridImage" className="h-[5rem] w-auto object-contain mix-blend-lighten" />
                        </div>
                        <div className="flex justify-start">
                            <img src="assets/gridTF.png" alt="gridImage" className="h-[5rem] w-auto object-contain" />
                            <img src="assets/gridOC.png" alt="gridImage" className="h-[5rem] w-auto object-contain mix-blend-multiply" />
                        </div>

                    </div>
                </div>
                <div className="xl:col-span-2 lg:row-span-2 ">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid3" className='w-full sm:h-[266px] h-full object-contain' />
                        <p className="grid-headtext text-grad2">My passion for programming</p>
                        <p className='grid-subtext bg-black'>
                            I love solving problems with code on websites like leetcode and codeforces. Improving problem solving not only enhances the way you look at computer science problems but also real world ones as well! My preferred language for problem solving is c++ however, I use python for data science applications and javascript ofcourse for node stuff.
                        </p>
                    </div>
                </div>

                <div className="xl:col-span-1 lg:row-span-2">
                    <div className="grid-container items-center bg-[url('assets/gridbg.png')] bg-btoom-right">
                        <img src="assets/grid4.png" alt="grid4" className='w-full md:h-[200px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='flex justify-center items-center gap-x-1  rounded-xl w-60 h-auto'>
                            <img src={isCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" onClick={handleCopy} />
                            {/* <p className='grid-subtext text-center font-semibold'>{isCopied ? 'email copied!' : 'Contact Me'}</p> */}
                            <button onClick={handleCopy} className='text-white'>
                                <div className="flex items-center justify-center">
                                    {/* <span className='flex relative h-3 w-3'>
                                        <span className='btn-ping'></span>
                                        <span className='btn-ping_dot'></span>
                                    </span> */}
                                    {isCopied ? 'email copied!' : 'Contact Me'}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section >
    )
}

export default About
