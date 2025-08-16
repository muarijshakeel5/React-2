import React from "react";
import profile from "../assets/home.png";
import html from "../assets/div.png";
import grad from "../assets/graduation-cap.png"
import proj from "../assets/complete.png"
import vs from "../assets/vs.png"
import git from "../assets/git.png"
import react from "../assets/react.png"
import talwind from "../assets/talwind.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
const Introduction = () => {
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <div className="font-Ovo text-center mb-12">
        <div className="mb-12">Introduction</div>
        <div className="text-4xl">About me</div>
      </div>

      <div className="flex items-center justify-center space-x-15">
        <div
          style={{ backgroundColor: "#E9E3DF" }}
          className="w-75 h-90 rounded-3xl hidden md:block overflow-hidden"
        >
          <img src={profile} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="max-w-115 text-sm text-justify px-5">
            I'm a Computer Science graduate from UCP with a strong foundation in
            Full-Stack Development, Artificial Intelligence, and Sales. I've had
            the opportunity to work with renowned organizations, where I helped
            drive innovation, efficiency, and business growth through both
            technology and strategy.
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-5">
              <div className="border-1 border-black p-2.5">
                <div className="w-8 h-8">
                <img src={html} alt="" />
                </div>
                <div className="font-semibold mt-8 mb-2">Langauges</div>
                <div className="font-extralight text-xs text-left">
                 Html, CSS, C++, Python, React.Js, Next.Js
                </div>
              </div>
              <div className="border-1 border-black p-2.5">
                <div className="w-8 h-8">
                    <img src={grad} alt="" />
                </div>
                <div className="font-semibold mt-8 mb-2">Education</div>
                <div className="font-extralight text-xs text-left">
                  Bachelors in Computer Science 
                </div>
                </div>
              <div className="border-1 border-black p-2.5">
                <div className="w-8 h-8">
                <img src={proj} alt="" />
                </div>
                <div className="font-semibold mt-8 mb-2">Projects</div>
                <div className="font-extralight text-xs text-left">
                  Completed more than 10 projects
                </div>
              </div>
            </div>
            <div>
                <div className="text-xs font-extralight mb-2">Tools i use</div>
            </div>
            <div className="flex flex-items justify-start h-10 space-x-2">
                <img src={vs} alt="" className="border-1 border-gray-500 rounded-lg"/>
                <img src={git} alt="" className="border-1 border-gray-500 rounded-lg" />
                <img src={react} alt="" className="border-1 border-gray-500 rounded-lg"/>
                <img src={talwind} alt="" className="border-1 border-gray-500 rounded-lg" />
                <img src={node} alt="" className="border-1 border-gray-500 rounded-lg"/>
                <img src={mongo} alt="" className="border-1 border-gray-500 rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
