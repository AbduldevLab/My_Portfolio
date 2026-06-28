import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../assets/Abderahman_Haouit_CV.pdf";

const SocialLinks: React.FC = () => {
  const links = [
    {
      id: 1,
      child: <><FaLinkedin size={20} /> <span>LinkedIn</span></>,
      href: "https://www.linkedin.com/in/abder-h-244940193/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: <><FaGithub size={20} /> <span>GitHub</span></>,
      href: "https://github.com/Abduldevlab",
    },
    {
      id: 3,
      child: <><HiOutlineMail size={20} /> <span>Email</span></>,
      href: "mailto:abdul01hd@yahoo.com",
    },
    {
      id: 4,
      child: <><BsFillPersonLinesFill size={20} /> <span>CV</span></>,
      href: cv,
      target: "_blank",
    },
  ];

  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, child, href, style, target }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-36 h-12 px-4 ml-[-88px] hover:ml-[-10px] hover:rounded-md duration-300 ${style || ""}`}
            style={{ background: "#18181f", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "none", marginBottom: 2 }}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full gap-3 text-sm font-medium"
              style={{ color: "#7a7a90", transition: "color 0.2s" }}
              target={target}
              rel="noreferrer"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#f0f0f5"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#7a7a90"; }}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
