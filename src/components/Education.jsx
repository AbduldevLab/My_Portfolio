import React from 'react';

function Education() {
  return (
    <div
      name="education"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Education
          </p>
          <p className="py-6">All my academic work and qualifications.</p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2013-2019</span>
          <h3>Leaving Certificate</h3>
          <p>Riversdale (Rath dara)<br/> Community College</p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2019-2023</span>
          <h3>Bachelors Science Degree</h3>
          <p>Maynooth University<br/> (Computer Science & <br/>Software Engineering)</p>
        </div>
        <div className="box">
          <h3>Voluntary work</h3>
          <p>Jigsaw Mentor,<br/>Sports leadership &<br/> relief Ireland</p>
        </div>
        <div className="box">
          <span>+10</span>
          <h3>Awards won<br/></h3>
          <p>Football,<br/>Academic awards,<br/>Youth club.</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
