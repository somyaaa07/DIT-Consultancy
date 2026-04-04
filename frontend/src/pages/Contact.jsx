import { useState, useEffect } from "react";
import API from "../api";

const OFFICES = [
  {
    city: "New Delhi",
    address: "Level 12, Tower B, DLF Cyber City,\nGurugram, Haryana 122002",
    phone: "+91 9999999999",
    email: "delhi@ditconsultancy.in",
    hours: "Mon – Sat · 9 am – 7 pm",
    primary: true,
  },
  {
    city: "Mumbai",
    address: "Unit 804, Bandra Kurla Complex,\nBandra East, Mumbai 400051",
    phone: "+91 9999999999",
    email: "mumbai@ditconsultancy.in",
    hours: "Mon – Sat · 9 am – 7 pm",
    primary: false,
  },
  {
    city: "Bengaluru",
    address: "3rd Floor, Embassy Tech Village,\nOuter Ring Road, Bengaluru 560103",
    phone: "+91 9999999999",
    email: "bangalore@ditconsultancy.in",
    hours: "Mon – Sat · 9 am – 7 pm",
    primary: false,
  },
];

const ENQUIRY_TYPES = [
  "Job Seeker",
  "Employer / Hiring",
  "Partnership",
  "Press & Media",
  "General Enquiry",
];

