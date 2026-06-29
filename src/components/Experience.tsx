// export default Experience;
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
import meta from "../assets/meta.jpg";

const sectionLabel = (text: string) => (// Reusable component for section labels 
  <div className="mb-8">
    <span
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase mb-4"
      style={{ color: "#6c63ff", letterSpacing: "0.12em" }}
    >
      <span
        style={{
          width: 20,
          height: 1,
          background: "#6c63ff",
          display: "inline-block",
        }}
      />
      {text}
    </span>
  </div>
);

const Experience: React.FC = () => { // Experience component displaying skills and work history
  const techs = [
    { id: 1, src: html, title: "HTML", color: "#f97316" },
    { id: 2, src: css, title: "CSS", color: "#3b82f6" },
    { id: 3, src: javascript, title: "JavaScript", color: "#eab308" },
    { id: 4, src: reactImage, title: "React", color: "#38bdf8" },
    { id: 5, src: node, title: "Node.js", color: "#4ade80" },
    { id: 6, src: python, title: "Python", color: "#60a5fa" },
    { id: 7, src: typescript, title: "TypeScript", color: "#1d4ed8" },
    { id: 8, src: firebase, title: "Firebase", color: "#f59e0b" },
    {
      id: 9,
      src: null,
      title: "Java",
      color: "#ef4444",
      svg: (
        <svg
          className="w-8 h-8 mx-auto"
          viewBox="0 0 189 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.9 197.9s-9.7 5.7 6.9 7.6c20.2 2.3 30.5 2 52.8-2.2 0 0 5.8 3.7 14 6.9-50-21.4-113 1.3-73.7-12.3"
            fill="#5382A1"
          />
          <path
            d="M54.8 169.9s-11 8.1 5.8 9.8c21.6 2.2 38.7 2.4 68.2-3.3 0 0 4.1 4.1 10.5 6.4C78.9 200.6 11.7 184.3 54.8 169.9"
            fill="#5382A1"
          />
          <path
            d="M106.3 122.5c12.3 14.2-3.2 27-3.2 27s31.2-16.2 16.9-36.4C106.5 94.2 96.3 84.8 151.9 52.5c0 0-87.3 21.8-45.6 70"
            fill="#E76F00"
          />
          <path
            d="M172.3 218.6s7.2 6-8 10.6c-28.8 8.7-120 11.3-145.2.3-10.9-4-6-9.4 14.4-11.7l-14.4 8.9c-9.1-6.9-64.4 14.3 13-13.4 64.9 2.6 176-10.7 140.2 5.3"
            fill="#5382A1"
          />
          <path
            d="M65.6 140.9s-46.3 11-15.4 15c12.6 1.7 37.8 1.3 61.2-.6 19.2-1.6 38.5-5 38.5-5s-7.1 3.1-12.2 5.9c-47.1 12.4-138.1 6.6-111.8-5.1C47.6 139.7 65.6 140.9 65.6 140.9"
            fill="#5382A1"
          />
          <path
            d="M148.8 187.5c47.8-24.9 25.7-48.9 10.3-45.6-3.8.8-5.5 1.5-5.5 1.5s1.4-2.2 4.1-3.2c30.5-10.7 54 31.8-9.9 48.6 0 0 .7-.7.9-1.3"
            fill="#5382A1"
          />
          <path
            d="M119.9.3s26.5 26.6-25.1 67.4C53.4 100.4 85.4 119.1 94.8 140.5c-24.2-21.9-42-41.1-30-59 17.5-26.3 65.8-39 45.1-81.2"
            fill="#E76F00"
          />
        </svg>
      ),
    },
    {
      id: 10,
      src: null,
      title: "Git",
      color: "#9ca3af",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8 mx-auto"
          fill="#f14e32"
        >
          <path d="M439.6 236.1L244 40.5a28.9 28.9 0 0 0-40.8 0l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3L240.2 199v121.9c25.3 12.5 22.3 41.9 9.1 55a34.3 34.3 0 0 1-48.6 0c-17.6-17.6-11.1-46.9 11.3-56v-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1a28.9 28.9 0 0 0 0 40.8l195.6 195.6a28.9 28.9 0 0 0 40.8 0l194.7-194.7a28.9 28.9 0 0 0 0-40.8z" />
        </svg>
      ),
    },
    {
      id: 11,
      src: null,
      title: "Spring Boot",
      color: "#6ee7b7",
      svg: (
        <svg viewBox="0 0 50 50" className="w-8 h-8 mx-auto" fill="#6DB33F">
          <path d="M43.9 8.5C40.4 3.3 34.4 0 27.8 0 16.8 0 7.8 9 7.8 20c0 5.4 2.1 10.3 5.6 13.9L5.8 50l17.5-7.4c1.5.4 3 .6 4.5.6C38.8 43.2 47.8 34.2 47.8 23.2c0-5.5-1.6-10.6-3.9-14.7z" />
        </svg>
      ),
    },
    {
      id: 12,
      src: null,
      title: "Azure",
      color: "#38bdf8",
      svg: (
        <svg
          viewBox="0 0 256 242"
          className="w-8 h-8 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0072C6"
            d="M71.5 0L35 93.5 0 187.3h71.5l35.4-93.8 35.3 93.8h71.5L179.4 93.5 143.9 0z"
          />
          <path fill="#0089D6" d="M128 85.8l-35.3 93.8 70.7 62.4H256z" />
        </svg>
      ),
    },
  ];

  const roles = [
    {
      id: 1,
      src: northernTrust,
      company: "Northern Trust",
      location: "Limerick, Ireland",
      role: "Rotational Development Associate — Technology",
      duration: "July 2024 – Present",
      color: "#2563eb",
      bullets: [
        "Asset Servicing: backend microservices for multi-currency/time-zone fund & investor management [Java, Spring Boot, Snowflake]",
        "Responsive UI deployment via Azure SWA/AKS [ReactJS, GitHub Actions, CI/CD]",
        "Asset Management: GenAI R&D [Python, ReactJS, Databricks]",
      ],
    },
    {
      id: 2,
      src: meta,
      company: "Securitas",
      location: "Dublin, Ireland",
      role: "Contingent Employee — Meta Data Center",
      duration: "Jan 2024 – June 2024",
      color: "#dc2626",
      bullets: [
        "Maintained documentation and followed standardized procedures",
        "Identified security gaps and proposed enhancements",
        "Responded to critical events at direction of Control Room",
      ],
    },
    {
      id: 3,
      src: accenture,
      company: "Accenture",
      location: "Dublin, Ireland",
      role: "Technical Support Specialist",
      duration: "July 2020 – Sept 2022",
      color: "#a855f7",
      bullets: [
        "Troubleshot and resolved technical issues for YouTube clients",
        "Escalated issues with all relevant information, meeting SLA targets",
        "Proficient on client's platform (YouTube)",
      ],
    },
    {
      id: 4,
      src: brainnest,
      company: "Brainnest",
      location: "Remote, Germany",
      role: "Front-End Developer (Intern)",
      duration: "May 2022 – June 2022",
      color: "#f59e0b",
      bullets: [
        "Provided support with client tokens",
        "Created real, working business-oriented websites",
      ],
    },
    {
      id: 5,
      src: valeo,
      company: "Valeo",
      location: "Galway, Ireland",
      role: "Support Engineer (Intern)",
      duration: "Feb 2022 – Apr 2022",
      color: "#10b981",
      bullets: [
        "Supported Process & Methods Engineers",
        "Provided support to production — TRP & TLR targets",
      ],
    },
  ];

  return (
    <div
      // @ts-ignore
      name="experience"
      className="experience w-full py-24"
      style={{ background: "#0a0a0f" }}
    >
      <div className="flex flex-col px-6 max-w-screen-lg mx-auto">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase mb-4"
          style={{ color: "#6c63ff", letterSpacing: "0.12em" }}
        >
          <span
            style={{
              width: 20,
              height: 1,
              background: "#6c63ff",
              display: "inline-block",
            }}
          />
          Experience
        </span>

        <h2
          className="text-white font-bold mb-10"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          Skills & work history
        </h2>

        {/* Tech icons */}
        <p
          style={{
            color: "#4a4a60",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Technologies
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 mb-14">
          {techs.map(({ id, src, svg, title, color }) => (
            <div
              key={id}
              className="flex flex-col items-center py-3 rounded-xl"
              style={{
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "transform 0.2s, border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  color + "55";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
              }}
            >
              {svg ? (
                svg
              ) : (
                <img src={src!} alt={title} className="w-8 h-8 mx-auto" />
              )}
              <p
                style={{
                  marginTop: 8,
                  fontSize: "0.7rem",
                  color: "#7a7a90",
                  fontWeight: 500,
                }}
              >
                {title}
              </p>
            </div>
          ))}
        </div>

        {/* Work history */}
        <p
          style={{
            color: "#4a4a60",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Work history
        </p>
        <div className="flex flex-col gap-4">
          {roles.map(
            ({
              id,
              src,
              company,
              location,
              role,
              duration,
              color,
              bullets,
            }) => (
              <div
                key={id}
                style={{
                  background: "#111118",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "1.5rem",
                }}
              >
                <div className="flex items-start gap-4">
                  {src ? (
                    <img
                      src={src}
                      alt={company}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 8,
                        objectFit: "contain",
                        background: "#18181f",
                        padding: 4,
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 8,
                        background: color + "22",
                        border: `1px solid ${color}44`,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color,
                        }}
                      >
                        {company[0]}
                      </span>
                    </div>
                  )}
                  <div style={{ flex: 1 }}>
                    <div className="flex flex-wrap justify-between gap-1">
                      <div>
                        <p
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            color: "#f0f0f5",
                          }}
                        >
                          {role}
                        </p>
                        <p
                          style={{
                            fontSize: "0.82rem",
                            color: "#7a7a90",
                            marginTop: 2,
                          }}
                        >
                          {company} · {location}
                        </p>
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "#4a4a60",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {duration}
                      </span>
                    </div>
                    <ul style={{ marginTop: "0.75rem" }}>
                      {bullets.map((b, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "0.83rem",
                            color: "#7a7a90",
                            lineHeight: 1.65,
                            paddingLeft: "1rem",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              color: "#6c63ff",
                              fontSize: "0.9rem",
                            }}
                          >
                            ·
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
