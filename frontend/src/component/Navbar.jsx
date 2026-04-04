import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '/logo2.png';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const NAV_LINKS = [
    { label: 'Home',     to: '/'        },
    { label: 'Jobs',     to: '/jobs'    },
    { label: 'About',    to: '/about'   },
    { label: 'Blog',     to: '/blogs'   },
    { label: 'Contact',  to: '/contact' },
    { label: 'Register', to: '/register'},
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .nb * { box-sizing: border-box; }

        .nb {
          font-family: 'JetBrains Mono', monospace;
          background: #ffffff;
          border-bottom: 1px solid #e4edf5;
          box-shadow: 0 1px 16px rgba(0,0,0,.05);
          position: sticky; top: 0; z-index: 100;
        }

        .nb-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 24px; height: 80px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }

        /* ── LOGO ── */
        .nb-logo {
          display: flex; align-items: center;
          gap: 10px; text-decoration: none; flex-shrink: 0;
       
        }
        .nb-logo-img {
          height: 80px; width: auto;
          object-fit: contain; display: block;
        }

        /* ── NAV LINKS ── */
        .nb-links {
          display: flex; align-items: center;
          gap: 2px; list-style: none; margin: 0; padding: 0;
        }
        .nb-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; font-weight: 500;
          letter-spacing: .06em; text-transform: uppercase;
          color: #7a8a98; text-decoration: none;
          padding: 7px 14px;
          transition: color .18s, background .18s;
          white-space: nowrap; position: relative;
        }
        .nb-link::after {
          content: ''; position: absolute;
          bottom: 0; left: 14px; right: 14px;
          height: 1.5px; background: #0f9be7;
          transform: scaleX(0); transform-origin: left;
          transition: transform .22s;
        }
        .nb-link:hover { color: #13181f; }
        .nb-link:hover::after { transform: scaleX(1); }
        .nb-link.active {
          color: #0f9be7; font-weight: 600;
        }
        .nb-link.active::after { transform: scaleX(1); }

        /* ── DIVIDER ── */
        .nb-divider {
          width: 1px; height: 22px;
          background: #e4edf5; margin: 0 6px; flex-shrink: 0;
        }

        /* ── USER CHIP ── */
        .nb-user-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 6px 14px 6px 8px;
          background: #e8f5fd;
          border: 1px solid rgba(15,155,231,.2);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          text-decoration: none;
        }
        .nb-user-avatar {
          width: 26px; height: 26px;
          background: #0f9be7;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%);
        }
        .nb-user-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; font-weight: 500; color: #7a8a98;
          white-space: nowrap; letter-spacing: .04em;
        }
        .nb-user-name strong { color: #0f9be7; font-weight: 700; }

        /* ── LOGOUT BUTTON ── */
        .nb-logout {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px;
          font-family: 'Oxanium', sans-serif;
          font-size: .72rem; font-weight: 600;
          letter-spacing: .07em; text-transform: uppercase;
          background: transparent;
          border: 1.5px solid #e4edf5;
          color: #7a8a98; cursor: pointer;
          transition: all .18s; white-space: nowrap;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        .nb-logout:hover {
          border-color: #ef4444; color: #ef4444;
          background: rgba(239,68,68,.05);
        }

        /* ── LOGIN LINK ── */
        .nb-login {
          font-family: 'Oxanium', sans-serif;
          font-size: .72rem; font-weight: 600;
          letter-spacing: .07em; text-transform: uppercase;
          color: #7a8a98; text-decoration: none;
          padding: 8px 16px;
          transition: color .18s; white-space: nowrap;
        }
        .nb-login:hover { color: #13181f; }

        /* ── REGISTER BUTTON (btn-p style) ── */
        .nb-register {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 22px;
          font-family: 'Oxanium', sans-serif;
          font-size: .72rem; font-weight: 700;
          letter-spacing: .07em; text-transform: uppercase;
          background: #0f9be7; color: #fff;
          text-decoration: none; border: none; cursor: pointer;
          position: relative; overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
          transition: background .2s, transform .2s, box-shadow .2s;
          flex-shrink: 0;
        }
        .nb-register::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .nb-register:hover::before { transform: translateX(100%); }
        .nb-register:hover {
          background: #0b87cc;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(15,155,231,.35);
        }

        /* ── MOBILE HAMBURGER ── */
        .nb-hamburger {
          display: none; align-items: center; justify-content: center;
          width: 36px; height: 36px;
          background: #e8f5fd; border: 1px solid rgba(15,155,231,.2);
          color: #0f9be7; cursor: pointer; transition: all .18s;
          flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
        }
        .nb-hamburger:hover { background: rgba(15,155,231,.15); }

        /* ── MOBILE DRAWER ── */
        .nb-drawer {
          display: none; flex-direction: column; gap: 2px;
          background: #fff; border-top: 1px solid #e4edf5;
          padding: 16px 20px 20px;
        }
        .nb-drawer-link {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase;
          color: #7a8a98; text-decoration: none;
          padding: 10px 14px;
          transition: color .15s, background .15s;
        }
        .nb-drawer-link:hover { color: #0f9be7; background: #e8f5fd; }
        .nb-drawer-divider { height: 1px; background: #e4edf5; margin: 8px 0; }
        .nb-drawer-actions { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }

        @media (max-width: 820px) {
          .nb-links, .nb-divider,
          .nb-user-chip, .nb-logout,
          .nb-login, .nb-register { display: none !important; }
          .nb-hamburger { display: flex !important; }
          .nb-drawer.open { display: flex; }
          .nb-inner { padding: 0 10px; }
        }
          @media (max-width: 820px) {
  .nb-logo-img {
    height: 50px;   /* ← mobile pe chhota */
  }
  .nb-inner {
    height: 54px;   /* ← navbar height bhi thodi kam karo */
    padding: 0 10px;
  }
}
      `}</style>

      <div className="nb">
        <div className="nb-inner">

          {/* Logo — flush left via margin-right: auto on .nb-logo */}
          <Link to="/" className="nb-logo">
            <img
              src={logo}
              alt="DIT Logo"
              className="nb-logo-img"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </Link>

          {/* Desktop nav links (now includes Register) */}
          <ul className="nb-links">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className={`nb-link${window.location.pathname === to ? ' active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="nb-divider" />

            {user ? (
              <>
                <Link to="/employer-dashboard" className="nb-user-chip">
                  <div className="nb-user-avatar">
                    <User size={12} color="#fff" />
                  </div>
                  <span className="nb-user-name">
                    Hi, <strong>{user.name}</strong>
                  </span>
                </Link>
                <button onClick={handleLogout} className="nb-logout">
                  <LogOut size={12} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nb-login">Login</Link>
                <Link to="/register" className="nb-register">
                  Get Started <ChevronRight size={12} />
                </Link>
              </>
            )}

            {/* Mobile hamburger */}
            <button
              className="nb-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`nb-drawer${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="nb-drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="nb-drawer-divider" />
          <div className="nb-drawer-actions">
            {user ? (
              <>
                <div className="nb-user-chip" style={{ justifyContent: 'flex-start' }}>
                  <div className="nb-user-avatar">
                    <User size={12} color="#fff" />
                  </div>
                  <span className="nb-user-name">Hi, <strong>{user.name}</strong></span>
                </div>
                <button onClick={handleLogout} className="nb-logout" style={{ width: '100%', justifyContent: 'center' }}>
                  <LogOut size={12} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nb-drawer-link" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link
                  to="/register"
                  className="nb-register"
                  style={{ justifyContent: 'center' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started <ChevronRight size={12} />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;