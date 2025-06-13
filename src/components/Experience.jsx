import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import node from "../assets/node.png";
import typescript from "../assets/typescript.png";
import firebase from "../assets/firebase.png";

import northernTrust from "../assets/northern-trust.png";
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
      component: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-10 mx-auto"
          fill="	#f14e32"
        >
          <path d="M439.6 236.1L244 40.5a28.9 28.9 0 0 0 -40.8 0l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3L240.2 199v121.9c25.3 12.5 22.3 41.9 9.1 55a34.3 34.3 0 0 1 -48.6 0c-17.6-17.6-11.1-46.9 11.3-56v-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1a28.9 28.9 0 0 0 0 40.8l195.6 195.6a28.9 28.9 0 0 0 40.8 0l194.7-194.7a28.9 28.9 0 0 0 0-40.8z" />
        </svg>
      ),
      title: "Git",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      component: (
        <svg
          className="w-11 mx-auto"
          viewBox="0 0 256 204"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M53.1720678,0 C38.5648814,0 27.7564746,12.7848136 28.2402712,26.6500339 C28.7045424,39.9707119 28.1014237,57.2225085 23.7581017,71.291661 C19.4017627,85.4020339 12.0341695,94.340339 0,95.488 L0,108.444203 C12.0341695,109.591864 19.4017627,118.530169 23.7581017,132.640542 C28.1014237,146.709695 28.7045424,163.961492 28.2402712,177.282169 C27.7564746,191.14522 38.5648814,203.932203 53.1742373,203.932203 L202.847458,203.932203 C217.454644,203.932203 228.260881,191.14739 227.777085,177.282169 C227.312814,163.961492 227.915932,146.709695 232.259254,132.640542 C236.617763,118.530169 243.965831,109.591864 256,108.444203 L256,95.488 C243.965831,94.340339 236.617763,85.4020339 232.259254,71.291661 C227.915932,57.224678 227.312814,39.9707119 227.777085,26.6500339 C228.260881,12.7869831 217.454644,0 202.847458,0 L53.1698983,0 L53.1720678,0 Z M173.559322,125.533288 C173.559322,144.624814 159.31878,156.20339 135.686508,156.20339 L95.4576271,156.20339 C93.0612729,156.20339 91.1186441,154.260761 91.1186441,151.864407 L91.1186441,52.0677966 C91.1186441,49.6714424 93.0612729,47.7288136 95.4576271,47.7288136 L135.456542,47.7288136 C155.162034,47.7288136 168.094373,58.4027119 168.094373,74.7910508 C168.094373,86.2936949 159.394712,96.5922712 148.31078,98.3951186 L148.31078,98.9960678 C163.399593,100.65139 173.559322,111.099661 173.559322,125.533288 Z M131.299797,61.4833898 L108.361763,61.4833898 L108.361763,93.8825763 L127.681085,93.8825763 C142.615864,93.8825763 150.851254,87.8687458 150.851254,77.1189153 C150.851254,67.0459661 143.770034,61.4833898 131.299797,61.4833898 L131.299797,61.4833898 Z M108.361763,106.738983 L108.361763,142.444475 L132.143729,142.444475 C147.692475,142.444475 155.930034,136.205017 155.930034,124.478915 C155.930034,112.750644 147.462508,106.736814 131.143593,106.736814 L108.361763,106.736814 L108.361763,106.738983 Z"
              fill="#7E13F8"
            ></path>
          </g>
        </svg>
      ),
      title: "Bootstrap",
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
      component: (
        <svg
          className="w-10 mx-auto"
          viewBox="0 0 189 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="java">
              <path
                d="M60.9480327,197.898746 C60.9480327,197.898746 51.20388,203.577614 67.8826145,205.499268 C88.0884327,207.809387 98.4153927,207.478091 120.682342,203.254583 C120.682342,203.254583 126.536531,206.933278 134.712327,210.119505 C84.7957094,231.559386 21.7411855,208.877662 60.9480327,197.898746"
                id="Path"
                fill="#5382A1"
              ></path>
              <path
                d="M54.8484873,169.921107 C54.8484873,169.921107 43.9194763,178.028561 60.6105818,179.758739 C82.1950694,181.990338 99.2408073,182.172861 128.736491,176.480906 C128.736491,176.480906 132.816142,180.625894 139.231145,182.89262 C78.878978,200.578731 11.65752,184.28737 54.8484873,169.921107"
                id="Path"
                fill="#5382A1"
              ></path>
              <path
                d="M106.269545,122.461747 C118.568978,136.653063 103.037989,149.423458 103.037989,149.423458 C103.037989,149.423458 134.268349,133.266405 119.925655,113.033931 C106.530022,94.1658991 96.2573567,84.7911177 151.869403,52.4680596 C151.869403,52.4680596 64.5768327,74.3170664 106.269545,122.461747"
                id="Path"
                fill="#E76F00"
              ></path>
              <path
                d="M172.288277,218.592693 C172.288277,218.592693 179.499142,224.547068 164.34684,229.153529 C135.534305,237.900846 44.4259963,240.54226 19.1164909,229.502044 C10.0183745,225.535446 27.07992,220.030835 32.4468327,218.875776 C38.0439818,217.659416 41.2425491,217.886021 41.2425491,217.886021 C31.12452,210.742837 -24.1562618,231.912033 13.1626473,237.974544 C114.936742,254.515238 198.687109,230.526238 172.288277,218.592693"
                id="Path"
                fill="#5382A1"
              ></path>
              <path
                d="M65.6338582,140.93305 C65.6338582,140.93305 19.2903709,151.964312 49.2224727,155.97017 C61.8607309,157.66591 87.0547747,157.282268 110.522389,155.311711 C129.701422,153.690358 148.959491,150.243088 148.959491,150.243088 C148.959491,150.243088 142.196727,153.145545 137.304033,156.493632 C90.2430327,168.897602 -0.670090909,163.127128 25.5026291,150.439386 C47.6369345,139.716691 65.6338582,140.93305 65.6338582,140.93305"
                id="Path"
                fill="#5382A1"
              ></path>
              <path
                d="M148.768429,187.503214 C196.608109,162.589891 174.488923,138.648416 159.050029,141.873903 C155.265905,142.663228 153.578651,143.347172 153.578651,143.347172 C153.578651,143.347172 154.983437,141.141746 157.666549,140.187118 C188.209637,129.425851 211.699243,171.926103 147.806935,188.758833 C147.806935,188.759522 148.547127,188.09624 148.768429,187.503214"
                id="Path"
                fill="#5382A1"
              ></path>
              <path
                d="M119.925655,0.274817278 C119.925655,0.274817278 146.420018,26.8356661 94.796902,67.6787483 C53.4004037,100.441927 85.3572106,119.122614 94.77972,140.466067 C70.6158982,118.617061 52.8828873,99.3832953 64.7795782,81.4822896 C82.2411167,55.2052121 130.615495,42.465124 119.925655,0.274817278"
                id="Path"
                fill="#E76F00"
              ></path>
              <path
                d="M70.3348037,255.012526 C116.254931,257.958374 186.770487,253.378086 188.44056,231.602778 C188.44056,231.602778 185.230309,239.857628 150.490047,246.413294 C111.296258,253.805121 62.9562437,252.942098 34.2852873,248.204772 C34.2859745,248.204083 40.1545963,253.072963 70.3348037,255.012526"
                id="Path"
                fill="#5382A1"
              ></path>
            </g>
          </g>
        </svg>
      ),
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 12,
      component: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 mx-auto"
          viewBox="0 0 128 128"
        >
          <path
            fill="#9B4F96"
            d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
          />
          <path
            fill="#68217A"
            d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
          />
          <path
            fill="#fff"
            d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
          />
        </svg>
      ),
      title: "C#",
      style: "shadow-purple-600",
    },
  ];

  const fullTime = [
    {
      id: 1,
      src: northernTrust,
      role: "Rotational development associate - Technology",
      duration: "July 2024 - Present",
      style: "shadow-blue-600",
    },
  ];

  const internships = [
    {
      id: 1,
      src: valeo,
      role: "Support Engineer",
      duration: "January 2022 - March 2022",
      style: "shadow-green-400",
    },
    {
      id: 2,
      src: brainnest,
      role: "Front-end Developer",
      duration: "April 2022 - May 2022",
      style: "shadow-yellow-600",
    },
    {
      id: 3,
      src: accenture,
      role: "Technical Customer Support",
      duration: "June 2022 - September 2022",
      style: "shadow-purple-600",
    },
  ];

  return (
    <div
      name="experience"
      className="experience w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-5">
            I have experience with the following technologies.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-5 px-12 sm:px-0">
          {techs.map(({ id, src, component, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col items-center`}
            >
              {/* Render the image or SVG with consistent dimensions */}
              {component ? (
                <div className="flex justify-center items-center w-10 h-10">
                  {component}
                </div>
              ) : (
                <img src={src} alt="" className="w-10 h-10 mx-auto" />
              )}

              {/* Title with consistent margin */}
              <p className="mt-4 text-base">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Full Time
          </p>
          <p className="py-5">Full time employment's to date.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-5 px-12 sm:px-0">
          {fullTime.map(({ id, src, role, duration, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col items-center`}
            >
              <img src={src} alt="" className="w-16 h-16 rounded-lg mx-auto" />
              <div className="card__info">
                <p className="mt-6" style={{ flexBasis: "100%" }}>
                  {role}
                </p>
                <p className="mt-2" style={{ flexBasis: "100%" }}>
                  {duration}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Internship
          </p>
          <p className="py-5">
            Completed the following internships so far with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-5 px-12 sm:px-0">
          {internships.map(({ id, src, role, duration, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col items-center`}
            >
              <img src={src} alt="" className="w-16 h-16 rounded-lg mx-auto" />
              <div className="card__info">
                <p className="mt-6" style={{ flexBasis: "100%" }}>
                  {role}
                </p>
                <p className="mt-2" style={{ flexBasis: "100%" }}>
                  {duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
