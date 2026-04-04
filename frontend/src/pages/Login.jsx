import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { setMounted(true); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await API.post('/auth/login', form);
      login(res.data.user, res.data.token);
      if (res.data.user.role === 'employer') navigate('/employer-dashboard');
      else navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue:       #0f9be7;
          --blue-hover: #0b87cc;
          --dark:       #13181f;
          --white:      #ffffff;
          --mid:        #f4f8fc;
          --border:     #e4edf5;
          --muted:      #7a8a98;
          --light-blue: #e8f5fd;
          --blue-glow:  rgba(15,155,231,.25);
        }

        .lp-root * { box-sizing: border-box; }

        .lp-root {
          min-height: 100vh;
          background: var(--mid);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        /* page grid bg */
        .lp-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: .025;
          pointer-events: none;
        }

        /* ── CARD ── */
        .lp-card {
          display: flex;
          width: 100%;
          max-width: 940px;
          min-height: 600px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(19,24,31,.10), 0 2px 8px rgba(19,24,31,.05);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1);
          position: relative;
        }
        /* top blue bar */
        .lp-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--blue); z-index: 10;
        }
        .lp-card.visible {
          opacity: 1;
          transform: none;
        }

        /* ── LEFT PANEL ── */
        .lp-left {
          width: 400px;
          flex-shrink: 0;
          background: var(--dark);
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 52px 44px;
          overflow: hidden;
        }

  

        /* scan line */
        .lp-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
          animation: scanLine 4s ease-in-out infinite;
          pointer-events: none; z-index: 4;
        }
        @keyframes scanLine {
          0%  { transform: translateY(-100%); }
          100%{ transform: translateY(3000%); }
        }

        /* corner decorators */
        .lp-corner {
          position: absolute; width: 16px; height: 16px;
          border-color: var(--blue); border-style: solid; opacity: .35; z-index: 3;
        }

        .lp-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 5;
          margin-bottom: auto;
        }
        .lp-brand-icon {
          width: 38px; height: 38px;
          background: var(--blue);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .lp-brand-icon svg { width: 20px; height: 20px; }
        .lp-brand-name {
          font-family: 'Oxanium', sans-serif;
          font-size: 17px; font-weight: 800;
          color: var(--white); letter-spacing: .04em;
        }

        .lp-left-center {
          position: relative; z-index: 5;
          flex: 1; display: flex;
          flex-direction: column; justify-content: center;
          padding: 40px 0 32px;
        }

        .lp-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(15,155,231,.1);
          border: 1px solid rgba(15,155,231,.3);
          padding: 5px 13px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--blue);
          letter-spacing: .1em; text-transform: uppercase;
          margin-bottom: 22px; width: fit-content;
        }
        .lp-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue);
          animation: blinkDot 1.8s ease-in-out infinite;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:.25} }

        .lp-headline {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800; color: var(--white);
          line-height: 1.05; letter-spacing: -.02em;
          margin-bottom: 18px;
        }
        .lp-headline span {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .lp-desc {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; color: rgba(255,255,255,.38);
          line-height: 1.8; max-width: 280px;
        }

        /* stat bar */
        .lp-stats {
          position: relative; z-index: 5;
          display: flex;
          border-top: 1px solid rgba(255,255,255,.07);
          padding-top: 28px;
        }
        .lp-stat { flex: 1; padding-right: 16px; }
        .lp-stat + .lp-stat {
          padding-left: 16px; padding-right: 0;
          border-left: 1px solid rgba(255,255,255,.07);
        }
        .lp-stat-num {
          font-family: 'Oxanium', sans-serif;
          font-size: 1.6rem; font-weight: 800;
          color: var(--white); letter-spacing: -.02em; line-height: 1.1;
        }
        .lp-stat-num span { color: var(--blue); }
        .lp-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .58rem; color: rgba(255,255,255,.3);
          text-transform: uppercase; letter-spacing: .1em; margin-top: 4px;
        }

        /* ── RIGHT PANEL ── */
        .lp-right {
          flex: 1;
          padding: 56px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--white);
        }

        .lp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; color: var(--blue);
          text-transform: uppercase; letter-spacing: .14em;
          margin-bottom: 10px;
        }
        .lp-eyebrow::before {
          content: '//'; opacity: .5;
        }

        .lp-heading {
          font-family: 'Oxanium', sans-serif;
          font-size: 2.2rem; font-weight: 800;
          color: var(--dark); letter-spacing: -.02em;
          margin-bottom: 6px;
        }
        .lp-subtext {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
          margin-bottom: 32px; letter-spacing: .04em;
        }

        /* progress indicator */
        .lp-progress {
          height: 2px; background: var(--border);
          margin-bottom: 36px; overflow: hidden;
        }
        .lp-progress-fill {
          height: 100%; width: 35%;
          background: var(--blue);
          animation: lpProg 2s ease-in-out infinite alternate;
        }
        @keyframes lpProg { from{width:20%} to{width:55%} }

        /* error */
        .lp-error {
          background: rgba(239,68,68,.05);
          border: 1px solid rgba(239,68,68,.2);
          border-left: 3px solid #ef4444;
          padding: 11px 14px; margin-bottom: 22px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: #dc2626;
          animation: errIn .3s ease;
        }
        @keyframes errIn { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:none} }

        /* field */
        .lp-field { margin-bottom: 20px; }
        .lp-label {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; font-weight: 600;
          color: var(--muted); text-transform: uppercase;
          letter-spacing: .12em; margin-bottom: 8px;
        }

        .lp-input-wrap { position: relative; }
        .lp-input-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          width: 15px; height: 15px;
          pointer-events: none; opacity: .25;
          transition: opacity .2s;
        }
        .lp-input-wrap:focus-within .lp-input-icon { opacity: .7; }

        .lp-input {
          width: 100%;
          border: 1.5px solid var(--border);
          padding: 13px 14px 13px 40px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .78rem; color: var(--dark);
          background: var(--mid);
          outline: none;
          border-radius: 3px;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .lp-input::placeholder { color: rgba(19,24,31,.2); }
        .lp-input:focus {
          border-color: var(--blue);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(15,155,231,.08);
        }

        .lp-row-meta {
          display: flex; justify-content: flex-end;
          margin-top: -8px; margin-bottom: 28px;
        }
        .lp-forgot {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--blue);
          text-decoration: none; letter-spacing: .05em;
          transition: opacity .2s;
        }
        .lp-forgot:hover { opacity: .65; }

        /* ── SUBMIT BUTTON — DIT chamfer style ── */
        .lp-btn {
          width: 100%;
          background: var(--dark);
          border: none;
          padding: 15px;
          font-family: 'Oxanium', sans-serif;
          font-size: .85rem; font-weight: 700;
          color: #fff; cursor: pointer;
          letter-spacing: .08em; text-transform: uppercase;
          position: relative; overflow: hidden;
          transition: transform .15s, box-shadow .25s, background .2s;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .lp-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .lp-btn:hover:not(:disabled)::before { transform: translateX(100%); }
        .lp-btn:hover:not(:disabled) {
          background: var(--blue);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px var(--blue-glow);
        }
        .lp-btn:active:not(:disabled) { transform: translateY(0); }
        .lp-btn:disabled { opacity: .55; cursor: not-allowed; }

        .lp-btn-arrow { transition: transform .2s; }
        .lp-btn:hover:not(:disabled) .lp-btn-arrow { transform: translateX(4px); }

        .lp-spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin .7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .lp-register {
          text-align: center; margin-top: 28px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
        }
        .lp-register a {
          color: var(--blue); text-decoration: none; font-weight: 600;
          border-bottom: 1px solid transparent; transition: border-color .2s;
        }
        .lp-register a:hover { border-bottom-color: var(--blue); }

        @media (max-width: 680px) {
          .lp-left { display: none; }
          .lp-right { padding: 40px 28px; }
          .lp-card { max-width: 440px; min-height: auto; }
        }
      `}</style>

      <div className="lp-root">
        <div className={`lp-card ${mounted ? 'visible' : ''}`}>

          {/* LEFT PANEL */}
          <div className="lp-left">
         
            <div className="lp-brand">
              <div className="lp-brand-icon">
                <svg viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="2" width="8" height="8" rx="2" fill="white" />
                  <rect x="12" y="2" width="8" height="8" rx="2" fill="white" opacity="0.5" />
                  <rect x="2" y="12" width="8" height="8" rx="2" fill="white" opacity="0.5" />
                  <rect x="12" y="12" width="8" height="8" rx="2" fill="white" opacity="0.2" />
                </svg>
              </div>
              <span className="lp-brand-name">DIT Consultancy</span>
            </div>

            <div className="lp-left-center">
              <div className="lp-badge">
                <span className="lp-badge-dot" />
                Now Hiring
              </div>
              <h1 className="lp-headline">
                Find Your<br /><span>Next</span><br />Chapter.
              </h1>
              <p className="lp-desc">
                Thousands of roles updated daily. Connect with companies that match your ambition.
              </p>
            </div>

            <div className="lp-stats">
              <div className="lp-stat">
                <div className="lp-stat-num">12<span>K+</span></div>
                <div className="lp-stat-label">Jobs Placed</div>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">800<span>+</span></div>
                <div className="lp-stat-label">Companies</div>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">98<span>%</span></div>
                <div className="lp-stat-label">Success Rate</div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lp-right">
            <div className="lp-eyebrow">Welcome back</div>
            <h2 className="lp-heading">Sign In</h2>
            <p className="lp-subtext">// enter your credentials to continue</p>

            <div className="lp-progress">
              <div className="lp-progress-fill" />
            </div>

            {error && <div className="lp-error">⚠ {error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="lp-field">
                <label className="lp-label">Email Address</label>
                <div className="lp-input-wrap">
                  <svg className="lp-input-icon" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#13181f" strokeWidth="1.4" />
                    <path d="M1 5.5l7 4.5 7-4.5" stroke="#13181f" strokeWidth="1.4" />
                  </svg>
                  <input
                    type="email" name="email"
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    required className="lp-input"
                  />
                </div>
              </div>

              <div className="lp-field">
                <label className="lp-label">Password</label>
                <div className="lp-input-wrap">
                  <svg className="lp-input-icon" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="7" width="12" height="8" rx="2" stroke="#13181f" strokeWidth="1.4" />
                    <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="#13181f" strokeWidth="1.4" />
                    <circle cx="8" cy="11" r="1.2" fill="#13181f" />
                  </svg>
                  <input
                    type="password" name="password"
                    value={form.password} onChange={handleChange}
                    placeholder="Enter your password"
                    required className="lp-input"
                  />
                </div>
              </div>

              <div className="lp-row-meta">
                <a href="#" className="lp-forgot">// forgot password?</a>
              </div>

              <button type="submit" disabled={loading} className="lp-btn">
                {loading ? (
                  <><div className="lp-spinner" /><span>Signing in...</span></>
                ) : (
                  <><span>Sign In</span><span className="lp-btn-arrow">→</span></>
                )}
              </button>
            </form>

            <p className="lp-register">
              Don't have an account? <Link to="/register">Create one free →</Link>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;