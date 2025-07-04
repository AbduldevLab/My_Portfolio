import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home:React.FC = () => {
  return (
    <div
    // @ts-ignore: 'name' is not a standard HTML attribute, but used for react-scroll
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Software Developer with a strong foundation in Full-Stack
            Engineering & a BSc (Hons) in Computer Science & Software
            Engineering.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I’m currently employed at Northern Trust, contributing to the
            development of microservices-based platforms for global banking,
            using technologies like Java, Spring Boot, React, TypeScript & Azure
            DevOps. I’m also currently pursuing a part-time MSc in Artificial
            Intelligence at the University of Limerick, deepening my expertise
            in modern AI technologies and their real-world applications.
          </p>
          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
