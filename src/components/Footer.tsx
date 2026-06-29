import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      className="text-center p-6"
      style={{
        background: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        color: "#4a4a60",
        fontSize: "0.82rem",
      }}
    >
      {/* <span>© 2026 Abduldevlab - Built with React & TypeScript</span> */}
      <span>
        © {new Date().getFullYear()} Abduldevlab. Built with React and
        TypeScript
      </span>
    </div>
  );
};

export default Footer;
