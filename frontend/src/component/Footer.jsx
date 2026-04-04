import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function useBreakpoint() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { isMobile: w < 640, isTablet: w < 1024, w };
}

const FOOTER_COLS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/about" },
      { label: "Careers at DIT", to: "/jobs" },
      { label: "Blogs", to: "/blogs" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Executive Search", to: "/" },
      { label: "Staffing Solutions", to: "/" },
      { label: "Career Counselling", to: "/" },
      { label: "Skill Development", to: "/" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "info@ditconsultancy.in", to: "mailto:info@ditconsultancy.in", external: true },
      { label: "+91  97084 55757", to: "tel:+91 97084 55757", external: true },
      { label: "15Th Floor, GALAXY DIAMOND PLAZA, SECTOR 4 Greater Noida Line Rd, Greater Noida, Noida, Uttar Pradesh 201016", to: "https://maps.google.com/?q=15Th+Floor,+GALAXY+DIAMOND+PLAZA,+SECTOR+4+Greater+Noida+Line+Rd,+Greater+Noida,+Noida,+Uttar+Pradesh+201016+(Debox+Technology)", external: true },
      { label: "Mon–Sat 9am–7pm", to: "/contact" },
    ],
  },
];

export default function Footer() {
  const { isMobile } = useBreakpoint();
  const px = isMobile ? "20px" : "52px";

  return (
    <footer
      style={{
        background: "var(--dark)",
        borderTop: "1px solid rgba(255,255,255,.06)",
        padding: isMobile ? "52px 0 0" : "80px 0 0",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        :root {
          --blue: #0f9be7;
          --dark: #13181f;
          --white: #ffffff;
          --border: #e4edf5;
          --muted: #7a8a98;
        }
        .foot-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
        }
        @media (max-width: 1023px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 639px) {
          .foot-grid { grid-template-columns: 1fr !important; }
        }
        .social-icon {
          width: 32px; height: 32px;
          background: rgba(15,155,231,.1);
          border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .18s; border-radius: 4px;
          text-decoration: none;
        }
        .social-icon:hover {
          background: var(--blue);
          border-color: var(--blue);
        }
        .foot-link {
          color: rgba(255,255,255,.35);
          font-size: .72rem;
          text-decoration: none;
          transition: color .15s;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
        }
        .foot-link:hover { color: var(--blue); }
        .foot-bottom-link {
          color: rgba(255,255,255,.2);
          font-size: .65rem;
          text-decoration: none;
          transition: color .15s;
          letter-spacing: .04em;
          font-family: 'JetBrains Mono', monospace;
        }
        .foot-bottom-link:hover { color: var(--blue); }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>

        {/* Main grid */}
        <div
          className="foot-grid"
          style={{ gap: isMobile ? 28 : 48, paddingBottom: isMobile ? 40 : 60 }}
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, textDecoration: "none" , marginTop:-15, marginLeft:-18 }}>
             
             <img src="/footer-logo.png" alt="footer-logo" className="h-20 w-auto object-cover"/>
            </Link>

            {/* Tagline */}
            <p style={{ color: "rgba(255,255,255,.3)", fontSize: ".72rem", lineHeight: 1.9, maxWidth: 200, marginBottom: 20, margin: "0 0 20px" }}>
              India's most trusted job consultancy. Connecting talent with opportunity since 2009.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <span style={{ color: "var(--blue)", fontSize: ".6rem", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>in</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <span style={{ color: "var(--blue)", fontSize: ".6rem", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>tw</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <span style={{ color: "var(--blue)", fontSize: ".6rem", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>fb</span>
              </a>
            </div>

            {/* Status badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "block", boxShadow: "0 0 6px rgba(34,197,94,.6)" }} />
              <span style={{ color: "rgba(255,255,255,.2)", fontSize: ".62rem", letterSpacing: ".08em" }}>All systems operational</span>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.heading}>
              <div
                style={{
                  color: "rgba(255,255,255,.25)", fontWeight: 600,
                  fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase",
                  marginBottom: 18, fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {col.heading}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: 0 }}>
                {col.links.map(({ label, to, external }) => (
                  <li key={label}>
                    {external ? (
                      <a href={to} className="foot-link" target={to.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        <span style={{ color: "rgba(15,155,231,.3)", fontSize: ".55rem" }}>→</span>
                        {label}
                      </a>
                    ) : (
                      <Link to={to} className="foot-link">
                        <span style={{ color: "rgba(15,155,231,.3)", fontSize: ".55rem" }}>→</span>
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.06)",
            borderBottom: "1px solid rgba(255,255,255,.06)",
            padding: isMobile ? "24px 0" : "28px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontFamily: "'Oxanium', sans-serif", color: "#fff", fontWeight: 700, fontSize: ".82rem", letterSpacing: ".04em", marginBottom: 4 }}>
              STAY IN THE LOOP
            </div>
            <div style={{ color: "rgba(255,255,255,.3)", fontSize: ".65rem", letterSpacing: ".04em" }}>
              // Get weekly job alerts and hiring insights
            </div>
          </div>
          <div style={{ display: "flex", gap: 0, overflow: "hidden", border: "1px solid rgba(15,155,231,.25)", borderRadius: 4 }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                background: "rgba(15,155,231,.06)",
                border: "none", outline: "none",
                color: "#fff", padding: "10px 18px",
                fontSize: ".7rem", fontFamily: "'JetBrains Mono', monospace",
                width: isMobile ? 180 : 240,
              }}
            />
            <button
              style={{
                background: "var(--blue)", color: "#fff", border: "none",
                padding: "10px 20px", cursor: "pointer",
                fontFamily: "'Oxanium', sans-serif", fontWeight: 700,
                fontSize: ".7rem", letterSpacing: ".08em", textTransform: "uppercase",
                transition: "background .18s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#0b87cc"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--blue)"}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ color: "rgba(255,255,255,.2)", fontSize: ".65rem", letterSpacing: ".04em", fontFamily: "'JetBrains Mono', monospace" }}>
            // © 2026 DIT Job Consultancy. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <Link to="#" className="foot-bottom-link">Privacy Policy</Link>
            <Link to="#" className="foot-bottom-link">Terms of Use</Link>
            <Link to="#" className="foot-bottom-link">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}