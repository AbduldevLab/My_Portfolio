import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="about w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>

        <p className="text-xl mt-5">
        I received my BSc 2:1 Honours Degree in Computer Science & Software Engineering from the National University of Ireland Maynooth, as well as an 82% on my Final Year Project.
         I'm excited to learn new technologies and to develop my soft and technical abilities.
        </p>

        <br />

        <p className="text-xl">
        I have always had a passion for problem-solving and technology. Growing up, I was always fascinated by the intricate workings of computers and how they could be used to create solutions to everyday problems. I have a particular interest in working with the internet and the web. 
        I am constantly intrigued by the ever-changing landscape of the online world and how it can be leveraged to create innovative solutions. 
        I have experience using React to develop web applications, and I find the process of creating dynamic and interactive interfaces to be both challenging and rewarding.<br /> <br />
        In my pursuit of knowledge and expertise in the field, I discovered my aptitude for algorithms and honed my problem-solving skills. I am driven by a desire to solve problems and achieve the goals I set for myself.
        Outside of my academic pursuits, I love exploring new cultures and traveling with friends. <br/> <br/>
        Over the years, I have visited more than 10 different countries, each with its own unique experiences and memories. Additionally, I have a deep love for sports and staying active. Whether it's joining a gym or taking my dog, Jax, out for a jog, I always find a way to keep myself active and engaged
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
