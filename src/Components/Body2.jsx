import { FaArrowRightLong } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import React from 'react'

const Body2 = () => {
  return (
    <div>
        <div className='flex justify-center items-center p-4'>
            <button className="font-jakarta font-bolds shadow-lg text-blue-400 border-2 border-blue-400 text-1xl px-6 py-3 rounded-lg items-center flex gap-2 mt-4">
                      <a href="#">View All Topics </a> <FaArrowRightLong />
            </button> 
        </div>
        <div className="flex justify-center pb-5">
          <p className="text-4xl font-jakarta font-bold">Everything You Need to Revise Smarter</p>
        </div>
        <div className="flex flex-row justify-between items-center  py-6 mx-20 gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-50 rounded-full p-2">
                    <IoDocumentTextOutline className="text-6xl text-indigo-500" />
                  </div>
                  <p className="leading-tight font-jakarta font-bold">
                    <span className="text-2xl">Revision Notes</span> <br /> Crisp, to-the-point notes
                                                            <br/>for quick revision.
                  </p>
                </div>
                <div className="h-12 w-0.75 bg-gray-300"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-violet-50 rounded-full p-2">
                    <GoLightBulb className="text-6xl text-violet-500" />
                  </div>
                  <p className="leading-tight font-jakarta font-bold">
                    <span className="text-2xl">Visual Explanations</span> <br /> Diagrams and visuals to
                                                                                            <br/>make concepts clear.
                  </p>
                </div>
                <div className="h-12 w-0.75 bg-gray-300"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 rounded-full p-2">
                    <FaCode className="text-6xl text-green-500" />
                  </div>
                  <p className="leading-tight font-jakarta font-bold">
                    <span className="text-2xl ">Curated Problems</span> <br /> Handpicked problems
                                                                                        <br/>from easy to hard.
                  </p>
                </div>
                <div className="h-12 w-0.75 bg-gray-300"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-50 rounded-full p-2">
                    <BsGraphUpArrow className="text-6xl text-orange-500" />
                  </div>
                  <p className="leading-tight font-jakarta font-bold">
                    <span className="text-2xl ">Progress Tracking</span> <br />Track your progress
                                                                            <br/>and stay consistent.
                  </p>
                </div>
            </div>
            <div className="bg-indigo-300 p-4 mx-20 rounded-3xl flex justify-between items-center mb-12 mt-10 shadow-2xl">
                <div className="py-2 ml-50">
                    <IoRocketOutline className="text-9xl"/>
                </div>
                <div>
                    <div className="items-center">
                        <p className="text-4xl font-bold font-jakarta">Ready for your next interview?</p>
                    </div>
                    <div className="items-center">
                        <span className="text-lg font-bold font-jakarta leading-tight text-gray-800">
                            Start your revision today and build the confidence <br/>
                            to ace any coding challenge.
                        </span>
                    </div>
                </div>
                <div className="mr-50">
                    <button className="font-jakarta font-bolds shadow-lg bg-blue-600 text-white text-1xl p-4 rounded-lg items-center flex gap-2 mt-4">
                            <a href="#">Start Revising Now</a><FaArrowRightLong/>   
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Body2