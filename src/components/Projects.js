import Hitek from '../assets/Hitek.png'
import chitChat from '../assets/chitchat.png'
import visualTyping from '../assets/visualtyping.png'
import propagandast from '../assets/propagandast.png'
import taskwhisper from '../assets/taskwhisper.png'
import { AiOutlineGithub } from "react-icons/ai";
import webTriad from '../assets/logos/html5-logo-31819.png'
import reactLogo from '../assets/logos/1174949_js_react js_logo_react_react native_icon.png'
import tailwindLogo from '../assets/logos/pngwing.com (1).png'
import gitLogo from '../assets/logos/1916016_git_logo_media_social_icon.png'
import supabaseLogo from '../assets/logos/supabase-ar21.png'
import netlifyLogo from '../assets/logos/netlify-seeklogo.png'
import sslLogo from '../assets/logos/ssl.png'
import VPC from '../assets/logos/Virtual Private Cloud.png'
import stripeLogo from '../assets/logos/stripe-logo-2.png'
import RDS from '../assets/logos/RDS.png'
import EC2 from '../assets/logos/EC2.png'
import apiGateway from '../assets/logos/API Gateway.png'
import lambda from '../assets/logos/Lambda.png'
import mui from '../assets/logos/icons8-material-ui-480.png'
import { Tooltip } from '@mui/material'
import vite from '../assets/logos/Vite.js.png'
import nginx from '../assets/logos/NGINX.png'
import express from '../assets/logos/Express.png'
import nodejs from '../assets/logos/Node.js.png'
import socketio from '../assets/logos/Socket.io.png'
import bash from '../assets/logos/Bash.png'
import linux from '../assets/logos/Linux.png'
import postgresql from '../assets/logos/PostgresSQL.png'
import postman from '../assets/logos/Postman.png'
import python from '../assets/logos/Python.png'
import powershell from '../assets/logos/Powershell.png'
import javascript from '../assets/logos/JavaScript.png'
import reactNative from '../assets/logos/react-native.png'
import expo from '../assets/logos/expo.png'
import android from '../assets/logos/Android.png'
import { ImDownload2 } from "react-icons/im";


