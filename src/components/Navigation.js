import React from 'react'
import { GiCoffeeCup } from "react-icons/gi";
import { ImList } from "react-icons/im";
import { ImMail2 } from "react-icons/im";
import { ImDownload2 } from "react-icons/im";

const Navigation = () => {
    return (
        <div className='flex justify-between items-center lg:w-[80%] w-full pb-20 font-semibold text-gray-700 font-monsterrat' id='about'>
            <p className='text-xl'>DIMITRIOS KIMPASLIS</p>

            <div className="flex justify-between space-x-6 text-base">
                <div className='space-x-1 justify-center items-center hidden xl:flex hover:text-gray-400'>
                    <GiCoffeeCup size={16} className='mb-1'/>
                    <a href='#about'>About</a>
                </div>
                <div className=' space-x-1 justify-center items-center hidden xl:flex hover:text-gray-400'>
                    <ImList size={14} />
                    <a className='' href='#projects'>Projects</a>
                </div>
                <div className='space-x-1 justify-center items-center hidden xl:flex hover:text-gray-400'>
                    <ImMail2 size={14}/>
                    <a href='#contact'>Contact</a>
                </div>
                <div className='hidden xl:flex space-x-1 justify-center items-center hover:text-gray-400'>
                    <ImDownload2 />
                    <a href='Dimitrios_Kimpaslis_CV.txt' download={'Dimitrios_Kimpaslis_CV.txt'}>Download CV</a>
                </div>

            </div>
        </div>
    )
}

export default Navigation