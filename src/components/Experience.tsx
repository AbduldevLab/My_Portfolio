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
import springboot from "../assets/springboot.png";
import snowflake from "../assets/snowflake.png";
import csharp from "../assets/csharp.png";
import databricks from "../assets/databricks.png";
import latex from "../assets/latex.png";
import xgboost from "../assets/xgboost.png";

const Experience: React.FC = () => {
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
      src: springboot,
      title: "Spring Boot",
      color: "#6ee7b7",
      // svg: (
      //   <svg viewBox="0 0 50 50" className="w-8 h-8 mx-auto" fill="#6DB33F">
      //     <path d="M43.9 8.5C40.4 3.3 34.4 0 27.8 0 16.8 0 7.8 9 7.8 20c0 5.4 2.1 10.3 5.6 13.9L5.8 50l17.5-7.4c1.5.4 3 .6 4.5.6C38.8 43.2 47.8 34.2 47.8 23.2c0-5.5-1.6-10.6-3.9-14.7z" />
      //   </svg>
      // ),
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
    {
      id: 13,
      src: xgboost,
      title: "XGBoost",
      color: "#0B6E4F",
      // svg: (
      //   <svg viewBox="0 0 100 100" className="w-8 h-8 mx-auto">
      //     <rect width="100" height="100" rx="20" fill="#0B6E4F" />
      //     <text
      //       x="50"
      //       y="63"
      //       fontSize="32"
      //       fontWeight="700"
      //       fill="#ffffff"
      //       textAnchor="middle"
      //       fontFamily="Arial, sans-serif"
      //     >
      //       XGB
      //     </text>
      //   </svg>
      // ),
    },
    {
      id: 14,
      src: snowflake,
      title: "Snowflake",
      color: "#29B5E8",
      // svg: (
      //   <svg viewBox="0 0 100 100" className="w-8 h-8 mx-auto">
      //     <g stroke="#29B5E8" strokeWidth="6" strokeLinecap="round">
      //       <line x1="50" y1="8" x2="50" y2="92" />
      //       <line x1="15" y1="25" x2="85" y2="75" />
      //       <line x1="15" y1="75" x2="85" y2="25" />
      //       <line x1="50" y1="8" x2="38" y2="20" />
      //       <line x1="50" y1="8" x2="62" y2="20" />
      //       <line x1="50" y1="92" x2="38" y2="80" />
      //       <line x1="50" y1="92" x2="62" y2="80" />
      //     </g>
      //   </svg>
      // ),
    },
    {
      id: 15,
      src: csharp,
      title: "C sharp",
      color: "#9B4F96",
      // svg: (
      //   <svg viewBox="0 0 100 100" className="w-8 h-8 mx-auto">
      //     <rect width="100" height="100" rx="20" fill="#9B4F96" />
      //     <text
      //       x="50"
      //       y="66"
      //       fontSize="38"
      //       fontWeight="700"
      //       fill="#ffffff"
      //       textAnchor="middle"
      //       fontFamily="Arial, sans-serif"
      //     >
      //       C#
      //     </text>
      //   </svg>
      // ),
    },
    {
      id: 16,
      src: databricks,
      title: "Databricks",
      color: "#FF3621",
      // svg: (
      //   <svg viewBox="0 0 100 100" className="w-8 h-8 mx-auto">
      //     <rect width="100" height="100" rx="20" fill="#FF3621" />
      //     <text
      //       x="50"
      //       y="63"
      //       fontSize="28"
      //       fontWeight="700"
      //       fill="#ffffff"
      //       textAnchor="middle"
      //       fontFamily="Arial, sans-serif"
      //     >
      //       DB
      //     </text>
      //   </svg>
      // ),
    },
    {
      id: 17,
      src: null,
      title: "PostgreSQL",
      color: "#336791",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto">
          <path
            fill="#336791"
            d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
          />
        </svg>
      ),
    },
    {
      id: 18,
      src: latex,
      title: "LaTeX",
      color: "#3D6117",
      // svg: (
      //   <svg viewBox="0 0 100 100" className="w-8 h-8 mx-auto">
      //     <rect width="100" height="100" rx="20" fill="#3D6117" />
      //     <text
      //       x="50"
      //       y="62"
      //       fontSize="26"
      //       fontWeight="700"
      //       fill="#ffffff"
      //       textAnchor="middle"
      //       fontFamily="Georgia, serif"
      //     >
      //       LaTeX
      //     </text>
      //   </svg>
      // ),
    },
  ];

  const roles = [
    {
      id: 1,
      src: northernTrust,
      company: "Northern Trust",
      location: "Limerick, Ireland",
      role: "Analyst, Rotational Development Associate (Software Eng.)",
      duration: "July 2024 – Present",
      color: "#2563eb",
      bullets: [
        <>
          Transfer Agency: diagnosed inaccurate analytics tracking within a
          React/Spring Boot microservices platform and designed a backend
          caching fix, adopted team-wide to restore reliable usage metrics.
          <br />
          <span style={{ color: "#00d4aa" }}>
            [Java, Spring Boot, React, Snowflake]
          </span>
        </>,
        <>
          Global Securities Finance: migrated a securities lending
          reconciliation dashboard from PCF to Azure, along with its CLI
          tooling from XPS to UXPGen, and implemented a new reporting feature
          to meet a business requirement; delivered front-end and backend
          through to UAT via GitHub Actions CI/CD.
          <br />
          <span style={{ color: "#00d4aa" }}>
            [React, Azure SWA/AKS, Java, Spring Boot, UXPGen]
          </span>
        </>,
        <>
          Capital Markets: supported a separate team's core .NET trading
          application at a former manager's request, dedicating primary capacity
          to cross-team feature delivery and maintenance.
          <br />
          <span style={{ color: "#00d4aa" }}>[C#, .NET]</span>
        </>,
        <>
          GenAI Research: drove testing, LLM integration, and evaluation that
          helped ship the team's first live GenAI product — an AI tool
          transcribing investor calls into key themes, insights &
          sentiment — alongside PoC work on document summarization and an
          access-controlled chatbot.
          <br />
          <span style={{ color: "#00d4aa" }}>
            [Python, React, Azure, OpenAI APIs, LlamaIndex, Databricks,
            PostgreSQL, Jest, Pytest]
          </span>
        </>,
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
      className="w-full py-24"
      style={{ background: "#0a0a0f" }}
    >
      <div className="flex flex-col px-4 sm:px-6 max-w-screen-lg mx-auto">
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
                  <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#f0f0f5",
                        textAlign: "left",
                      }}
                    >
                      {role}
                    </p>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "#7a7a90",
                        marginTop: 2,
                        textAlign: "left",
                      }}
                    >
                      {company} · {location}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#4a4a60",
                        fontWeight: 500,
                        marginTop: 4,
                        textAlign: "left",
                      }}
                    >
                      {duration}
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        margin: "0.75rem 0 0 0",
                        padding: 0,
                        textAlign: "left",
                      }}
                    >
                      {bullets.map((b, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "0.83rem",
                            color: "#7a7a90",
                            lineHeight: 1.65,
                            paddingLeft: "1rem",
                            position: "relative",
                            textAlign: "left",
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