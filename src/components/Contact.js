import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import facebookPng from '../assets/logos/Facebook.png'
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
    const goToNewPage = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div id='contact'>
            <p className="text-4xl font-bold pb-3 font-monsterrat lg:text-left text-center">Contact</p>
            <p className="text-gray-700 font-assistant lg:text-left text-center">You can find me here:</p>
            <br></br>
            <div className='flex lg:justify-between justify-center lg:pr-24 flex-wrap lg:flex-nowrap gap-y-16 lg:pt-10 pt-4'>
                <div>
                    <p className='font-spirax text-5xl lg:text-left text-center pb-7'>“Give a man a program,<br></br> frustrate him for a day.<br></br>
                        Teach a man to program,<br></br> frustrate him for a lifetime.”</p>
                    <p className='text-2xl font-assistant text-right'>Muhammad Waseem</p>
                </div>
                <div className='space-y-6 lg:order-last -order-1'>
                    <p className='text-2xl font-assistant text-center underline'>dimitrioskimpaslis@gmail.com</p>
                    <div className='grid grid-cols-2 gap-6 font-monsterrat'>
                        <div className='flex gap-1 justify-center'>
                            <p className='cursor-pointer hover:text-gray-700' onClick={() => goToNewPage("https://www.linkedin.com/in/dimitris-kimpaslis-b23bb3197/")}>Linkedin</p>
                            <FaLinkedin />
                        </div>
                        <div className='flex justify-center gap-1'>
                            <p className='cursor-pointer hover:text-gray-700' onClick={() => goToNewPage("https://github.com/DimitriosKimpaslis")}>GitHub</p>
                            <AiOutlineGithub />
                        </div>
                        <div className='flex justify-center gap-1'>
                            <p className='cursor-pointer hover:text-gray-700' onClick={() => goToNewPage("https://www.facebook.com/KimpaslisDimitris/")}>Facebook</p>
                            <FaFacebookMessenger />
                        </div>
                        <div className='flex justify-center gap-1'>
                            <p className='whitespace-nowrap'>Tel: +30 6932992614</p>
                            <FaPhoneAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact