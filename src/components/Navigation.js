import React from 'react'
import { ImCool } from "react-icons/im";
import { ImList } from "react-icons/im";
import { ImMail2 } from "react-icons/im";
import { ImDownload2 } from "react-icons/im";

const Navigation = () => {
    return (
        <div className='flex justify-between w-[80%] pb-20'>
            <p className='text-xl'>DIMITRIOS KIMPASLIS</p>

            <div className="flex justify-between space-x-6">
                <div className='flex space-x-1 justify-center items-center'>
                    <ImCool size={16} />
                    <p className='text-lg'>About</p>
                </div>
                <div className='flex space-x-1 justify-center items-center'>
                    <ImList size={14}/>
                    <p className='text-lg'>Projects</p>
                </div>
                <div className='flex space-x-1 justify-center items-center'>
                    <ImMail2 />
                    <p className='text-lg'>Contact</p>
                </div>
                <div className='flex space-x-1 justify-center items-center'>
                    <ImDownload2 />
                    <p className='text-lg'>Download CV</p>
                </div>

            </div>
        </div>
    )
}

export default Navigation