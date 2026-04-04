import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const STATS = [
  { value: "12K+", label: "Jobs Placed" },
  { value: "800+", label: "Partner Companies" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "15+",  label: "Years of Excellence" },
];

const SERVICES = [
  { icon: "◎", title: "Executive Search",   desc: "We identify and recruit top-tier leadership talent tailored precisely to your organisational DNA." },
  { icon: "◈", title: "Resume Crafting",    desc: "Our experts reframe your career story into a compelling document that opens doors." },
  { icon: "◇", title: "Career Counselling", desc: "One-on-one strategy sessions that align your ambitions with market opportunities." },
  { icon: "▣", title: "Corporate Staffing", desc: "Permanent, contract, and project-based hiring solutions for businesses at every scale." },
  { icon: "◉", title: "Global Placements",  desc: "Cross-border talent mobility across 40+ countries with full compliance support." },
  { icon: "△", title: "Skill Development",  desc: "Industry-mapped training programmes that make candidates irresistible to employers." },
];

const JOBS = [
  { title: "Senior Product Manager", company: "FinTech Innovations", loc: "Mumbai",    type: "Full-time", salary: "₹28–35 LPA" },
  { title: "Lead UX Designer",       company: "NovaTech Labs",       loc: "Bengaluru", type: "Hybrid",    salary: "₹22–28 LPA" },
  { title: "Data Science Lead",      company: "AnalytiQ Corp",       loc: "Hyderabad", type: "Remote",    salary: "₹30–40 LPA" },
  { title: "VP Engineering",         company: "CloudBase India",     loc: "Pune",      type: "Full-time", salary: "₹50–70 LPA" },
  { title: "Marketing Director",     company: "BrandForge",          loc: "Delhi NCR", type: "Full-time", salary: "₹25–32 LPA" },
  { title: "Legal Counsel",          company: "Meridian Group",      loc: "Chennai",   type: "Hybrid",    salary: "₹20–26 LPA" },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "CFO, Vertex Capital",
    text: "DIT didn't just find me a job — they found me a career. The calibre of opportunities and personal attention were truly unmatched.",
    img: "https://i.pinimg.com/736x/59/28/38/5928385c218009365fbce96b7326ae0b.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "CTO, Cloudrise Technologies",
    text: "As an employer, DIT consistently delivers candidates who are not just technically sound but culturally aligned. Truly world-class.",
    img: "https://i.pinimg.com/736x/4d/a7/0a/4da70abe67d19f98cffbbd5ac24c72bc.jpg",
  },
  {
    name: "Ananya Singh",
    role: "Head of HR, NovaStar",
    text: "From our first conversation, DIT understood our needs precisely. They reduced our hiring cycle by 60% without compromising quality.",
    img: "https://i.pinimg.com/1200x/50/76/fa/5076fa47e88d356e20afc21f43dc3745.jpg",
  },
];

function useBreakpoint() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { isMobile: w < 640, isTablet: w < 1024, w };
}

