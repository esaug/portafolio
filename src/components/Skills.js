import React from 'react'
import {SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiSolidity, SiBlockchaindotcom, SiGit, SiWeb3Dotjs} from 'react-icons/si'

export default function Skills () {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="tech" >

      
        <p className='text-2x1 text-black sm:text-4xl pt-4 font-bold text-center'>
            Tech I use
        </p>
      
      <div className='flex flex-wrap justify-center pt-2'>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52'>
            <SiReact color="#2196f3" className="mx-auto text-4xl"/>
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> React </p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52'>
            <SiJavascript color="#ffdf00" className="mx-auto text-4xl"/>
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> JavaScript </p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52'>
            <SiTailwindcss color="#2196f3" className="mx-auto text-4xl"/>
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> Tailwindcss </p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52'>
            <SiHtml5 color="#ff6600" className="mx-auto text-4xl"/>
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> HTML </p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52'>
            <SiSolidity color="#5c5c8a" className="mx-auto text-4xl"/>
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> Solidity </p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52'>
            <SiBlockchaindotcom color="#ffdf00" className="mx-auto text-4xl"/>
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> Blockchain </p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52'>
            <SiWeb3Dotjs color="#2196f3" className="mx-auto text-4xl"/>
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> Web3.js </p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52'>
            <SiGit color="ff3300" className="mx-auto text-4xl"/>
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> Git </p>
        </div>

        

      </div>
    </div>
  )
}
