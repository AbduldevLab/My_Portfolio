import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.jpeg";

const Home: React.FC = () => {
  return (
    <div
      // @ts-ignore
      name="home"
      className="h-screen w-full home"
      style={{ background: "#0a0a0f" }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row gap-12">
        <div className="flex flex-col justify-center h-full md:flex-1 pt-20 md:pt-0">
          {/* Eyebrow */}
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#00d4aa", letterSpacing: "0.12em" }}
          >
            <span style={{ width: 24, height: 1, background: "#00d4aa", display: "inline-block" }} />
            Open to new opportunities
          </span>

          <h1
            className="font-bold text-white mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.08 }}
          >
            Abderahman Haouit
          </h1>

          <p
            className="mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "#7a7a90", letterSpacing: "-0.015em", fontWeight: 400 }}
          >
            Full-Stack Engineer & Inspiring Researcher
          </p>

          <p className="mb-8 max-w-md" style={{ color: "#7a7a90", fontSize: "0.98rem", lineHeight: 1.75 }}>
            Full-stack engineer at <span style={{ color: "#f0f0f5", fontWeight: 500 }}>Northern Trust</span>, building microservices for global banking with Java, Spring Boot, React & Azure. I have an{" "}
            <span style={{ color: "#f0f0f5", fontWeight: 500 }}>MSc in Artificial Intelligence</span> from the University of Limerick — where I researched chronic disease prediction using longitudinal ML on the TILDA dataset.
          </p>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-px mb-8 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 }}
          >
            {[
              { num: "+75%", label: "Thesis (predicted)" },
              { num: "MSc", label: "AI — UL" },
              { num: "2+", label: "Years exp." },
            ].map(({ num, label }) => (
              <div key={label} style={{ background: "#111118", padding: "1.25rem 1rem", textAlign: "center" }}>
                <span style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#f0f0f5" }}>
                  {num}
                </span>
                <span style={{ display: "block", fontSize: "0.72rem", color: "#7a7a90", fontWeight: 500, letterSpacing: "0.05em", marginTop: 2 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center cursor-pointer font-semibold text-white px-5 py-3 rounded-lg text-sm"
              style={{ background: "#6c63ff", transition: "transform 0.18s, box-shadow 0.18s" }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(108,99,255,0.35)"; }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              View Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="flex items-center cursor-pointer font-medium text-white px-5 py-3 rounded-lg text-sm"
              style={{ border: "1px solid rgba(255,255,255,0.14)", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="hidden md:block md:flex-shrink-0">
          <img
            src={HeroImage}
            alt="Abderahman Haouit"
            className="rounded-2xl"
            style={{ width: 280, height: 320, objectFit: "cover", border: "1px solid rgba(255,255,255,0.07)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