const FAQS = [
  {
    q: "How long does the placement process typically take?",
    a: "For most roles our average time-to-place is 18 working days. Senior and niche mandates may take slightly longer, but we keep you informed at every step.",
  },
  {
    q: "Is there a fee for candidates?",
    a: "No. Our services are completely free for job seekers. We are compensated exclusively by the hiring organisations.",
  },
  {
    q: "Which industries do you specialise in?",
    a: "We operate across 28+ industries including Technology, Finance, Legal, Healthcare, FMCG, Manufacturing, and Professional Services.",
  },
  {
    q: "Can companies post jobs directly on your platform?",
    a: "Yes. Registered employers can post mandates via our Employer Portal or contact our team directly for managed search assignments.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    company: "", type: "", message: ""
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // ✅ API se connect kiya
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await API.post("/enquiries", form);
      setSent(true);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ox { font-family: 'Oxanium', sans-serif; }
        .jb { font-family: 'JetBrains Mono', monospace; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanLine { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer  { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes gridFade { from{opacity:0;transform:scale(.97)} to{opacity:1;transform:scale(1)} }
        @keyframes pulseDot { 0%,100%{box-shadow:0 0 0 5px rgba(15,155,231,.22),0 0 0 10px rgba(15,155,231,.09)} 50%{box-shadow:0 0 0 8px rgba(15,155,231,.28),0 0 0 16px rgba(15,155,231,.1)} }
        @keyframes checkDraw{ from{stroke-dashoffset:40} to{stroke-dashoffset:0} }
        @keyframes popIn    { from{transform:scale(.88);opacity:0} to{transform:scale(1);opacity:1} }
        @keyframes spin     { to{transform:rotate(360deg)} }

        .a-up { animation: fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
        .d1{animation-delay:.06s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}
        .d4{animation-delay:.44s}.d5{animation-delay:.58s}

        .g-blue {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue); color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 13px 28px; border-radius: 4px; border: none; cursor: pointer;
          transition: all .2s; position: relative; overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-p:disabled { opacity: 0.6; cursor: not-allowed; }
        .btn-p::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .btn-p:hover:not(:disabled)::before { transform: translateX(100%); }
        .btn-p:hover:not(:disabled) { background: #0b87cc; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(15,155,231,.35); }

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

        .hero-section {
          min-height: 92vh; position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          background: var(--dark);
        }
        .hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.6), transparent);
          animation: scanLine 4s ease-in-out infinite;
          pointer-events: none; z-index: 3;
        }

        .stat-bar { background: var(--blue); position: relative; z-index: 10; }
        .stat-bar::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,.05) 80px, rgba(255,255,255,.05) 81px);
        }

        .fi {
          width: 100%;
          background: var(--mid);
          border: 1.5px solid var(--border);
          border-radius: 4px;
          padding: 11px 14px;
          color: var(--dark);
          font-size: .78rem;
          font-family: 'JetBrains Mono', monospace;
          outline: none;
          transition: border-color .18s, box-shadow .18s, background .18s;
          resize: none;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .fi::placeholder { color: var(--muted); }
        .fi:focus { border-color: var(--blue); background: var(--white); box-shadow: 0 0 0 3px rgba(15,155,231,.1); }
        select.fi { cursor: pointer; appearance: none; }

        .fl {
          display: block; font-size: .6rem; font-weight: 600;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 7px;
          font-family: 'JetBrains Mono', monospace;
          transition: color .18s;
        }
        .fw.focused .fl { color: var(--blue); }

        .faq-wrap {
          border: 1px solid var(--border); border-radius: 4px;
          background: var(--white); overflow: hidden;
          transition: border-color .2s, box-shadow .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }
        .faq-wrap.open {
          border-color: rgba(15,155,231,.4);
          box-shadow: 0 4px 20px rgba(15,155,231,.08);
          background: var(--mid);
        }
        .faq-btn {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 22px; gap: 16px; text-align: left;
        }
        .faq-icon {
          width: 22px; height: 22px;
          border: 1px solid rgba(15,155,231,.3);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); font-size: .6rem; flex-shrink: 0;
          transition: transform .28s, background .2s;
          clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%);
        }
        .faq-wrap.open .faq-icon { transform: rotate(180deg); background: rgba(15,155,231,.1); }
        .faq-body { max-height: 0; overflow: hidden; transition: max-height .38s cubic-bezier(.23,1,.32,1); }
        .faq-wrap.open .faq-body { max-height: 200px; }

        .oc {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 4px; padding: 28px 24px;
          position: relative; overflow: hidden;
          transition: border-color .22s, box-shadow .28s, transform .28s;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
        }
        .oc::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .oc:hover { border-color: rgba(15,155,231,.4); box-shadow: 0 16px 48px rgba(15,155,231,.12); transform: translateY(-4px); }
        .oc:hover::after { transform: scaleX(1); }
        .oc.primary { border-left: 3px solid var(--blue); }

        .map-box {
          border-radius: 0; overflow: hidden;
          border: 1px solid var(--border); position: relative;
          height: 160px;
          background: linear-gradient(135deg, #daf1fb 0%, #b8e4f5 100%);
          margin-top: 18px;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .map-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,.15) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .map-pin { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-70%); display: flex; flex-direction: column; align-items: center; }
        .map-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--blue); animation: pulseDot 2.5s ease-in-out infinite; }
        .map-stem { width: 2px; height: 14px; background: var(--blue); opacity: .6; }
        .map-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(220,243,252,.96));
          padding: 20px 12px 8px;
          display: flex; justify-content: space-between; align-items: flex-end;
        }

        .soc {
          width: 34px; height: 34px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted); font-size: .68rem; font-weight: 700;
          cursor: pointer; transition: all .18s; text-decoration: none;
          clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
          font-family: 'JetBrains Mono', monospace;
        }
        .soc:hover { background: var(--blue); border-color: var(--blue); color: #fff; }

        .success { animation: popIn .5s cubic-bezier(.22,1,.36,1) both; }
        .check-ring {
          width: 68px; height: 68px;
          background: var(--light-blue);
          border: 1px solid rgba(15,155,231,.3);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .check-path { stroke-dasharray: 40; stroke-dashoffset: 40; animation: checkDraw .5s .3s ease forwards; }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        @media(max-width:1023px){
          .contact-grid { grid-template-columns: 1fr !important; }
          .offices-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:639px){
          .offices-grid { grid-template-columns: 1fr !important; }
          .form-row    { grid-template-columns: 1fr !important; }
          .hero-pills  { flex-direction: column !important; align-items: flex-start !important; }
          .stat-grid   { grid-template-columns: 1fr 1fr !important; }
          .cta-btns    { flex-direction: column !important; }
        }
      `}</style>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-scan" />

        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=82&auto=format&fit=crop"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", opacity: .18 }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(19,24,31,.96) 0%, rgba(19,24,31,.72) 60%, rgba(15,155,231,.06) 100%)", zIndex: 2 }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 52px", width: "100%", flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ paddingTop: 80, paddingBottom: 48, maxWidth: 680 }}>

            <div className="a-up d1" style={{ marginBottom: 26 }}>
              <span className="jb" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(15,155,231,.1)", border: "1px solid rgba(15,155,231,.3)", padding: "6px 14px", fontSize: ".65rem", color: "var(--blue)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue)", animation: "blinkDot 1.5s ease infinite" }} />
                Get In Touch — DIT Consultancy
              </span>
            </div>

            <h1 className="a-up d2 ox" style={{ fontSize: "clamp(2.6rem,5.5vw,5.4rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-.02em", marginBottom: 20, color: "#fff" }}>
              WE'D LOVE TO<br />
              <span className="g-blue">HEAR FROM</span><br />
              <span style={{ color: "#fff" }}>YOU</span>
            </h1>

            <div className="a-up d3 jb" style={{ color: "rgba(255,255,255,.45)", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "block", width: 32, height: 1, background: "var(--blue)" }} />
              Delhi · Mumbai · Bengaluru
            </div>

            <div className="a-up d4 hero-pills" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
              {[
                { icon: "✉", text: "info@ditconsultancy.in" },
                { icon: "☎", text: "+91 9XXXXXXXXX" },
                { icon: "◎", text: "3 Offices Nationwide" },
              ].map(p => (
                <div key={p.text} className="jb" style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,.15)", padding: "7px 16px", color: "rgba(255,255,255,.7)", fontSize: ".7rem", letterSpacing: ".04em" }}>
                  <span style={{ color: "var(--blue)" }}>{p.icon}</span>
                  {p.text}
                </div>
              ))}
            </div>

            <div className="a-up d5" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[{ code: "24H", label: "Response Time" }, { code: "35+", label: "Cities Served" }, { code: "3", label: "Offices" }, { code: "28+", label: "Industries" }].map(b => (
                <div key={b.code} className="jb" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--blue)", fontSize: ".65rem", fontWeight: 700, background: "rgba(15,155,231,.12)", border: "1px solid rgba(15,155,231,.25)", padding: "2px 7px", borderRadius: 2 }}>{b.code}</span>
                  <span style={{ color: "rgba(255,255,255,.35)", fontSize: ".65rem", letterSpacing: ".06em" }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stat-bar">
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px", position: "relative" }}>
            <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
              {[
                { val: "28+", label: "Industries" },
                { val: "18",  label: "Days to Place" },
                { val: "3",   label: "Offices" },
                { val: "35+", label: "Cities Served" },
              ].map((s, i) => (
                <div key={s.label} style={{ padding: "24px 28px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.2)" : "none" }}>
                  <div className="ox" style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{s.val}</div>
                  <div className="jb" style={{ color: "rgba(255,255,255,.65)", fontSize: ".6rem", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FORM + SIDEBAR ════════════════════════════════════ */}
      <section style={{ background: "var(--mid)", padding: "108px 0 108px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="label" style={{ marginBottom: 14 }}>Send a Message</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, lineHeight: 1.05, color: "var(--dark)", margin: 0 }}>
                START THE <span className="g-blue">CONVERSATION</span>
              </h2>
            </div>
            <p className="jb" style={{ color: "var(--muted)", maxWidth: 280, textAlign: "right", lineHeight: 1.75, fontSize: ".75rem" }}>
              Fill in the form and we'll get back within one business day.
            </p>
          </div>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, alignItems: "start" }}>

            {/* ── FORM CARD ── */}
            <div className="card" style={{ padding: "40px 36px" }}>
              {sent ? (
                <div className="success" style={{ textAlign: "center", padding: "32px 0" }}>
                  <div className="check-ring">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path className="check-path" d="M5 12l5 5L19 7" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="ox" style={{ color: "var(--dark)", fontWeight: 800, fontSize: "1.4rem", marginBottom: 10, letterSpacing: ".02em" }}>MESSAGE SENT!</div>
                  <div className="jb" style={{ color: "var(--blue)", fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 14 }}>// response within 1 business day</div>
                  <p className="jb" style={{ color: "var(--muted)", lineHeight: 1.85, maxWidth: 300, margin: "0 auto 28px", fontSize: ".76rem" }}>
                    Thank you for reaching out. A confirmation email has been sent to your inbox. A member of our team will respond shortly.
                  </p>
                  <button className="btn-g" onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", phone: "", company: "", type: "", message: "" });
                  }}>
                    Send Another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                  {/* ✅ Error Message */}
                  {error && (
                    <div style={{
                      background: "#fff0f0", border: "1.5px solid #fca5a5",
                      borderRadius: 6, padding: "12px 16px",
                      color: "#991b1b", fontSize: ".76rem",
                      fontFamily: "JetBrains Mono, monospace",
                      display: "flex", alignItems: "center", gap: 8
                    }}>
                      <span>⚠</span> {error}
                    </div>
                  )}

                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div className={`fw${focused === "name" ? " focused" : ""}`}>
                      <label className="fl">Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} placeholder="Your full name" className="fi" />
                    </div>
                    <div className={`fw${focused === "email" ? " focused" : ""}`}>
                      <label className="fl">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} placeholder="email@company.com" className="fi" />
                    </div>
                  </div>

                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div className={`fw${focused === "phone" ? " focused" : ""}`}>
                      <label className="fl">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} placeholder="+91 9XXXXXXXXX" className="fi" />
                    </div>
                    <div className={`fw${focused === "company" ? " focused" : ""}`}>
                      <label className="fl">Company / Organisation</label>
                      <input name="company" value={form.company} onChange={handleChange} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} placeholder="Your company name" className="fi" />
                    </div>
                  </div>

                  <div className={`fw${focused === "type" ? " focused" : ""}`}>
                    <label className="fl">Enquiry Type *</label>
                    <div style={{ position: "relative" }}>
                      <select name="type" required value={form.type} onChange={handleChange} onFocus={() => setFocused("type")} onBlur={() => setFocused(null)} className="fi" style={{ paddingRight: 36 }}>
                        <option value="">Select the nature of your enquiry…</option>
                        {ENQUIRY_TYPES.map(t => <option key={t}>{t}</option>)}
                      </select>
                      <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--blue)", pointerEvents: "none", fontSize: ".7rem" }}>▾</div>
                    </div>
                  </div>

                  <div className={`fw${focused === "message" ? " focused" : ""}`}>
                    <label className="fl">Your Message *</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} placeholder="Tell us how we can help you…" className="fi" style={{ minHeight: 120 }} />
                  </div>

                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <input type="checkbox" required id="consent" style={{ marginTop: 2, accentColor: "var(--blue)", cursor: "pointer", flexShrink: 0 }} />
                    <label htmlFor="consent" className="jb" style={{ color: "var(--muted)", fontSize: ".68rem", lineHeight: 1.7, cursor: "pointer" }}>
                      I agree to DIT Consultancy's{" "}
                      <a href="#" style={{ color: "var(--blue)", textDecoration: "none" }}>Privacy Policy</a>
                      {" "}and consent to being contacted.
                    </label>
                  </div>

                  {/* ✅ Loading state button */}
                  <button type="submit" className="btn-p" disabled={loading}
                    style={{ width: "100%", justifyContent: "center", padding: "14px 24px", fontSize: ".82rem" }}>
                    {loading ? (
                      <>
                        <span className="spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              <div className="card" style={{ padding: "22px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, background: "var(--light-blue)", border: "1px solid rgba(15,155,231,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", fontSize: "1.1rem", flexShrink: 0, clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>⚡</div>
                  <div>
                    <div className="ox" style={{ color: "var(--dark)", fontWeight: 700, fontSize: ".88rem" }}>Fast Response</div>
                    <div className="jb" style={{ color: "var(--muted)", fontSize: ".62rem", marginTop: 2, letterSpacing: ".04em" }}>// reply within 1 business day</div>
                  </div>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: "var(--border)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "85%", background: "var(--blue)" }} />
                </div>
                <div className="jb" style={{ color: "var(--muted)", fontSize: ".6rem", marginTop: 6, letterSpacing: ".04em" }}>Average reply time: 4 hours</div>
              </div>

              <div className="card" style={{ padding: "22px 20px" }}>
                <div className="label" style={{ marginBottom: 14 }}>Reach Us Directly</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { icon: "✉", label: "General Enquiries", val: "info@ditconsultancy.in" },
                    { icon: "💼", label: "Employer Services",  val: "hire@ditconsultancy.in" },
                    { icon: "☎", label: "Helpline",           val: "+91 9XXXXXXXXX" },
                  ].map(c => (
                    <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 34, height: 34, background: "var(--light-blue)", border: "1px solid rgba(15,155,231,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", fontSize: ".8rem", flexShrink: 0, clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)" }}>{c.icon}</div>
                      <div>
                        <div className="jb" style={{ color: "var(--muted)", fontSize: ".58rem", letterSpacing: ".1em", textTransform: "uppercase" }}>{c.label}</div>
                        <div className="jb" style={{ color: "var(--dark)", fontSize: ".72rem", fontWeight: 500, marginTop: 1 }}>{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: "22px 20px" }}>
                <div className="label" style={{ marginBottom: 14 }}>Office Hours</div>
                {[
                  { day: "Monday – Friday", hours: "9:00 am – 7:00 pm" },
                  { day: "Saturday",        hours: "10:00 am – 5:00 pm" },
                  { day: "Sunday",          hours: "Closed", muted: true },
                ].map((r, i, arr) => (
                  <div key={r.day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <span className="jb" style={{ color: "var(--muted)", fontSize: ".7rem" }}>{r.day}</span>
                    <span className="jb" style={{ color: r.muted ? "rgba(122,138,152,.4)" : "var(--dark)", fontSize: ".7rem", fontWeight: 600 }}>{r.hours}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: "22px 20px" }}>
                <div className="label" style={{ marginBottom: 14 }}>Follow DIT</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  {[{ l: "LinkedIn", a: "in" }, { l: "Twitter", a: "𝕏" }, { l: "Instagram", a: "ig" }, { l: "YouTube", a: "▶" }].map(s => (
                    <a key={s.l} href="#" className="soc" title={s.l}>{s.a}</a>
                  ))}
                  <span className="jb" style={{ color: "var(--muted)", fontSize: ".6rem", marginLeft: 4, letterSpacing: ".06em" }}>@ditconsultancy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OFFICES ═══════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "108px 0", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="label" style={{ marginBottom: 14 }}>Our Offices</div>
              <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, lineHeight: 1.05, color: "var(--dark)", margin: 0 }}>
                FIND US <span className="g-blue">ACROSS INDIA</span>
              </h2>
            </div>
            <span className="jb" style={{ color: "var(--muted)", fontSize: ".72rem", letterSpacing: ".06em" }}>// 3 offices · 35+ cities served</span>
          </div>

          <div className="offices-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {OFFICES.map(o => (
              <div key={o.city} className={`oc${o.primary ? " primary" : ""}`}>
                {o.primary && (
                  <div style={{ position: "absolute", top: 14, right: 14 }}>
                    <span className="tag">HQ</span>
                  </div>
                )}
                <div className="ox" style={{ color: "var(--dark)", fontWeight: 800, fontSize: "1.15rem", marginBottom: 6, letterSpacing: ".01em" }}>{o.city}</div>
                <p className="jb" style={{ color: "var(--muted)", fontSize: ".72rem", lineHeight: 1.85, whiteSpace: "pre-line", marginBottom: 18 }}>{o.address}</p>
                <div style={{ height: 1, background: "var(--border)", marginBottom: 16 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[{ icon: "☎", val: o.phone }, { icon: "✉", val: o.email }, { icon: "◷", val: o.hours }].map(d => (
                    <div key={d.icon} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "var(--blue)", fontSize: ".78rem", width: 16, textAlign: "center", flexShrink: 0 }}>{d.icon}</span>
                      <span className="jb" style={{ color: "var(--muted)", fontSize: ".7rem" }}>{d.val}</span>
                    </div>
                  ))}
                </div>
                <div className="map-box">
                  <div className="map-grid" />
                  <div className="map-pin">
                    <div className="map-dot" />
                    <div className="map-stem" />
                  </div>
                  <div className="map-bar">
                    <span className="jb" style={{ color: "var(--muted)", fontSize: ".65rem" }}>{o.city} Office</span>
                    <a href="#" className="jb" style={{ color: "var(--blue)", fontSize: ".65rem", fontWeight: 700, textDecoration: "none" }}>Directions →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════ */}
      <section style={{ background: "var(--mid)", padding: "108px 0", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 52px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="label" style={{ justifyContent: "center", display: "flex", marginBottom: 14 }}>Common Questions</div>
            <h2 className="ox" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, color: "var(--dark)", margin: 0 }}>
              FREQUENTLY <span className="g-blue">ASKED</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-wrap${activeFAQ === i ? " open" : ""}`}>
                <button className="faq-btn" onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}>
                  <span className="ox" style={{ color: "var(--dark)", fontWeight: 700, fontSize: ".88rem", lineHeight: 1.4 }}>{faq.q}</span>
                  <div className="faq-icon">▾</div>
                </button>
                <div className="faq-body">
                  <p className="jb" style={{ color: "var(--muted)", fontSize: ".76rem", lineHeight: 1.85, padding: "0 22px 20px" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="jb" style={{ textAlign: "center", color: "var(--muted)", fontSize: ".7rem", marginTop: 36, letterSpacing: ".04em" }}>
            Still have questions?{" "}
            <a href="#" style={{ color: "var(--blue)", textDecoration: "none", fontWeight: 600 }}>Browse our full FAQ →</a>
          </p>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 440, display: "flex", alignItems: "center", background: "var(--dark)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=75')", backgroundSize: "cover", backgroundPosition: "center", opacity: .16 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(19,24,31,.97) 0%, rgba(19,24,31,.88) 50%, rgba(15,155,231,.08) 100%)" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "88px 52px", width: "100%" }}>
          <div style={{ maxWidth: 580 }}>
            <div className="label" style={{ color: "rgba(255,255,255,.5)", marginBottom: 18 }}>
              <span style={{ opacity: .5 }}>// </span>Ready to Begin
            </div>
            <h2 className="ox" style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 800, lineHeight: 1.0, marginBottom: 20, color: "#fff", letterSpacing: "-.01em" }}>
              YOUR NEXT<br />CHAPTER STARTS<br /><span className="g-blue">NOW</span>
            </h2>
            <p className="jb" style={{ color: "rgba(255,255,255,.5)", fontSize: ".8rem", lineHeight: 1.9, marginBottom: 40, maxWidth: 460 }}>
              Join 10,000+ professionals who built their careers through DIT Consultancy. Our team is ready to help you take the next step.
            </p>
            <div className="cta-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <button className="btn-p" style={{ padding: "16px 36px", fontSize: ".85rem", boxShadow: "0 8px 32px rgba(15,155,231,.4)" }}>
                Find Your Dream Job
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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