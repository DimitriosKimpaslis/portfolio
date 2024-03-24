import React from 'react'
import profilePhoto from '../assets/profilePhoto.jpg'

const IntroContainer = () => {
    return (
        <div className='flex space-x-5 flex-shrink'>
            <div className='w-[50%]'>
                <p className="text-4xl font-bold pb-5">Hello! I'm Dimitris, a developer based in Greece.</p>
                <p className="text-gray-500">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <br></br>
                <p className="text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                <br></br>
                <p className="text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <br></br>
                <div className='flex space-x-5'>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-3xl">View GitHub</button>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-3xl">View Linkedin</button>
                </div>
            </div>
            <div className='w-[50%]'>
                <div className='rounded-3xl border-4 border-blue-600 border-t-0 border-opacity-50 px-1 pb-4'>
                    <img src={profilePhoto} alt="intro" className="rounded-3xl w-full shadow-2xl" />
                </div>
            </div>
        </div>
    )
}

export default IntroContainer