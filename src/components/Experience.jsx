import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import redux from "../assets/redux.png";
import typescript from "../assets/typescript.png";
import firebase from "../assets/firebase.png";
import java from "../assets/java.png";
import cSharp from "../assets/cSharp.png";

import accenture from "../assets/accenture.png";
import brainnest from "../assets/brainnest.png";
import valeo from "../assets/valeo.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-700",
    },
    {
      id: 10,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    {
      id: 11,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 12,
      src: cSharp,
      title: "C#",
      style: "shadow-purple-600",
    },
  ];

  const internships = [
    {
      id: 1,
      src: accenture,
      role: "Technical Customer Support",
      duration: "June 2022 - August 2022",
      style: "shadow-purple-600"
    },
    {
      id: 2,
      src: brainnest,
      role: "Front-end Dev",
      duration: "April 2022 - May 2022",
      style: "shadow-yellow-600"
    },
    {
      id: 3,
      src: valeo,
      role: "Support Engineer",
      duration: "January 2022 - March 2022",
      style: "shadow-green-400"
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">I have experience with the following technologies.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Internship
          </p>
          <p className="py-6">I've completed the following internships so far with.</p>
        </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {internships.map(({ id, src, role, duration, style }) => (
               <div
               key={id}
               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
             >
               <img src={src} alt="" className="w-20 mx-auto" />
               <div className="card__info">
               <p className="mt-6" style={{ flexBasis: "100%" }}>{role}</p>
                <p className="mt-2" style={{ flexBasis: "100%" }}>{duration}</p>
                </div>
             </div>
              ))}
            </div>
          </div>
        </div>

  );
};

export default Experience;
