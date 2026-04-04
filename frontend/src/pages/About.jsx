import { useState, useEffect } from "react";
import {
  Target, ShieldCheck, TrendingUp, Lightbulb,
  MapPin, Phone, Mail, ArrowRight, Users,
  Briefcase, Award, Star, Building2, Globe, CheckCircle2,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────── */
const stats = [
  { value: "15+",  label: "Years of Excellence" },
  { value: "10K+", label: "Careers Launched"    },
  { value: "800+", label: "Partner Companies"   },
  { value: "98%",  label: "Client Satisfaction" },
];

const values = [
  { icon: "◎", title: "Precision Matching",    desc: "We align candidate strengths with roles that unlock true potential — not just fill vacancies." },
  { icon: "◈", title: "Trust & Integrity",     desc: "Radical transparency with every client and candidate. We say what we mean, always." },
  { icon: "◇", title: "Career Elevation",      desc: "We architect careers, not just placements. Long-term growth is our measure of success." },
  { icon: "▣", title: "Industry Intelligence", desc: "15 years of domain insight across IT, Finance, Healthcare, Manufacturing & more." },
];

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO",         img: "https://i.pinimg.com/736x/a6/05/09/a60509fa8fc8e90cabbffbb1a5b300fa.jpg", exp: "20 yrs" },
  { name: "Priya Sharma", role: "Head of Recruitment",   img: "https://i.pinimg.com/736x/a6/05/09/a60509fa8fc8e90cabbffbb1a5b300fa.jpg", exp: "12 yrs" },
  { name: "Amit Singh",   role: "Senior Consultant",     img: "https://i.pinimg.com/736x/a6/05/09/a60509fa8fc8e90cabbffbb1a5b300fa.jpg", exp: "10 yrs" },
  { name: "Neha Gupta",   role: "Client Relations Lead", img: "https://i.pinimg.com/736x/a6/05/09/a60509fa8fc8e90cabbffbb1a5b300fa.jpg", exp: "8 yrs"  },
];

const industries = [
  "Information Technology", "Banking & Finance", "Healthcare",
  "Manufacturing", "E-Commerce", "Legal & Compliance",
  "FMCG & Retail", "Real Estate",
];

