import React from 'react'
import profilePhoto from '../assets/profilePhoto.jpg'

const IntroContainer = () => {
    return (
        <div className='flex justify-center space-x-5 flex-shrink mb-16 flex-wrap xl:flex-nowrap space-y-10'>
            <div className='space-y-2'>
                <p className="text-4xl font-bold pb-5 font-monsterrat">Hello! I'm Dimitris, a developer based in Greece.</p>
                <p className="text-gray-600 font-assistant text-lg border border-blue-200 rounded-lg p-4 shadow-sm">
                    My journey began at a CS university, where I realized traditional education wasn't the right fit for me. Seeking a more practical approach, I completed the <span className='font-semibold text-black'>Codecademy Fullstack Bootcamp</span>, delving deep into web development and <span className='font-semibold text-black'>project-based learning</span>.
                </p>
                <p className="text-gray-600 font-assistant text-lg border border-blue-400 rounded-lg p-4 shadow-md">
                    I'm deeply driven by the belief that the strength of any endeavor lies in its people. <span className='font-semibold text-black'>Honesty</span> and <span className='font-semibold text-black'>teamwork</span> are non-negotiable values for me. I firmly believe that a company or project is only as strong as the individuals behind it.
                </p>
                <p className="text-gray-600 font-assistant text-lg border border-blue-500 rounded-lg p-4 shadow-lg">
                    I'm known for my ability to <span className='font-semibold text-black'>quickly grasp new concepts</span> and find <span className='font-semibold text-black'>creative solutions</span> to complex problems. Whether it's contributing ideas or executing projects, I'm always committed to delivering <span className='font-semibold text-black'>excellence</span>.
                </p>
                <p className="text-gray-600 font-assistant text-lg border border-blue-700 rounded-lg p-4 shadow-xl">
                    Outside of work, you'll often find me engrossed in personal projects or exploring new avenues for <span className='font-semibold text-black'>growth</span>. If you share my passion for innovation and collaboration, I'd love to connect and <span className='font-semibold text-black'>explore opportunities together</span>.
                </p>
                <div className='flex space-x-5 pt-6 justify-center lg:justify-normal'>
                    <a className="bg-black hover:shadow-lg text-white lg:px-4 px-10 py-2 rounded-sm" href='https://github.com/DimitriosKimpaslis' target='_blank' rel="noreferrer">View GitHub</a>
                    <button className="bg-white text-black hover:opacity-70 lg:px-4 px-10 py-2 rounded-3xl">View Linkedin</button>
                </div>
            </div>
            <div className=''>
                <div className=' rounded-3xl border-4 border-blue-600 border-t-0 border-opacity-50 px-1 pb-4'>
                    <img src={profilePhoto} alt="intro" className="rounded-3xl w-full shadow-2xl" />
                </div>
            </div>
        </div>
    )
}

export default IntroContainer