import React from "react";

const About: React.FC = () => {
  return (
    <div
      // @ts-ignore: 'name' is not a standard HTML attribute, but used for react-scroll
      name="about"
      className="about w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>

          <p className="text-xl mt-5">
            I hold a 2:1 Honours BSc in Computer Science & Software Engineering
            from the National University of Ireland Maynooth, where I earned an
            82% on my Final Year Project. Since graduating, I've continued to
            grow professionally and academically—currently working as a Full
            Stack Engineer at Northern Trust and pursuing a part-time MSc in
            Artificial Intelligence at the University of Limerick.
          </p>

          <br />

          <p className="text-xl">
            My passion for technology began early on with a curiosity about how
            things work. Over the years, this curiosity has grown into a
            commitment to building practical, impactful solutions—particularly
            in the areas of web, mobile, and AI development. I’m especially
            fascinated by how the ever-evolving digital landscape can be used to
            solve real-world problems.
            <br />
            <br />
            I have hands-on experience using Java, spring boot, React, TypeScript to
            develop full-stack web applications. I thrive on creating
            dynamic and user-focused interfaces, and enjoy the challenge and
            reward that come with solving technical problems. My academic and
            industry work have also strengthened my algorithmic thinking and
            problem-solving mindset.
            <br />
            <br />
            AI and machine learning are central to where technology is headed,
            and deepening my knowledge in these areas through both my
            MSc and practical work. At the heart of it all, I’m driven by a
            desire to use technology to make life easier and more efficient for
            people especially when it comes to health and well-being.
            <br />
            <br />
            Outside of tech, I love exploring new cultures and have traveled to
            over 15 countries, each offering its own unique experiences. I’m also
            passionate about football and staying active—whether it’s at the gym
            or outdoors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;