const timeline = [
  { year: "2009", title: "Founded in New Delhi",     desc: "DIT launched with 3 consultants and a mission to make hiring human again." },
  { year: "2013", title: "First 1,000 Placements",   desc: "Crossed our first milestone, serving 50+ companies across 5 industries." },
  { year: "2017", title: "PAN India Expansion",      desc: "Opened offices in Mumbai and Bengaluru. Now serving 15+ cities." },
  { year: "2021", title: "Digital Transformation",   desc: "Launched our job portal and candidate tracking platform." },
  { year: "2024", title: "10,000+ Careers Launched", desc: "A decade and a half of connecting talent with opportunity.", active: true },
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

export default function AboutPage() {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);

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

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ox { font-family: 'Oxanium', sans-serif; }
        .jb { font-family: 'JetBrains Mono', monospace; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes scanLine  { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes blinkDot  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes rotateRing{ to{transform:rotate(360deg)} }
        @keyframes shimmer   { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes floatBox  { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes gridFade  { from{opacity:0;transform:scale(.97)} to{opacity:1;transform:scale(1)} }
        @keyframes pulseRing { 0%{box-shadow:0 0 0 0 rgba(15,155,231,.4)} 100%{box-shadow:0 0 0 16px rgba(15,155,231,0)} }

        .a-up { animation: fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
        .a-in { animation: fadeIn .5s ease both; }
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
        .hero-grid-bg {
          position: absolute; inset: 0; opacity: .04;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridFade 1.2s ease both;
        }
        .hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.6), transparent);
          animation: scanLine 4s ease-in-out infinite;
          pointer-events: none; z-index: 3;
        }
        .hero-corner {
          position: absolute; width: 20px; height: 20px;
          border-color: var(--blue); border-style: solid; opacity: .6;
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

        /* SERVICE ICON (reused for values) */
        .svc-icon {
          width: 46px; height: 46px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); font-size: 1.1rem; border-radius: 4px;
          transition: all .2s; flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .card:hover .svc-icon { background: var(--blue); color: #fff; }

        /* TEAM CARD */
        .team-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 6px; overflow: hidden;
          transition: all .28s cubic-bezier(.23,1,.32,1);
          position: relative;
        }
        .team-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .team-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(15,155,231,.12); border-color: rgba(15,155,231,.35); }
        .team-card:hover::after { transform: scaleX(1); }
        .team-card:hover .team-photo-img { transform: scale(1.06); }

        .team-photo-img {
          width: 100%; height: 200px; object-fit: cover; display: block;
          transition: transform .45s ease;
        }

        /* INDUSTRY PILL */
        .ind-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 20px; border-radius: 2px;
          background: var(--mid); border: 1px solid var(--border);
          color: var(--muted); font-size: .72rem; font-weight: 500;
          cursor: default; transition: all .2s;
          font-family: 'JetBrains Mono', monospace;
        }
        .ind-pill:hover {
          background: var(--light-blue); border-color: rgba(15,155,231,.35);
          color: var(--blue); transform: translateY(-2px);
        }

        /* TIMELINE */
        .tl-item {
          display: flex; flex-direction: column; align-items: center;
          padding: 0 12px; position: relative; cursor: default;
        }
        .tl-dot {
          width: 40px; height: 40px; border-radius: 50%;
          background: #0c1929; border: 2px solid rgba(15,155,231,.4);
          display: flex; align-items: center; justify-content: center;
          transition: all .3s; z-index: 2; position: relative;
        }
        .tl-dot-active {
          border-color: var(--blue);
          animation: pulseRing 2s ease-out infinite;
          background: rgba(15,155,231,.15);
        }
        .tl-item:hover .tl-dot {
          border-color: var(--blue); background: rgba(15,155,231,.12);
        }
        .tl-dot-inner {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(15,155,231,.5); transition: all .3s;
        }
        .tl-dot-inner-active { background: var(--blue); transform: scale(1.4); }
        .tl-item:hover .tl-dot-inner { background: var(--blue); transform: scale(1.4); }

        .tl-card {
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07);
          border-radius: 4px; padding: 18px 16px; text-align: center; width: 100%;
          transition: all .28s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .tl-card-active {
          border-color: rgba(15,155,231,.3);
          background: rgba(15,155,231,.08);
          border-left: 2px solid var(--blue);
        }
        .tl-item:hover .tl-card {
          background: rgba(15,155,231,.07);
          border-color: rgba(15,155,231,.25);
          transform: translateY(-4px);
        }

        /* CTA */
        .cta-section {
          position: relative; overflow: hidden; min-height: 480px;
          display: flex; align-items: center;
          background: var(--dark);
        }

        /* CHECK ITEM */
        .check-item {
          display: flex; align-items: center; gap: 11px;
          margin-bottom: 12px; font-size: .78rem; color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
        }
        .check-dot {
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.25);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          color: var(--blue); font-size: .55rem;
        }

        /* ABOUT IMAGE FRAME */
        .img-frame-outer {
          position: relative;
        }
        .img-frame-deco {
          position: absolute; top: -12px; left: -12px; right: 12px; bottom: 12px;
          border: 1px solid rgba(15,155,231,.25); border-radius: 4px; z-index: 0;
        }
        .img-frame-inner {
          position: relative; z-index: 1;
          border-radius: 4px; overflow: hidden;
          border: 1px solid var(--border);
        }
        .img-frame-inner img {
          width: 100%; height: 420px; object-fit: cover; display: block;
        }
        .img-overlay-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 60px 20px 18px;
          background: linear-gradient(transparent, rgba(8,18,32,.85));
          color: #fff;
        }
        .img-chip {
          position: absolute; bottom: -20px; right: -20px; z-index: 2;
          background: var(--white); border: 1px solid var(--border);
          border-radius: 4px; padding: 18px 22px;
          box-shadow: 0 16px 40px rgba(15,28,46,.12);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }

        /* TEAM BTN */
        .team-btn {
          width: 28px; height: 28px; border-radius: 3px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .2s;
        }
        .team-btn:hover { background: var(--blue); border-color: var(--blue); }
        .team-btn:hover svg { color: #fff !important; }

        /* RESPONSIVE */
        @media(max-width:1023px){
          .about-wwa-grid  { grid-template-columns: 1fr !important; }
          .val-grid        { grid-template-columns: 1fr 1fr !important; }
          .team-grid       { grid-template-columns: 1fr 1fr !important; }
          .stat-grid-about { grid-template-columns: 1fr 1fr !important; }
          .tl-track        { grid-template-columns: 1fr 1fr !important; }
          .tl-track::before { display: none !important; }
        }
        @media(max-width:639px){
          .val-grid        { grid-template-columns: 1fr !important; }
          .team-grid       { grid-template-columns: 1fr !important; }
          .tl-track        { grid-template-columns: 1fr !important; }
          .img-frame-outer { display: none !important; }
          .cta-btns-about  { flex-direction: column !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="hero-section">
 


        {/* BG image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", opacity: .18 }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(19,24,31,.96) 0%, rgba(19,24,31,.72) 60%, rgba(15,155,231,.06) 100%)", zIndex: 2 }} />

       

       

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: `0 ${px}`, width: "100%", flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ paddingTop: 80, paddingBottom: isMobile ? 24 : 48, maxWidth: 680 }}>
            {/* Badge */}
            <div className="a-up d1" style={{ marginBottom: 26 }}>
              <span className="jb" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(15,155,231,.1)", border: "1px solid rgba(15,155,231,.3)", padding: "6px 14px", fontSize: ".65rem", color: "var(--blue)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue)", animation: "blinkDot 1.5s ease infinite" }} />
                About DIT Consultancy — Est. 2009
              </span>
            </div>

            {/* Headline */}
            <h1 className="a-up d2 ox" style={{ fontSize: "clamp(2.6rem,5.5vw,5.4rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-.02em", marginBottom: 20, color: "#fff" }}>
              WE CONNECT<br />
              <span className="g-blue">AMBITION</span><br />
              WITH<br />
              <span style={{ color: "#fff" }}>PURPOSE</span>
            </h1>

            <div className="a-up d3 jb" style={{ color: "rgba(255,255,255,.45)", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "block", width: 32, height: 1, background: "var(--blue)" }} />
              India's most trusted talent partner since 2009
            </div>


            <div className="a-up d4" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <button className="btn-p" style={{ padding: "14px 32px", fontSize: ".8rem" }}>
                Explore Opportunities
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button className="btn-gw" style={{ padding: "14px 32px", fontSize: ".8rem" }}>Our Services →</button>
            </div>

            {/* Trust marks */}
            <div className="a-up d5" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[{ code: "ISO", label: "9001 Certified" }, { code: "4.9★", label: "Google Rating" }, { code: "NSC", label: "NASSCOM Member" }, { code: "15+", label: "Years Active" }].map(b => (
                <div key={b.code} className="jb" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--blue)", fontSize: ".65rem", fontWeight: 700, background: "rgba(15,155,231,.12)", border: "1px solid rgba(15,155,231,.25)", padding: "2px 7px", borderRadius: 2 }}>{b.code}</span>
                  <span style={{ color: "rgba(255,255,255,.35)", fontSize: ".65rem", letterSpacing: ".06em" }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STAT BAR */}
        <div className="stat-bar">
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}`, position: "relative" }}>
            <div className="stat-grid-about" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: isMobile ? "18px 12px" : "26px 28px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.2)" : "none" }}>
                  <div className="ox" style={{ fontSize: isMobile ? "1.6rem" : "2.4rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{s.value}</div>
                  <div className="jb" style={{ color: "rgba(255,255,255,.65)", fontSize: ".6rem", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO WE ARE ══ */}
      <section style={{ background: "#fff", padding: secPad }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div className="about-wwa-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>

            {/* Image */}
            <div className="img-frame-outer">
              <div className="img-frame-deco" />
              <div className="img-frame-inner">
                <img src="https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg" alt="DIT Office" />
                <div className="img-overlay-caption">
                  <div className="jb" style={{ fontSize: ".6rem", color: "rgba(255,255,255,.5)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 3 }}>
                    // New Delhi HQ
                  </div>
                  <div className="ox" style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}>Building Careers Daily</div>
                </div>
              </div>
              <div className="img-chip">
                <div className="ox g-blue" style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1.1 }}>800+</div>
                <div className="jb" style={{ color: "var(--muted)", fontSize: ".62rem", marginTop: 3, letterSpacing: ".04em" }}>Partner Companies</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="label" style={{ marginBottom: 16 }}>Who We Are</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, lineHeight: 1.05, color: "var(--dark)", marginBottom: 20 }}>
                MORE THAN A<br /><span className="g-blue">RECRUITMENT AGENCY</span>
              </h2>
              <p className="jb" style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 14, fontSize: ".78rem" }}>
                DIT (Dedicated Industry Talent) Consultancy was founded with a singular mission — to transform how people find meaningful work. We go beyond resumes. We understand people, ambitions, and what makes them thrive.
              </p>
              <p className="jb" style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 28, fontSize: ".78rem" }}>
                Our consultants bring 15 years of domain expertise across IT, Banking, Healthcare, Manufacturing and more — placing 10,000+ professionals in roles they love.
              </p>

              {["PAN India presence across 20+ cities", "Dedicated sector-specialist teams", "End-to-end candidate support from CV to offer"].map(t => (
                <div key={t} className="check-item">
                  <div className="check-dot">✓</div>
                  {t}
                </div>
              ))}

              <div style={{ display: "flex", gap: 36, marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
                {[["2009", "Founded"], ["20+", "Cities"], ["PAN India", "Coverage"]].map(([v, l]) => (
                  <div key={l}>
                    <div className="ox g-blue" style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.1 }}>{v}</div>
                    <div className="jb" style={{ color: "var(--muted)", fontSize: ".6rem", letterSpacing: ".08em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn-p">Our Story →</button>
                <button className="btn-g">Meet the Team</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section style={{ background: "var(--mid)", padding: secPad, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: isMobile ? 36 : 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="label" style={{ marginBottom: 14 }}>Our Foundation</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, lineHeight: 1.05, color: "var(--dark)", margin: 0 }}>
                WHAT <span className="g-blue">DRIVES US</span>
              </h2>
            </div>
            <p className="jb" style={{ color: "var(--muted)", maxWidth: 280, textAlign: "right", lineHeight: 1.75, fontSize: ".75rem" }}>
              Four principles that have defined our culture and service since day one.
            </p>
          </div>
          <div className="val-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {values.map((v, i) => (
              <div key={v.title} className="card" style={{ padding: "28px 24px", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  <div className="svc-icon">{v.icon}</div>
                  <div>
                    <div className="jb" style={{ color: "var(--blue)", fontSize: ".58rem", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 6 }}>0{i + 1}</div>
                    <div className="ox" style={{ color: "var(--dark)", fontWeight: 700, fontSize: ".9rem", letterSpacing: ".02em" }}>{v.title}</div>
                  </div>
                </div>
                <p className="jb" style={{ color: "var(--muted)", fontSize: ".75rem", lineHeight: 1.85, margin: 0 }}>{v.desc}</p>
                <div className="jb" style={{ marginTop: 16, color: "var(--blue)", fontSize: ".65rem", letterSpacing: ".08em", fontWeight: 600 }}>// learn_more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section style={{ background: "#fff", padding: secPad, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 52 }}>
            <div className="label" style={{ justifyContent: "center", display: "flex", marginBottom: 14 }}>Sectors We Serve</div>
            <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, color: "var(--dark)", margin: "0 0 8px" }}>
              INDUSTRY <span className="g-blue">EXPERTISE</span>
            </h2>
            <p className="jb" style={{ color: "var(--muted)", fontSize: ".75rem", lineHeight: 1.7 }}>
              Deep domain knowledge across the sectors that matter most.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {industries.map(ind => (
              <div key={ind} className="ind-pill">
                <span style={{ color: "var(--blue)" }}>◆</span>
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section style={{ background: "var(--mid)", padding: secPad, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: isMobile ? 36 : 52, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="label" style={{ marginBottom: 14 }}>Meet the Experts</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, lineHeight: 1.05, color: "var(--dark)", margin: 0 }}>
                THE MINDS <span className="g-blue">BEHIND DIT</span>
              </h2>
            </div>
            {!isMobile && <button className="btn-g" style={{ padding: "11px 24px" }}>View Full Team →</button>}
          </div>
          <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {team.map(({ name, role, img, exp }) => (
              <div key={name} className="team-card">
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img className="team-photo-img" src={img} alt={name} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,18,32,.6) 0%, transparent 55%)" }} />
                  {/* exp badge */}
                  <div className="tag" style={{ position: "absolute", top: 10, right: 10, background: "var(--blue)", color: "#fff", border: "none" }}>{exp}</div>
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <div className="ox" style={{ color: "var(--dark)", fontWeight: 700, fontSize: ".9rem", letterSpacing: ".01em", marginBottom: 3 }}>{name}</div>
                  <div className="jb" style={{ color: "var(--blue)", fontSize: ".63rem", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 14 }}>{role}</div>
                  <div style={{ height: 1, background: "var(--border)", marginBottom: 14 }} />
                  <div style={{ display: "flex", gap: 8 }}>
                    {[
                      <svg key="mail" width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                      <svg key="phone" width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                    ].map((icon, i) => (
                      <div key={i} className="team-btn" style={{ color: "var(--blue)" }}>{icon}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isMobile && <div style={{ textAlign: "center", marginTop: 24 }}><button className="btn-g">View Full Team →</button></div>}
        </div>
      </section>

      {/* ══ JOURNEY / TIMELINE ══ */}
      <section style={{ padding: secPad, background: "var(--dark)", position: "relative", overflow: "hidden" }}>
        {/* Grid bg */}
        {/* Orb */}

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
            <div className="label" style={{ justifyContent: "center", display: "flex", marginBottom: 14, color: "rgba(15,155,231,.8)" }}>Our Journey</div>
            <h2 className="ox" style={{ fontSize: "clamp(1.8rem,4vw,3.6rem)", fontWeight: 800, color: "#fff", letterSpacing: "-.02em", lineHeight: 1.05, margin: "0 0 12px" }}>
              15 YEARS OF <span className="g-blue">CHANGING LIVES</span>
            </h2>
            <p className="jb" style={{ color: "rgba(255,255,255,.35)", fontSize: ".78rem", lineHeight: 1.7 }}>
              From a small Delhi office to a PAN-India operation trusted by 800+ companies.
            </p>
          </div>

          {/* Timeline track */}
          <div className="tl-track" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0, position: "relative" }}>
            {/* Horizontal line */}
            {!isMobile && <div style={{ position: "absolute", top: 20, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(15,155,231,.4) 20%, rgba(15,155,231,.4) 80%, transparent)", pointerEvents: "none" }} />}

            {timeline.map(({ year, title, desc, active }) => (
              <div key={year} className="tl-item">
                <div style={{ marginBottom: 16, zIndex: 2, position: "relative" }}>
                  <div className={`tl-dot ${active ? "tl-dot-active" : ""}`}>
                    <div className={`tl-dot-inner ${active ? "tl-dot-inner-active" : ""}`} />
                  </div>
                </div>
                <div className="ox" style={{ color: active ? "#38c6f5" : "var(--blue)", fontSize: "1rem", fontWeight: 700, marginBottom: 10, letterSpacing: ".03em" }}>{year}</div>
                <div className={`tl-card ${active ? "tl-card-active" : ""}`}>
                  <div className="ox" style={{ color: active ? "#fff" : "rgba(255,255,255,.8)", fontSize: ".82rem", fontWeight: 700, lineHeight: 1.3, marginBottom: 8 }}>{title}</div>
                  <p className="jb" style={{ color: "rgba(255,255,255,.3)", fontSize: ".68rem", lineHeight: 1.75, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT METRICS ══ */}
      <section style={{ background: "var(--mid)", padding: secPad, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>
            <div>
              <div className="label" style={{ marginBottom: 16 }}>By the Numbers</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3.2rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: 20, color: "var(--dark)" }}>
                RESULTS THAT<br /><span className="g-blue">SPEAK FOR THEMSELVES</span>
              </h2>
              <p className="jb" style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 32, fontSize: ".78rem" }}>
                Our consultants bring domain expertise, market intelligence, and genuine care to every engagement — delivering outcomes that create lasting impact.
              </p>
              <button className="btn-p">View Our Impact Report →</button>
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

      {/* ══ CTA ══ */}
      <section className="cta-section">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=75')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0, opacity: .18 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(19,24,31,.97) 0%, rgba(19,24,31,.88) 50%, rgba(15,155,231,.08) 100%)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: isMobile ? "64px 20px" : "88px 52px", width: "100%" }}>
          <div style={{ maxWidth: 640 }}>
            <div className="label" style={{ color: "rgba(255,255,255,.5)", marginBottom: 18 }}>
              <span style={{ opacity: .5 }}>// </span>Get Started Today
            </div>
            <h2 className="ox" style={{ fontSize: "clamp(2.2rem,5vw,4.4rem)", fontWeight: 800, lineHeight: 1.0, marginBottom: 20, color: "#fff", letterSpacing: "-.01em" }}>
              READY TO FIND<br />YOUR DREAM<br /><span className="g-blue">ROLE?</span>
            </h2>
            <p className="jb" style={{ color: "rgba(255,255,255,.5)", fontSize: ".8rem", lineHeight: 1.9, marginBottom: 40, maxWidth: 500 }}>
              Join 10,000+ professionals who built their careers through DIT Consultancy. Your next chapter starts here.
            </p>
            <div className="cta-btns-about" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              <button className="btn-p" style={{ padding: "16px 36px", fontSize: ".85rem", boxShadow: "0 8px 32px rgba(15,155,231,.4)" }}>
                Browse Jobs Now
                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button className="btn-gw" style={{ padding: "16px 36px", fontSize: ".85rem" }}>Talk to a Consultant</button>
            </div>

            {/* Contact row */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {[
                { icon: "📞", text: "+91 98765 43210" },
                { icon: "✉️", text: "hello@ditconsultancy.in" },
                { icon: "📍", text: "New Delhi, India" },
              ].map(c => (
                <div key={c.text} className="jb" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.35)", fontSize: ".68rem", padding: "9px 16px", border: "1px solid rgba(255,255,255,.08)", borderRadius: 3, background: "rgba(255,255,255,.03)", cursor: "pointer", letterSpacing: ".04em", transition: "all .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.color = "rgba(255,255,255,.6)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.03)"; e.currentTarget.style.color = "rgba(255,255,255,.35)"; }}
                >
                  {c.icon} {c.text}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 24 }}>
              {[{ text: "Free for Candidates" }, { text: "No Hidden Fees" }, { text: "Dedicated Consultant" }].map(i => (
                <div key={i.text} className="jb" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.4)", fontSize: ".65rem", letterSpacing: ".06em" }}>
                  <span style={{ color: "var(--blue)", fontWeight: 700 }}>✓</span>{i.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
     
    </div>
  );
}