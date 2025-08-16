import React from "react";
import globe from "../assets/globe.png"
import soft from "../assets/soft.png"
import arti from "../assets/artificial.png"
import call from "../assets/calls.png"


const services = () => {
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <div className="font-Ovo text-center mb-12">
        <div className="mb-12">What i offer</div>
        <div className="text-4xl">My services</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
        <div className="border-1 border-gray-600 rounded-xl p-5">
          <div className="w-8 h-8 bg-pink-500 flex justify-center items-center mb-2 p-1 rounded-lg">
                <img src={globe} alt="" />
          </div>             
          <div className="font-Ovo text-xl font-semibold mb-2">Web Development</div>
          <p className="text-sm text-gray-600">
            Building fast, responsive, and user-friendly websites using modern
            technologies like React and Tailwind CSS.
          </p>
        </div>
        <div className="border-1 border-gray-600 rounded-xl p-5">
          <div className="w-8 h-8 bg-pink-500 flex justify-center items-center mb-2 rounded-lg">
                <img src={soft} alt="" />
          </div>
          <div className="font-Ovo text-xl font-semibold mb-2">Software Development</div>
          <p className="text-sm text-gray-600">
            Developing scalable desktop and web-based software solutions
            tailored to business needs.
          </p>
        </div>
        <div className="border-1 border-gray-600 rounded-xl p-5">
            <div className="w-8 h-8 bg-pink-500 flex justify-center items-center mb-2 p-0.5 rounded-lg">
                <img src={arti} alt="" />
          </div>
          <div className="font-Ovo text-xl font-semibold mb-2">
            Artificial Intelligence
          </div>
          <p className="text-sm text-gray-600">
            Creating smart applications with machine learning and AI to solve
            real-world problems.
          </p>
        </div>
        <div className="border-1 border-gray-600 rounded-xl p-5">
            <div className="w-8 h-8 bg-pink-500 flex justify-center items-center mb-2 p-0.5 rounded-lg">
                <img src={call} alt="" />
          </div>
          <div className="font-Ovo text-xl font-semibold mb-2">
            Sales Development Representative
          </div>
          <p className="text-sm text-gray-600">
            Driving lead generation and outreach strategies to convert prospects
            into valuable business opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;