const Projects = () => {

  return (
    <div id='projects' className='pb-20'>
      <p className="text-4xl font-bold pb-3 font-monsterrat lg:text-left text-center">Projects</p>
      <p className="text-gray-700 font-assistant lg:text-left text-center">Some of the projects I have worked on:</p>
      <br></br>
      <div className='flex flex-col space-y-32 lg:space-y-16 font-assistant text-base'>
        <div className='flex lg:space-x-2 flex-wrap lg:flex-nowrap space-y-4'>
          <div className='flex-1'>
            <img src={Hitek} alt="hitek" className="rounded-3xl w-full " />
          </div>
          <div className=' flex flex-col lg:flex-1 flex-0'>
            <div className='space-y-2'>
              <p className="text-4xl font-bold pb-3">Hitek</p>
              <a className='text-blue-500 hover:text-blue-700' href='https://hitekorg.netlify.app/' target='_blank' rel='noreferrer'>https://hitekorg.netlify.app/</a>
              <a className='flex items-center gap-2 p-2 bg-black text-white hover:shadow-xl rounded-sm w-fit' href='https://github.com/DimitriosKimpaslis/HiTek' target='_blank' rel='noreferrer'>View Repository <AiOutlineGithub color='white' /></a>
              <p className='font-bold underline underline-offset-4 text-lg'>Introducing Hitek (High-Tech), a tech e-commerse site.</p>
              <p className="text-gray-700">The e-commerce platform boasts a real-time <span className='font-bold'>inventory system</span>, ensuring items are marked unavailable instantly to streamline your shopping experience.

                Navigate effortlessly with a comprehensive <span className='font-bold'>filter system</span> to find precisely what you need, from the latest gadgets to must-have accessories. <span className='font-bold'>Powered by Stripe</span>, a well known payment process ,it guarantees security and efficiency.<br></br>

                Behind the scenes, integration with <span className='font-bold'>AWS Lambda</span> ensures swift responses to payment events, while the <span className='font-bold'>backend operates seamlessly on Supabase</span>'s free-tier plan.
              </p>
              <div>
                <p className="text-2xl font-bold pb-3">Technologies</p>
                <div className='flex space-x-3 space-y-2 flex-wrap'>
                  <Tooltip title="HTML5 - CSS3 - Javascript" arrow>
                    <img src={webTriad} alt="hitek" className="w-24 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="React" arrow>
                    <img src={reactLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Tailwind" arrow>
                    <img src={tailwindLogo} alt="hitek" className="w-12 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Git" arrow>
                    <img src={gitLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Supabase" arrow>
                    <img src={supabaseLogo} alt="hitek" className="w-32 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Netlify" arrow>
                    <img src={netlifyLogo} alt="hitek" className="w-24 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Stripe" arrow>
                    <img src={stripeLogo} alt="hitek" className="w-16 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="AWS Lambda" arrow>
                    <img src={lambda} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="AWS Api Gateway" arrow>
                    <img src={apiGateway} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Material UI" arrow>
                    <img src={mui} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:space-x-2 flex-wrap lg:flex-nowrap space-y-4'>
          <div className='flex-1'>
            <img src={chitChat} alt="chit chat logo" className="rounded-3xl w-full " />
          </div>
          <div className=' flex flex-col lg:flex-1 flex-0'>
            <div className='space-y-2'>
              <p className="text-4xl font-bold pb-3">ChitChat</p>
              <a className='text-blue-500 hover:text-blue-700' href='http://messagingclientchitchat.gr/' target='_blank' rel='noreferrer'>http://messagingclientchitchat.gr/</a>
              <a className='flex items-center gap-2 p-2 bg-black text-white hover:shadow-xl rounded-sm w-fit' href='https://github.com/DimitriosKimpaslis/ChitChat' target='_blank' rel='noreferrer'>View Repository <AiOutlineGithub color='white' /></a>              <p className='font-bold underline underline-offset-4 text-lg'>Introducing Chit Chat, a real-time messaging platform.</p>
              <p className="text-gray-700">Developed and deployed from scratch, this application is <span className='font-bold'>hosted on an EC2 instance,</span> ensuring reliability and scalability for all users.

                With <span className='font-bold '>Socket.IO</span> powering the <span className='font-bold'>WebSockets</span>, messages are delivered instantly, fostering fluid conversations in real time. The backend is integrated with <span className='font-bold'>AWS RDS</span>, utilizing <span className='font-bold'>PostgreSQL</span> for robust and efficient data storage.

                Security is paramount at Chit Chat , user <span className='font-bold'>passwords are encrypted</span> to safeguard sensitive information.<br></br> Leveraging <span className='font-bold'>Vite</span> for rapid development, the frontend delivers a smooth and intuitive user experience.

                Rest assured, your data is protected with <span className='font-bold'>SSL certification from DigiCert</span>, ensuring encrypted communication at all times. <span className='font-bold'>Nginx</span> serves as the trusted reverse proxy, enhancing performance and security for a stable user experience.
              </p>
              <div>
                <p className="text-2xl font-bold pb-3">Technologies</p>
                <div className='flex space-x-3 space-y-2 flex-wrap'>
                  <Tooltip title="HTML5 - CSS3 - Javascript" arrow>
                    <img src={webTriad} alt="hitek" className="w-24 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="React" arrow>
                    <img src={reactLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Tailwind" arrow>
                    <img src={tailwindLogo} alt="hitek" className="w-12 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Git" arrow>
                    <img src={gitLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="AWS EC2" arrow>
                    <img src={EC2} alt="ec2" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="AWS RDS" arrow>
                    <img src={RDS} alt="RDS" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="AWS Virtual Private Cloud" arrow>
                    <img src={VPC} alt="vpc" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Socket io" arrow>
                    <img src={socketio} alt="socket io" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Material UI" arrow>
                    <img src={mui} alt="mui" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="SSL certified" arrow>
                    <img src={sslLogo} alt="ssl" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Vite" arrow>
                    <img src={vite} alt="vite" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Nginx" arrow>
                    <img src={nginx} alt="nginx" className="w-20 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="NodeJS" arrow>
                    <img src={nodejs} alt="nodejs" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="ExpressJS" arrow>
                    <img src={express} alt="express js" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Linux" arrow>
                    <img src={linux} alt="linux" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Bash" arrow>
                    <img src={bash} alt="bash" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="PostgresSQL" arrow>
                    <img src={postgresql} alt="postgresql" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Postman" arrow>
                    <img src={postman} alt="postman" className="w-10 h-auto object-contain" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:space-x-2 flex-wrap lg:flex-nowrap space-y-4'>
          <div className='flex-1'>
            <img src={visualTyping} alt="hitek" className="rounded-3xl w-full " />
          </div>
          <div className=' flex flex-col lg:flex-1 flex-0'>
            <div className='space-y-2'>
              <p className="text-4xl font-bold pb-3">Visual Typing</p>
              <a className='text-blue-500 hover:text-blue-700' href='https://visualtyping.netlify.app/' target='_blank' rel='noreferrer'>https://visualtyping.netlify.app/</a>
              <a className='flex items-center gap-2 p-2 bg-black text-white hover:shadow-xl rounded-sm w-fit' href='https://github.com/DimitriosKimpaslis/VisualTesting' target='_blank' rel='noreferrer'>View Repository <AiOutlineGithub color='white' /></a>              <p className='font-bold underline underline-offset-4 text-lg'>Introducing Visual Typing, an MBTI visual typing , testing platform.</p>
              <p className="text-gray-700">Visual Typing, is designed to unravel the mysteries of personality types through analyzing celebrity images. Developed from scratch, Visual Typing has a vast database of <span className='italic'>1200 celebrity photos</span> sourced from the internet through automated <span className='font-bold'>Python scripts</span>.
                <br></br>
                Engage in a stimulating journey of self-discovery as you analyze each celebrity image and determine their MBTI personality type. But Visual Typing doesn't stop there—<span className='font-bold'>your responses are recorded and analyzed, utilizing mathematical formulas to generate insightful reports.</span><br></br>

                Explore easily readable graphs that provide <span className='font-bold'>detailed insights into your performance, including your accuracy in typing celebrities, proximity to each personality type, strengths, weaknesses, and areas for improvement</span>. The platform provides more than just a simple testing experience; it offers an engaging exploration of MBTI typing through celebrity imagery, enriching your understanding of personality types.</p>
              <div>
                <p className="text-2xl font-bold pb-3">Technologies</p>
                <div className='flex space-x-3 space-y-2 flex-wrap'>
                  <Tooltip title="HTML5 - CSS3 - Javascript" arrow>
                    <img src={webTriad} alt="hitek" className="w-24 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="React" arrow>
                    <img src={reactLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Tailwind" arrow>
                    <img src={tailwindLogo} alt="hitek" className="w-12 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Git" arrow>
                    <img src={gitLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Supabase" arrow>
                    <img src={supabaseLogo} alt="hitek" className="w-32 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Netlify" arrow>
                    <img src={netlifyLogo} alt="hitek" className="w-24 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Material UI" arrow>
                    <img src={mui} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Python" arrow>
                    <img src={python} alt="python" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Powershell" arrow>
                    <img src={powershell} alt="powershell" className="w-10 h-auto object-contain" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:space-x-2 flex-wrap lg:flex-nowrap space-y-4'>
          <div className='flex-1'>
            <img src={propagandast} alt="hitek" className="rounded-3xl w-full " />
          </div>
          <div className=' flex flex-col lg:flex-1 flex-0'>
            <div className='space-y-2'>
              <p className="text-4xl font-bold pb-3">Propagandast</p>
              <a className='text-blue-500 hover:text-blue-700' href='https://propagandast.netlify.app/' target='_blank' rel='noreferrer'>https://propagandast.netlify.app/</a>
              <a className='flex items-center gap-2 p-2 bg-black text-white hover:shadow-xl rounded-sm w-fit' href='https://github.com/DimitriosKimpaslis/Propagandast' target='_blank' rel='noreferrer'>View Repository <AiOutlineGithub color='white' /></a>
              <p className='font-bold underline underline-offset-4 text-lg'>Introducing Propagandast, a movie reviews platfrom.</p>

              <p className="text-gray-700">
                Propagandast, your mobile-friendly destination for insightful movie reviews and interactive<span className='font-bold'> content management</span>. Born from a love of cinema, Propagandast offers a unique platform for movie enthusiasts and critics alike, accessible anytime, anywhere.<br></br>

                The <span className='font-bold'>new post form</span> empowers users to contribute their own reviews directly through the website, ensuring a dynamic and collaborative experience.

                Take control of your content with the intuitive content manager, allowing you to <span className='font-bold'>edit, delete, or track the traffic of your reviews</span> effortlessly. <span className='font-bold'>Personalize your profile</span> with ease, ensuring your voice is heard with every review you publish.<br></br>

                Rest assured, your data is safeguarded with Supabase's robust <span className='font-bold'>row-level security, ensuring the confidentiality and integrity of your information</span>. Plus, enhance your reviews with captivating movie trailers from YouTube, seamlessly integrated through the use of <span className='font-bold'>iframes</span>.</p>
              <div>
                <p className="text-2xl font-bold pb-3">Technologies</p>
                <div className='flex space-x-3 space-y-2 flex-wrap'>
                  <Tooltip title="HTML5 - CSS3 - Javascript" arrow>
                    <img src={webTriad} alt="hitek" className="w-24 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="React" arrow>
                    <img src={reactLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Tailwind" arrow>
                    <img src={tailwindLogo} alt="hitek" className="w-12 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Git" arrow>
                    <img src={gitLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Supabase" arrow>
                    <img src={supabaseLogo} alt="hitek" className="w-32 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Netlify" arrow>
                    <img src={netlifyLogo} alt="hitek" className="w-24 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Material UI" arrow>
                    <img src={mui} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:space-x-2 flex-wrap lg:flex-nowrap space-y-4'>
          <div className='flex-1'>
            <img src={taskwhisper} alt="hitek" className="rounded-3xl w-full " />
          </div>
          <div className=' flex flex-col lg:flex-1 flex-0'>
            <div className='space-y-2'>
              <p className="text-4xl font-bold pb-3">Task Whisper</p>
              <div className='flex space-x-2 '>
                <a className='flex items-center gap-2 p-2 bg-black text-white hover:shadow-xl rounded-sm' href='https://github.com/DimitriosKimpaslis/TaskWhisper' target='_blank' rel='noreferrer'>View Repository <AiOutlineGithub color='white' /></a>
                <a className='flex items-center gap-2 p-2 bg-black text-white hover:shadow-xl rounded-sm' href='https://drive.google.com/file/d/1MoV2OsOoFUVve6wRX7-z_iJ1AQ4jgjVn/view?usp=drivesdk' target='_blank' rel='noreferrer'>Download APK <ImDownload2 color='white' size={14} /></a>
              </div>
              <p className='font-bold underline underline-offset-4 text-lg'>Introducing Task Whisper, a mobile task manager.</p>
              <p className="text-gray-700">
                Task Whisper, your ultimate task manager designed exclusively for Android users. Built with <span className='font-bold'>React Native and Expo</span>, Task Whisper offers an intuitive mobile experience, ensuring productivity is at your fingertips wherever you go.<br></br>

                Task Whisper doesn't just manage your tasks—it prioritizes them. With its color-coded prioritization system, easily sort your tasks by importance, allowing you to focus on what matters most.

                Watch as completed tasks transform into satisfying visual representations, adding a fun element to your productivity journey with Task Whisper's sleek and gaming-like UI.<br></br>

                Forget about the hassle of online connectivity—Task Whisper operates seamlessly offline, allowing you to access your tasks and reminders <span className='font-bold'>without the need for an internet connection</span>. Plus, stay on track with <span className='font-bold'>timely notifications</span>, ensuring you never miss an important task again.</p>
              <div>
                <p className="text-2xl font-bold pb-3">Technologies</p>
                <div className='flex space-x-3 space-y-2 flex-wrap'>
                  <Tooltip title="Javascript" arrow>
                    <img src={javascript} alt="js logo" className="w-12 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="React Native" arrow>
                    <img src={reactNative} alt="react native logo" className="w-12 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Git" arrow>
                    <img src={gitLogo} alt="hitek" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Expo" arrow>
                    <img src={expo} alt="expo" className="w-10 h-auto object-contain" />
                  </Tooltip>
                  <Tooltip title="Android" arrow>
                    <img src={android} alt="android logo" className="w-14 h-auto object-contain" />
                  </Tooltip>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects