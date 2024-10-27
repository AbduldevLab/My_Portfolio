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
          I've always had a passion for technology and a curiosity about how things work. Growing up, I was fascinated by the intricate workings of computers and their potential to solve everyday problems. My interests extend to the internet, especially web and mobile applications, as well as AI and machine learning. 
          The ever-evolving digital landscape constantly intrigues me, and I enjoy exploring how it can be utilised to create innovative solutions. 
          I have hands-on experience using React to develop web and mobile applications, and I find the process of building dynamic, interactive interfaces both challenging and rewarding.
          <br /><br />
          In my pursuit of knowledge in this field, I've developed a strong aptitude for algorithms and enhanced my problem-solving skills. I'm driven by the desire to overcome challenges and achieve the goals I set for myself. 
          AI and machine learning are undoubtedly the future, and they captivate me because, at the core of all these exciting technological solutions, the ultimate aim is to make life easier for people.
          <br /><br />
          Outside of my professional interests, I enjoy exploring new cultures and traveling with friends. Over the years, I've visited more than ten countries, each offering unique experiences and memories. Additionally, I have a passion for football and staying active. Whether it's hitting the gym or taking my dog for a walk, I always find ways to stay engaged and active.
      </p>
      </div>
    </div>
    </div>
  );
};

export default About;
