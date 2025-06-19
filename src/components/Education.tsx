import React from "react";
const Education: React.FC =  () => {
  return (
    <div
    // @ts-ignore: 'name' is not a standard HTML attribute, but used for react-scroll
      name="education"
      className="education w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
          <p className="py-6">All my academic work and qualifications.</p>
        </div>
        {/*University*/}
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2024-2026</span>
          <h3>Master's of Science Degree</h3>
          <p>
            University of Limerick
            <br /> (Artificial Intelligence)
          </p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2019-2023</span>
          <h3>Bachelor's of Science Degree</h3>
          <p>
            Maynooth University
            <br /> (Computer Science & <br />
            Software Engineering)
          </p>
        </div>
        {/*LC*/}
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2013-2019</span>
          <h3>Leaving Certificate</h3>
          <p>
            Riversdale (Rath dara)
            <br /> Community College
          </p>
        </div>
        {/*VW*/}
        <div className="box">
          <h3>Voluntary work</h3>
          <p>
            BITCI Coordinator & Volunteer,
            <br />
            Jigsaw Mentor,
            <br />
            Sports leadership &<br /> relief Ireland
          </p>
        </div>
        {/*Awards*/}
        <div className="box">
          <span>+10</span>
          <h3>
            Awards won
            <br />
          </h3>
          <p>
            Football,
            <br />
            Academic awards,
            <br />
            Youth club.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