export default function DITHomePage() {
  const [activeJob, setActiveJob] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const px = isMobile ? "20px" : "52px";
  const secPad = isMobile ? "64px 0" : "108px 0";

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", background: "#ffffff", color: "#13181f", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue: #0f9be7;
          --dark: #13181f;
          --white: #ffffff;
          --mid: #f4f8fc;
          --border: #e4edf5;
          --muted: #7a8a98;
          --light-blue: #e8f5fd;
        }

        * { box-sizing: border-box; }

        .ox { font-family: 'Oxanium', sans-serif; }
        .jb { font-family: 'JetBrains Mono', monospace; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes scanLine  { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes blinkDot  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes rotateRing{ to{transform:rotate(360deg)} }
        @keyframes pulseGlow { 0%,100%{box-shadow:0 0 0 0 rgba(15,155,231,.4)} 50%{box-shadow:0 0 0 12px rgba(15,155,231,0)} }
        @keyframes shimmer   { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes floatBox  { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes gridFade  { from{opacity:0;transform:scale(.97)} to{opacity:1;transform:scale(1)} }

        .a-up   { animation: fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
        .a-in   { animation: fadeIn .5s ease both; }
        .d1{animation-delay:.06s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}
        .d4{animation-delay:.44s}.d5{animation-delay:.58s}.d6{animation-delay:.72s}

        .g-blue {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* NAV */
        .nav-wrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background .3s, box-shadow .3s, border-color .3s;
        }
        .nav-wrap.scrolled {
          background: rgba(255,255,255,.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 24px rgba(0,0,0,.06);
        }

        /* BUTTONS */
        .btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue); color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 13px 28px; border-radius: 4px; border: none; cursor: pointer;
          transition: all .2s; position: relative; overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-p::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .btn-p:hover::before { transform: translateX(100%); }
        .btn-p:hover { background: #0b87cc; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(15,155,231,.35); }

        .btn-g {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--dark);
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 28px; border-radius: 4px;
          border: 1.5px solid var(--dark); cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-g:hover { background: var(--dark); color: #fff; }

        .btn-gw {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 28px; border-radius: 4px;
          border: 1.5px solid rgba(255,255,255,.5); cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-gw:hover { background: rgba(255,255,255,.12); border-color: #fff; }

        /* CARDS */
        .card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 6px; transition: all .28s cubic-bezier(.23,1,.32,1);
          position: relative; overflow: hidden;
        }
        .card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(15,155,231,.12); border-color: rgba(15,155,231,.35); }
        .card:hover::after { transform: scaleX(1); }

        /* LABEL */
        .label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: .65rem;
          letter-spacing: .14em; text-transform: uppercase;
          color: var(--blue); font-weight: 500;
        }
        .label::before { content: '//'; opacity: .5; }

        .tag {
          display: inline-block;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace; font-size: .63rem;
          letter-spacing: .05em; padding: 3px 10px; border-radius: 2px;
          border: 1px solid rgba(15,155,231,.2); font-weight: 500;
        }

        /* HERO */
        .hero-section {
          min-height: 100vh; position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          background: var(--dark);
        }
      
        .hero-img-wrap {
          position: absolute; inset: 0; z-index: 0;
        }
        .hero-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; object-position: center 30%;
          opacity: .22;
        }
    
        /* STAT BAR */
        .stat-bar {
          background: var(--blue); position: relative; z-index: 10;
        }
        .stat-bar::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(
            90deg, transparent, transparent 80px,
            rgba(255,255,255,.05) 80px, rgba(255,255,255,.05) 81px
          );
        }

        /* SEARCH */
        .search-wrap {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 4px; display: flex; overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,.07);
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
        }
        .search-wrap input, .search-wrap select {
          flex: 1; border: none; outline: none;
          font-family: 'JetBrains Mono', monospace; font-size: .8rem;
          color: var(--dark); padding: 16px 20px; background: transparent;
        }
        .search-wrap input::placeholder { color: var(--muted); }
        .search-wrap select { color: var(--muted); max-width: 160px; appearance: none; cursor: pointer; }
        .s-div { width: 1px; background: var(--border); align-self: stretch; flex-shrink: 0; }

        /* SERVICE ICON */
        .svc-icon {
          width: 46px; height: 46px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); font-size: 1.1rem; border-radius: 4px;
          transition: all .2s; flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .card:hover .svc-icon { background: var(--blue); color: #fff; }

        /* TESTIMONIAL */
        .tc {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 4px; display: flex; align-items: flex-start;
          gap: 18px; padding: 22px 24px;
          transition: all .25s cubic-bezier(.23,1,.32,1);
          position: relative; overflow: hidden;
        }
        .tc::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px; background: var(--blue);
          transform: scaleY(0); transform-origin: bottom; transition: transform .3s;
        }
        .tc:hover { transform: translateX(6px); box-shadow: 0 8px 32px rgba(15,155,231,.1); border-color: rgba(15,155,231,.3); }
        .tc:hover::before { transform: scaleY(1); }

        /* CTA */
        .cta-section {
          position: relative; overflow: hidden; min-height: 480px;
          display: flex; align-items: center;
          background: var(--dark);
        }

        /* FOOTER */
        footer { background: var(--dark); }

        /* PROCESS */
        .proc-num {
          font-family: 'Oxanium', sans-serif; font-size: 3rem; font-weight: 800;
          color: var(--blue); opacity: .15; line-height: 1;
          position: absolute; top: -8px; right: 16px;
          pointer-events: none;
        }

        /* MOBILE MENU */
        .mob-menu {
          position: fixed; inset: 0; background: var(--dark); z-index: 1000;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 32px;
        }
        .mob-menu a {
          color: #fff; font-size: 1.3rem;
          font-family: 'Oxanium', sans-serif; font-weight: 700;
          text-decoration: none; letter-spacing: .06em; text-transform: uppercase;
        }

        @media(max-width:1023px){
          .hero-right-col { display: none !important; }
          .about-grid, .testi-grid { grid-template-columns: 1fr !important; }
          .svc-grid, .jobs-grid { grid-template-columns: 1fr 1fr !important; }
          .proc-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-grid { grid-template-columns: repeat(2,1fr) !important; }
          .foot-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:639px){
          .svc-grid, .jobs-grid, .proc-grid { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
          .foot-grid { grid-template-columns: 1fr !important; }
          .search-stack { flex-direction: column !important; }
          .search-stack .s-div { width: 100% !important; height: 1px !important; }
          .search-stack select { max-width: 100% !important; }
          .cta-btns { flex-direction: column !important; }
        }
      `}</style>


 
      {/* ── HERO ── */}
      <section className="hero-section">
   
        <div className="hero-scan" />
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=80&auto=format&fit=crop" alt="" />
        </div>
        {/* Overlay gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(19,24,31,.92) 0%, rgba(19,24,31,.7) 60%, rgba(15,155,231,.08) 100%)", zIndex: 2 }} />

    

   
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: `0 ${px}`, width: "100%", flex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 400px", gap: 60, alignItems: "center", minHeight: "calc(100vh - 160px)", paddingTop: 80 }}>
            <div style={{ paddingBottom: isMobile ? 24 : 48 }}>
              {/* Badge */}
              <div className="a-up d1" style={{ marginBottom: 26 }}>
                <span className="jb" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(15,155,231,.1)", border: "1px solid rgba(15,155,231,.3)", padding: "6px 14px", fontSize: ".65rem", color: "var(--blue)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue)", animation: "blinkDot 1.5s ease infinite" }} />
                  India's Premier Talent Partner — Est. 2009
                </span>
              </div>
              {/* Headline */}
              <h1 className="a-up d2 ox" style={{ fontSize: "clamp(2.6rem,5.5vw,5.4rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-.02em", marginBottom: 20, color: "#fff" }}>
                WHERE<br />
                <span className="g-blue">AMBITION</span><br />
                MEETS<br />
                <span style={{ color: "#fff" }}>OPPORTUNITY</span>
              </h1>
              <div className="a-up d3 jb" style={{ color: "rgba(255,255,255,.45)", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "block", width: 32, height: 1, background: "var(--blue)" }} />
                DIT Consultancy bridges talent with opportunity
              </div>
              <p className="a-up d3 jb" style={{ color: "rgba(255,255,255,.6)", fontSize: ".82rem", lineHeight: 1.9, maxWidth: 480, marginBottom: 36 }}>
                Your next defining career move starts here. We connect India's best talent with its most forward-thinking organisations.
              </p>
              <div className="a-up d4" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <Link to="/jobs">
                <button className="btn-p" style={{ padding: "14px 32px", fontSize: ".8rem" }}>
                  Explore Opportunities
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
                </Link>
                <Link to="/contact">
                <button className="btn-gw" style={{ padding: "14px 32px", fontSize: ".8rem" }}>Hire Talent →</button>
                           </Link> </div>

              {/* Trust marks */}
              <div className="a-up d5" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                {[{ code: "ISO", label: "9001 Certified" }, { code: "4.9", label: "Google Rating" }, { code: "NSC", label: "NASSCOM Member" }, { code: "800", label: "Companies" }].map(b => (
                  <div key={b.code} className="jb" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "var(--blue)", fontSize: ".65rem", fontWeight: 700, background: "rgba(15,155,231,.12)", border: "1px solid rgba(15,155,231,.25)", padding: "2px 7px", borderRadius: 2 }}>{b.code}</span>
                    <span style={{ color: "rgba(255,255,255,.35)", fontSize: ".65rem", letterSpacing: ".06em" }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating metric card */}
            {!isTablet && (
              <div className="hero-right-col a-up d5" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { num: "12,847", label: "Active Opportunities", sub: "Updated daily" },
                  { num: "98%", label: "Client Satisfaction Rate", sub: "Verified reviews" },
                  { num: "18 days", label: "Average Time to Place", sub: "Industry best" },
                ].map((m, i) => (
                  <div key={m.label} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderLeft: "3px solid var(--blue)", padding: "18px 22px", animation: `floatBox ${3 + i * .5}s ease-in-out ${i * .4}s infinite`, backdropFilter: "blur(8px)" }}>
                    <div className="ox" style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 2 }}>{m.num}</div>
                    <div className="jb" style={{ color: "rgba(255,255,255,.7)", fontSize: ".72rem", marginBottom: 3 }}>{m.label}</div>
                    <div className="jb" style={{ color: "var(--blue)", fontSize: ".6rem", letterSpacing: ".08em" }}>// {m.sub}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* STAT BAR */}
        <div className="stat-bar">
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}`, position: "relative" }}>
            <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{ padding: isMobile ? "18px 12px" : "26px 28px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.2)" : "none" }}>
                  <div className="ox" style={{ fontSize: isMobile ? "1.6rem" : "2.4rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{s.value}</div>
                  <div className="jb" style={{ color: "rgba(255,255,255,.65)", fontSize: ".6rem", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH ── */}
      <section style={{ background: "var(--mid)", padding: isMobile ? "48px 0" : "72px 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <div className="label" style={{ justifyContent: "center", display: "flex", marginBottom: 12 }}>Find Your Next Role</div>
            <h3 className="ox" style={{ fontSize: "clamp(1.6rem,4vw,2rem)", fontWeight: 700, color: "var(--dark)", letterSpacing: "-.01em", marginBottom: 0 }}>
              Search <span className="g-blue">12,000+</span> Opportunities
            </h3>
          </div>
          <div style={{ maxWidth: 900, margin: "28px auto 0" }}>
            <div className="search-wrap search-stack">
              <input type="text" placeholder="Job title, skill or keyword…" />
              <div className="s-div" />
              <input type="text" placeholder="City or Remote…" />
              <div className="s-div" />
              <select><option>All Industries</option><option>Technology</option><option>Finance</option><option>Healthcare</option><option>Legal</option></select>
              <button className="btn-p" style={{ borderRadius: 0, clipPath: "none", padding: "16px 26px", fontSize: ".75rem" }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Search
              </button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 16 }}>
              <span className="jb" style={{ color: "var(--muted)", fontSize: ".65rem", alignSelf: "center", letterSpacing: ".06em" }}>// trending:</span>
              {["Product Manager", "Data Analyst", "DevOps Engineer", "Finance Lead", "Legal Counsel"].map(t => (
                <button key={t} className="tag" style={{ cursor: "pointer", transition: "all .15s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(15,155,231,.15)"; e.currentTarget.style.borderColor = "var(--blue)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--light-blue)"; e.currentTarget.style.borderColor = "rgba(15,155,231,.2)"; }}
                >{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: "#fff", padding: secPad }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: isMobile ? 36 : 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="label" style={{ marginBottom: 14 }}>What We Offer</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, lineHeight: 1.05, color: "var(--dark)", margin: 0 }}>
                SERVICES BUILT<br /><span className="g-blue">FOR EXCELLENCE</span>
              </h2>
            </div>
            {!isMobile && <button className="btn-g" style={{ padding: "11px 24px" }}>View All Services →</button>}
          </div>
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {SERVICES.map(s => (
              <div key={s.title} className="card" style={{ padding: "28px 24px", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  <div className="svc-icon">{s.icon}</div>
                  <div className="ox" style={{ color: "var(--dark)", fontWeight: 700, fontSize: ".92rem", letterSpacing: ".02em", paddingTop: 12 }}>{s.title}</div>
                </div>
                <p className="jb" style={{ color: "var(--muted)", fontSize: ".75rem", lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
                <div className="jb" style={{ marginTop: 16, color: "var(--blue)", fontSize: ".65rem", letterSpacing: ".08em", fontWeight: 600 }}>// learn_more →</div>
              </div>
            ))}
          </div>
          {isMobile && <div style={{ textAlign: "center", marginTop: 24 }}><button className="btn-g">View All Services →</button></div>}
        </div>
      </section>

      {/* ── FEATURED JOBS ── */}
      <section style={{ background: "var(--mid)", padding: secPad, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: isMobile ? 36 : 52, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="label" style={{ marginBottom: 14 }}>Curated Roles</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, lineHeight: 1.05, color: "var(--dark)", margin: 0 }}>
                FEATURED <span className="g-blue">OPENINGS</span>
              </h2>
            </div>
            {!isMobile && <button className="btn-g" style={{ padding: "11px 24px" }}>View All Jobs →</button>}
          </div>
          <div className="jobs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {JOBS.map(j => (
              <div key={j.title} className="card" style={{ padding: "22px 22px", cursor: "pointer", background: "#fff" }}
                onMouseEnter={() => setActiveJob(j.title)} onMouseLeave={() => setActiveJob(null)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, background: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                    <span className="ox" style={{ color: "#fff", fontWeight: 800, fontSize: "1rem" }}>{j.company[0]}</span>
                  </div>
                  <span className="tag">{j.type}</span>
                </div>
                <div className="ox" style={{ color: activeJob === j.title ? "var(--blue)" : "var(--dark)", fontWeight: 700, fontSize: ".9rem", marginBottom: 4, transition: "color .18s", letterSpacing: ".01em" }}>{j.title}</div>
                <div className="jb" style={{ color: "var(--muted)", fontSize: ".68rem", marginBottom: 16, letterSpacing: ".04em" }}>{j.company}</div>
                <div style={{ height: 1, background: "var(--border)", marginBottom: 14 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="jb" style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--muted)", fontSize: ".65rem", letterSpacing: ".04em" }}>
                    <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    {j.loc}
                  </div>
                  <span className="ox" style={{ color: "var(--blue)", fontSize: ".82rem", fontWeight: 700 }}>{j.salary}</span>
                </div>
              </div>
            ))}
          </div>
          {isMobile && <div style={{ textAlign: "center", marginTop: 24 }}><button className="btn-g">View All Jobs →</button></div>}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "#fff", padding: secPad, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 68 }}>
            <div className="label" style={{ justifyContent: "center", display: "flex", marginBottom: 12 }}>The Process</div>
            <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, color: "var(--dark)", margin: 0 }}>
              HOW <span className="g-blue">DIT WORKS</span>
            </h2>
          </div>
          <div className="proc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, position: "relative" }}>
            {/* Connector line */}
            {!isMobile && <div style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 1, background: "linear-gradient(90deg, transparent, rgba(15,155,231,.3) 20%, rgba(15,155,231,.3) 80%, transparent)", pointerEvents: "none" }} />}
            {[
              { n: "01", title: "REGISTER",   desc: "Create your profile in minutes. Candidates and employers both welcome." },
              { n: "02", title: "MATCH",      desc: "Our experts match you with curated roles or talent tailored to your needs." },
              { n: "03", title: "INTERVIEW",  desc: "We prep candidates and coordinate seamlessly with hiring companies." },
              { n: "04", title: "GET PLACED", desc: "Accept your offer. We stay with you through onboarding and beyond." },
            ].map((step, i) => (
              <div key={step.n} style={{ padding: "32px 20px 28px", textAlign: "center", position: "relative", background: "#fff", border: "1px solid var(--border)", borderRadius: 4, marginBottom: isMobile ? 0 : 0 }}>
                <span className="proc-num">{step.n}</span>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--light-blue)", border: "2px solid rgba(15,155,231,.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", position: "relative", zIndex: 2 }}>
                  <span className="ox g-blue" style={{ fontSize: "1.1rem", fontWeight: 800 }}>{step.n}</span>
                </div>
                <div className="ox" style={{ color: "var(--dark)", fontWeight: 700, fontSize: ".82rem", marginBottom: 10, letterSpacing: ".06em" }}>{step.title}</div>
                <p className="jb" style={{ color: "var(--muted)", fontSize: ".72rem", lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background: "var(--mid)", padding: secPad, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>
            <div>
              <div className="label" style={{ marginBottom: 16 }}>About DIT</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3.2rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: 20, color: "var(--dark)" }}>
                15 YEARS OF<br /><span className="g-blue">CHANGING LIVES</span>
              </h2>
              <p className="jb" style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 14, fontSize: ".78rem" }}>
                DIT Consultancy was founded with a singular belief: that the right connection between talent and opportunity can change everything. From our first placement to over 12,000 successful careers, that conviction has never wavered.
              </p>
              <p className="jb" style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 32, fontSize: ".78rem" }}>
                Our consultants bring domain expertise, market intelligence, and genuine care to every engagement.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn-p">Our Story →</button>
                <button className="btn-g">Meet the Team</button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { label: "Industries Covered", val: "28+", icon: "◆" },
                { label: "Cities Across India", val: "35+", icon: "◎" },
                { label: "Avg. Days to Place",  val: "18",  icon: "◇" },
                { label: "Repeat Clients",      val: "91%", icon: "◉" },
              ].map(m => (
                <div key={m.label} className="card" style={{ padding: "28px 20px", textAlign: "center", background: "#fff" }}>
                  <div style={{ color: "var(--blue)", fontSize: "1.2rem", marginBottom: 8 }}>{m.icon}</div>
                  <div className="ox g-blue" style={{ fontSize: "2.4rem", fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}>{m.val}</div>
                  <div className="jb" style={{ color: "var(--muted)", fontSize: ".65rem", letterSpacing: ".06em", lineHeight: 1.5, textTransform: "uppercase" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#fff", padding: secPad, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1.2fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>
            <div>
              <div className="label" style={{ marginBottom: 16 }}>Voices of Trust</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, lineHeight: 1.05, color: "var(--dark)", marginBottom: 20 }}>
                WHAT OUR<br /><span className="g-blue">CLIENTS SAY</span>
              </h2>
              <div style={{ display: "flex", gap: 14, alignItems: "stretch", marginBottom: 28 }}>
                <div style={{ width: 3, background: "var(--blue)", borderRadius: 2, flexShrink: 0 }} />
                <p className="jb" style={{ color: "var(--muted)", fontSize: ".78rem", lineHeight: 1.9, fontStyle: "italic", margin: 0 }}>
                  "DIT consistently connects us with candidates who are not just skilled but perfectly aligned with our culture. They've become indispensable to our talent strategy."
                </p>
              </div>
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 32 }}>
                {[{ val: "12K+", label: "Placements" }, { val: "4.9★", label: "Avg Rating" }, { val: "98%", label: "Recommend" }].map(s => (
                  <div key={s.label}>
                    <div className="ox" style={{ color: "var(--blue)", fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.1 }}>{s.val}</div>
                    <div className="jb" style={{ color: "var(--muted)", fontSize: ".6rem", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn-p">View More Stories →</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className="tc" style={{ marginLeft: i === 1 ? (isMobile ? 0 : 24) : 0 }}>
                  <img src={t.img} alt={t.name} style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid var(--border)" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <div>
                        <div className="ox" style={{ color: "var(--dark)", fontWeight: 700, fontSize: ".82rem", letterSpacing: ".02em" }}>{t.name}</div>
                        <div className="jb" style={{ color: "var(--blue)", fontSize: ".62rem", marginTop: 2, letterSpacing: ".06em" }}>{t.role}</div>
                      </div>
                      <div style={{ color: "var(--border)", fontSize: "2rem", fontFamily: "serif", lineHeight: 1, flexShrink: 0, marginLeft: 8 }}>"</div>
                    </div>
                    <p className="jb" style={{ color: "var(--muted)", fontSize: ".73rem", lineHeight: 1.8, margin: 0 }}>{t.text}</p>
                    <div style={{ color: "#f59e0b", fontSize: ".65rem", marginTop: 10, letterSpacing: 2 }}>★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.pexels.com/photos/7709292/pexels-photo-7709292.jpeg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0, opacity: .18 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(19,24,31,.97) 0%, rgba(19,24,31,.88) 50%, rgba(15,155,231,.08) 100%)", zIndex: 1 }} />
        {/* Grid bg */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, opacity: .05, backgroundImage: "linear-gradient(rgba(15,155,231,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: isMobile ? "64px 20px" : "88px 52px", width: "100%" }}>
          <div style={{ maxWidth: 640 }}>
            <div className="label" style={{ color: "rgba(255,255,255,.5)", marginBottom: 18 }}>
              <span style={{ opacity: .5 }}>// </span>Get Started Today
            </div>
            <h2 className="ox" style={{ fontSize: "clamp(2.2rem,5vw,4.4rem)", fontWeight: 800, lineHeight: 1.0, marginBottom: 20, color: "#fff", letterSpacing: "-.01em" }}>
              YOUR NEXT<br />CHAPTER STARTS<br /><span className="g-blue">NOW</span>
            </h2>
            <p className="jb" style={{ color: "rgba(255,255,255,.5)", fontSize: ".8rem", lineHeight: 1.9, marginBottom: 40, maxWidth: 500 }}>
              Whether you're a candidate ready to grow or an employer looking for exceptional talent — DIT is your trusted partner every step of the way.
            </p>
            <div className="cta-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              <button className="btn-p" style={{ padding: "16px 36px", fontSize: ".85rem", boxShadow: "0 8px 32px rgba(15,155,231,.4)" }}>
                Find Your Dream Job
                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button className="btn-gw" style={{ padding: "16px 36px", fontSize: ".85rem" }}>Hire with DIT</button>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[{ text: "Free for Candidates" }, { text: "No Hidden Fees" }, { text: "Dedicated Consultant" }].map(i => (
                <div key={i.text} className="jb" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.4)", fontSize: ".65rem", letterSpacing: ".06em" }}>
                  <span style={{ color: "var(--blue)", fontWeight: 700 }}>✓</span>{i.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
}