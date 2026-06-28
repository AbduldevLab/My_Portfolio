import React from "react";
import ul from "../assets/UL.jpg";
import mu from "../assets/MU.jpg";
import riversdale from "../assets/riversdale.jpg";

const Education: React.FC = () => {
  const degrees = [
    {
      id: 1,
      period: "2024 – 2026",
      degree: "MSc in Artificial Intelligence",
      school: "University of Limerick",
      grade: "1:1 (on track)",
      detail: "Part-time. Thesis: Predicting chronic disease onset in older adults using longitudinal ML on the TILDA dataset. 22% AUC improvement with pooled multi-wave XGBoost over baseline.",
      icon: "🎓",
      accent: "#00d4aa",
      // src: ul,
    },
    {
      id: 2,
      period: "2019 – 2023",
      degree: "BSc (Hons) Computer Science & Software Engineering",
      school: "Maynooth University",
      grade: "2:1 — FYP: 82%",
      detail: "Final year project: Kake Dessert Delivery — full-stack Firebase web application for a startup client.",
      icon: "🎓",
      accent: "#6c63ff",
    },
    {
      id: 3,
      period: "2013 – 2019",
      degree: "Leaving Certificate",
      school: "Riversdale (Rath dara) Community College",
      grade: null,
      detail: null,
      icon: "🏫",
      accent: "#4a4a60",
    },
  ];

  const extras = [
    { label: "Voluntary work", items: ["BITCI Coordinator & Volunteer (2025)", "Jigsaw Mental Health Mentor (2017)", "Sports Leadership & Relief Ireland"] },
    { label: "Awards", items: ["Football", "Academic awards", "Youth club — 10+ total"] },
  ];

  const certs = [
    { name: "Front-End Development", issuer: "Brainnest", year: "2022" },
    { name: "WIN Certificate", issuer: "WIN", year: "2024" },
    { name: "PSA License", issuer: "PSA", year: "2024" },
    { name: "First Aid (FAR)", issuer: "First Aid", year: "2025" },
    { name: "ICSE Conference", issuer: "ICSE", year: "2023" },
  ];

  return (
    <div
      // @ts-ignore
      name="education"
      className="education w-full py-24"
      style={{ background: "#0a0a0f" }}
    >
      <div className="flex flex-col px-6 max-w-screen-lg mx-auto">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase mb-4"
          style={{ color: "#6c63ff", letterSpacing: "0.12em" }}
        >
          <span style={{ width: 20, height: 1, background: "#6c63ff", display: "inline-block" }} />
          Education
        </span>

        <h2
          className="text-white font-bold mb-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
        >
          Academic background
        </h2>

        {/* Degrees */}
        <div className="flex flex-col gap-4 mb-12">
          {degrees.map(({ id, period, degree, school, grade, detail, accent }) => (
            <div key={id} style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "1.5rem" }}>
              <div className="flex items-start gap-4">
                <div style={{ width: 44, height: 44, borderRadius: 8, background: accent + "22", border: `1px solid ${accent}44`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                  🎓
                </div>
                <div style={{ flex: 1 }}>
                  <div className="flex flex-wrap justify-between gap-1">
                    <div>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#f0f0f5" }}>{degree}</p>
                      <p style={{ fontSize: "0.82rem", color: "#7a7a90", marginTop: 2 }}>{school}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span style={{ fontSize: "0.75rem", color: "#4a4a60", fontWeight: 500, display: "block" }}>{period}</span>
                      {grade && <span style={{ fontSize: "0.72rem", color: accent, fontWeight: 600, display: "block", marginTop: 2 }}>{grade}</span>}
                    </div>
                  </div>
                  {detail && (
                    <p style={{ fontSize: "0.82rem", color: "#7a7a90", lineHeight: 1.6, marginTop: "0.6rem" }}>{detail}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certs & extras */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p style={{ color: "#4a4a60", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Certifications</p>
            <div className="flex flex-col gap-2">
              {certs.map(({ name, issuer, year }) => (
                <div key={name} style={{ display: "flex", justifyContent: "space-between", padding: "0.7rem 1rem", background: "#111118", borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "#f0f0f5" }}>{name}</p>
                    <p style={{ fontSize: "0.72rem", color: "#4a4a60" }}>{issuer}</p>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "#4a4a60", fontWeight: 500, alignSelf: "center" }}>{year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {extras.map(({ label, items }) => (
              <div key={label}>
                <p style={{ color: "#4a4a60", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{label}</p>
                <div style={{ background: "#111118", borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", padding: "0.8rem 1rem" }}>
                  {items.map(item => (
                    <p key={item} style={{ fontSize: "0.83rem", color: "#7a7a90", lineHeight: 1.7 }}>· {item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
