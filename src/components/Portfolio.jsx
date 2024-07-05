import React from "react";
import kake from "../assets/portfolio/kake.PNG";
import calmness from "../assets/portfolio/calmness.jpg";
import ipaddress from "../assets/portfolio/ipaddress.png";
import delivery from "../assets/portfolio/delivery.png";
import targetLocation from "../assets/portfolio/targetlocation.jpg";
import WeatherApp from "../assets/portfolio/weatherApp.png";
//import tictactoe from "../assets/portfolio/tictactoe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: kake,
      link: 'https://kake-project.web.app/',
      repo: 'https://github.com/AbduldevLab/KakeDessertDelivery-FYP'
    },
    {
      id: 2,
      src: WeatherApp,
      link: 'https://AbduldevLab.github.io/NT-Weather-WebApp/',
      repo: 'https://github.com/AbduldevLab/NT-Weather-WebApp'
    },
    {
      id: 3,
      src: calmness,
      repo: 'https://github.com/AbduldevLab/Calmness_web_app'
    },
    {
      id: 4,
      src: ipaddress,
      repo: 'https://github.com/AbduldevLab/TrackIPAddress'
    },
    {
      id: 5,
      src: delivery,
      repo: 'https://github.com/AbduldevLab/Delivery_app'
    },
    {
      id: 6,
      src: targetLocation,
      repo: 'https://github.com/AbduldevLab/TargetInternet'
    },
    // {
    // //   id: 6,
    // //   src: tictactoe,
    // //   repo: 'https://github.com/AbdulHaouit/TicTacToe_Game'
    // // },


  ];

  return (
    <div
      name="portfolio"
      className="portfolio w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              {(id === 1 || id === 2) && (
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                    Demo
                  </button>
                )}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
