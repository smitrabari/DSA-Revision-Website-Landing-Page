import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react'

const Footer = () => {
  return (
    <div className='border-2 flex justify-between border-gray-300 bg-gray-100 inset-shadow-sm'>
      <div className= 'flex mt-8'>
        <img src="src\assets\Footer.png" alt="Description" className="h-20 justify-center"></img>
      </div>
      <div className='mb-5'>
        <p className='font-jakarta font-bold text-2xl'>Resources</p>
        <ul>
          <li>
            <a href='#' className='font-jakarta'>Topics</a>
          </li>
          <li>
            <a href='#' className='font-jakarta'>Cheatsheets</a>
          </li>
          <li>
            <a href='#' className='font-jakarta'>Roadmap</a>
          </li>
          <li>
            <a href='#' className='font-jakarta'>Problems</a>
          </li>
        </ul>
      </div>
      <div className='mb-5'>
        <p className='font-jakarta font-bold text-2xl'>Company</p>
        <ul>
          <li>
            <a href='#' className='font-jakarta'>About</a>
          </li>
          <li>
            <a href='#' className='font-jakarta'>Contact</a>
          </li>
          <li>
            <a href='#' className='font-jakarta'>Privacy Policy</a>
          </li>
          <li>
            <a href='#' className='font-jakarta'>Terms of Use</a>
          </li>
        </ul>
      </div>
      <div className='mb-5'>
        <p className='font-jakarta font-bold text-2xl'>Connect</p>
        <ul>
          <li className="flex items-center gap-1">
            <FaGithub/>
            <a href='#' className='font-jakarta'>GitHub</a>
          </li>
          <li  className="flex items-center gap-1">
            <IoLogoLinkedin/>
            <a href='#' className='font-jakarta'>LinkedIn</a>
          </li>
          <li  className="flex items-center gap-1">
            <FaXTwitter/>
            <a href='#' className='font-jakarta'>Twitter</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center mr-20">
        <span>
          © 2026 DSARevise.<br/>
          All rights reserved.
        </span>
      </div>
    </div>
  )
}

export default Footer