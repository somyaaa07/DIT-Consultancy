import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [form, setForm] = useState({
    name: '', email: '', password: '',
    role: 'jobseeker', phone: '', location: ''
  });
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
      const res = await API.post('/auth/register', form);
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

        .rp-root * { box-sizing: border-box; }

        .rp-root {
          min-height: 100vh;
          background: var(--mid);
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          padding: 24px;
          position: relative; overflow: hidden;
        }

        /* page grid bg */
        .rp-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: .025; pointer-events: none;
        }

        /* ── CARD ── */
        .rp-card {
          display: flex;
          width: 100%; max-width: 980px; min-height: 640px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 6px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(19,24,31,.10), 0 2px 8px rgba(19,24,31,.05);
          opacity: 0; transform: translateY(28px);
          transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1);
          position: relative;
        }
        .rp-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--blue); z-index: 10;
        }
        .rp-card.visible { opacity: 1; transform: none; }

        /* ── LEFT PANEL ── */
        .rp-left {
          width: 380px; flex-shrink: 0;
          background: var(--dark);
          position: relative;
          display: flex; flex-direction: column;
          padding: 52px 44px; overflow: hidden;
        }

        
        @keyframes scanLine {
          0%  { transform: translateY(-100%); }
          100%{ transform: translateY(3000%); }
        }

        .rp-corner {
          position: absolute; width: 16px; height: 16px;
          border-color: var(--blue); border-style: solid; opacity: .35; z-index: 3;
        }

        .rp-brand {
          display: flex; align-items: center; gap: 12px;
          position: relative; z-index: 5;
        }
        .rp-brand-icon {
          width: 38px; height: 38px;
          background: var(--blue);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .rp-brand-icon svg { width: 20px; height: 20px; }
        .rp-brand-name {
          font-family: 'Oxanium', sans-serif;
          font-size: 17px; font-weight: 800;
          color: var(--white); letter-spacing: .04em;
        }

        .rp-left-center {
          position: relative; z-index: 5; flex: 1;
          display: flex; flex-direction: column; justify-content: center;
          padding: 44px 0 36px;
        }

        .rp-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(15,155,231,.1);
          border: 1px solid rgba(15,155,231,.3);
          padding: 5px 13px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--blue);
          letter-spacing: .1em; text-transform: uppercase;
          margin-bottom: 22px; width: fit-content;
        }
        .rp-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue);
          animation: blinkDot 1.8s ease-in-out infinite;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:.25} }

        .rp-headline {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800; color: var(--white);
          line-height: 1.05; letter-spacing: -.02em; margin-bottom: 18px;
        }
        .rp-headline span {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .rp-desc {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; color: rgba(255,255,255,.38);
          line-height: 1.8; max-width: 270px;
        }

        /* steps */
        .rp-steps {
          position: relative; z-index: 5;
          display: flex; flex-direction: column; gap: 14px;
          border-top: 1px solid rgba(255,255,255,.07);
          padding-top: 28px;
        }
        .rp-step { display: flex; align-items: center; gap: 14px; }
        .rp-step-num {
          width: 30px; height: 30px;
          background: rgba(15,155,231,.12);
          border: 1px solid rgba(15,155,231,.25);
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; font-weight: 600; color: var(--blue);
          flex-shrink: 0;
        }
        .rp-step-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: rgba(255,255,255,.38); line-height: 1.4;
        }

        /* ── RIGHT PANEL ── */
        .rp-right {
          flex: 1; padding: 52px 48px;
          display: flex; flex-direction: column; justify-content: center;
          background: var(--white); overflow-y: auto;
        }

        .rp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; color: var(--blue);
          text-transform: uppercase; letter-spacing: .14em; margin-bottom: 10px;
        }
        .rp-eyebrow::before { content: '//'; opacity: .5; }

        .rp-heading {
          font-family: 'Oxanium', sans-serif;
          font-size: 2rem; font-weight: 800;
          color: var(--dark); letter-spacing: -.02em; margin-bottom: 6px;
        }
        .rp-subtext {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
          margin-bottom: 26px; letter-spacing: .04em;
        }

        /* ── ROLE TOGGLE ── */
        .rp-role-wrap {
          display: flex; gap: 8px; margin-bottom: 24px;
          background: var(--mid);
          padding: 4px; border: 1px solid var(--border);
        }
        .rp-role-btn {
          flex: 1; padding: 10px 8px;
          border: 1.5px solid transparent;
          font-family: 'Oxanium', sans-serif;
          font-size: .78rem; font-weight: 700;
          letter-spacing: .05em; text-transform: uppercase;
          cursor: pointer;
          transition: all .2s;
          background: transparent; color: var(--muted);
          display: flex; align-items: center; justify-content: center; gap: 7px;
          clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
        }
        .rp-role-btn.active {
          background: var(--dark); color: var(--white);
          border-color: var(--dark);
        }
        .rp-role-btn.active .rp-role-accent { color: var(--blue); }
        .rp-role-icon { width: 15px; height: 15px; opacity: .55; }
        .rp-role-btn.active .rp-role-icon { opacity: 1; }

        /* error */
        .rp-error {
          background: rgba(239,68,68,.05);
          border: 1px solid rgba(239,68,68,.2);
          border-left: 3px solid #ef4444;
          padding: 11px 14px; margin-bottom: 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: #dc2626;
          animation: errIn .3s ease;
        }
        @keyframes errIn { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:none} }

        /* form grid */
        .rp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px; margin-bottom: 0;
        }
        .rp-grid-full { grid-column: 1 / -1; }

        .rp-field { display: flex; flex-direction: column; }
        .rp-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; font-weight: 600;
          color: var(--muted); text-transform: uppercase;
          letter-spacing: .12em; margin-bottom: 7px;
        }

        .rp-input-wrap { position: relative; }
        .rp-input-icon {
          position: absolute; left: 13px; top: 50%;
          transform: translateY(-50%);
          width: 14px; height: 14px;
          pointer-events: none; opacity: .25; transition: opacity .2s;
        }
        .rp-input-wrap:focus-within .rp-input-icon { opacity: .7; }

        .rp-input {
          width: 100%;
          border: 1.5px solid var(--border);
          padding: 11px 12px 11px 38px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .75rem; color: var(--dark);
          background: var(--mid); outline: none;
          border-radius: 3px;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .rp-input::placeholder { color: rgba(19,24,31,.2); }
        .rp-input:focus {
          border-color: var(--blue);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(15,155,231,.08);
        }

        /* ── SUBMIT BUTTON ── */
        .rp-btn {
          width: 100%; background: var(--dark);
          border: none; padding: 14px;
          font-family: 'Oxanium', sans-serif;
          font-size: .85rem; font-weight: 700;
          color: #fff; cursor: pointer;
          letter-spacing: .08em; text-transform: uppercase;
          position: relative; overflow: hidden;
          transition: transform .15s, box-shadow .25s, background .2s;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          margin-top: 20px;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .rp-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .rp-btn:hover:not(:disabled)::before { transform: translateX(100%); }
        .rp-btn:hover:not(:disabled) {
          background: var(--blue);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px var(--blue-glow);
        }
        .rp-btn:active:not(:disabled) { transform: translateY(0); }
        .rp-btn:disabled { opacity: .55; cursor: not-allowed; }

        .rp-btn-arrow { transition: transform .2s; }
        .rp-btn:hover:not(:disabled) .rp-btn-arrow { transform: translateX(4px); }

        .rp-spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin .7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .rp-login {
          text-align: center; margin-top: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
        }
        .rp-login a {
          color: var(--blue); text-decoration: none; font-weight: 600;
          border-bottom: 1px solid transparent; transition: border-color .2s;
        }
        .rp-login a:hover { border-bottom-color: var(--blue); }

        @media (max-width: 720px) {
          .rp-left { display: none; }
          .rp-right { padding: 40px 28px; }
          .rp-card { max-width: 480px; min-height: auto; }
          .rp-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="rp-root">
        <div className={`rp-card ${mounted ? 'visible' : ''}`}>

          {/* LEFT PANEL */}
          <div className="rp-left">
       
            <div className="rp-brand">
              <div className="rp-brand-icon">
                <svg viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="2" width="8" height="8" rx="2" fill="white" />
                  <rect x="12" y="2" width="8" height="8" rx="2" fill="white" opacity="0.5" />
                  <rect x="2" y="12" width="8" height="8" rx="2" fill="white" opacity="0.5" />
                  <rect x="12" y="12" width="8" height="8" rx="2" fill="white" opacity="0.2" />
                </svg>
              </div>
              <span className="rp-brand-name">DIT Consultancy</span>
            </div>

            <div className="rp-left-center">
              <div className="rp-badge">
                <span className="rp-badge-dot" />
                Free Forever
              </div>
              <h1 className="rp-headline">
                Start Your<br /><span>Journey</span><br />Today.
              </h1>
              <p className="rp-desc">
                Create your profile in minutes and get matched with opportunities that fit your goals.
              </p>
            </div>

            <div className="rp-steps">
              {[
                { n: '01', t: 'Create your free account' },
                { n: '02', t: 'Build your profile & resume' },
                { n: '03', t: 'Apply to top companies' },
              ].map(s => (
                <div className="rp-step" key={s.n}>
                  <div className="rp-step-num">{s.n}</div>
                  <div className="rp-step-text">{s.t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="rp-right">
            <div className="rp-eyebrow">Get started</div>
            <h2 className="rp-heading">Create Account</h2>
            <p className="rp-subtext">// fill in your details to register for free</p>

            {/* Role Toggle */}
            <div className="rp-role-wrap">
              <button
                type="button"
                className={`rp-role-btn ${form.role === 'jobseeker' ? 'active' : ''}`}
                onClick={() => setForm({ ...form, role: 'jobseeker' })}
              >
                <svg className="rp-role-icon" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                Job Seeker
              </button>
              <button
                type="button"
                className={`rp-role-btn ${form.role === 'employer' ? 'active' : ''}`}
                onClick={() => setForm({ ...form, role: 'employer' })}
              >
                <svg className="rp-role-icon" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="6" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M5 6V4a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M1 10h14" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                Employer
              </button>
            </div>

            {error && <div className="rp-error">⚠ {error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="rp-grid">

                <div className="rp-field rp-grid-full">
                  <label className="rp-label">Full Name</label>
                  <div className="rp-input-wrap">
                    <svg className="rp-input-icon" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="5" r="3" stroke="#13181f" strokeWidth="1.4" />
                      <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#13181f" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="John Doe" required className="rp-input" />
                  </div>
                </div>

                <div className="rp-field rp-grid-full">
                  <label className="rp-label">Email Address</label>
                  <div className="rp-input-wrap">
                    <svg className="rp-input-icon" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="3" width="14" height="10" rx="2" stroke="#13181f" strokeWidth="1.4" />
                      <path d="M1 5.5l7 4.5 7-4.5" stroke="#13181f" strokeWidth="1.4" />
                    </svg>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required className="rp-input" />
                  </div>
                </div>

                <div className="rp-field rp-grid-full">
                  <label className="rp-label">Password</label>
                  <div className="rp-input-wrap">
                    <svg className="rp-input-icon" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="7" width="12" height="8" rx="2" stroke="#13181f" strokeWidth="1.4" />
                      <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="#13181f" strokeWidth="1.4" />
                      <circle cx="8" cy="11" r="1.2" fill="#13181f" />
                    </svg>
                    <input type="password" name="password" value={form.password} onChange={handleChange}
                      placeholder="Minimum 6 characters" required className="rp-input" />
                  </div>
                </div>

                <div className="rp-field">
                  <label className="rp-label">Phone Number</label>
                  <div className="rp-input-wrap">
                    <svg className="rp-input-icon" viewBox="0 0 16 16" fill="none">
                      <path d="M3 2h3l1.5 3.5-1.75 1.05A9 9 0 0 0 9 9.25L10.5 7.5 14 9v3c0 1.1-.9 2-2 2A11 11 0 0 1 1 4c0-1.1.9-2 2-2z" stroke="#13181f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="text" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="9999999999" className="rp-input" />
                  </div>
                </div>

                <div className="rp-field">
                  <label className="rp-label">Location</label>
                  <div className="rp-input-wrap">
                    <svg className="rp-input-icon" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5z" stroke="#13181f" strokeWidth="1.4" />
                      <circle cx="8" cy="6" r="1.5" stroke="#13181f" strokeWidth="1.2" />
                    </svg>
                    <input type="text" name="location" value={form.location} onChange={handleChange}
                      placeholder="Delhi, Mumbai..." className="rp-input" />
                  </div>
                </div>

              </div>

              <button type="submit" disabled={loading} className="rp-btn">
                {loading ? (
                  <><div className="rp-spinner" /><span>Creating Account...</span></>
                ) : (
                  <><span>Create Account</span><span className="rp-btn-arrow">→</span></>
                )}
              </button>
            </form>

            <p className="rp-login">
              Already have an account? <Link to="/login">Sign in here →</Link>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Register;