import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const params = {};
      if (search)   params.search   = search;
      if (category) params.category = category;
      if (jobType)  params.job_type = jobType;
      const res = await API.get('/jobs', { params });
      setJobs(res.data.jobs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchJobs(); }, [category, jobType]);

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
          --blue-glow:  rgba(15,155,231,.12);
        }

        .home-wrap * { box-sizing: border-box; }

        .home-wrap {
          font-family: 'JetBrains Mono', monospace;
          background: var(--white);
          min-height: 100vh;
          color: var(--dark);
        }

        /* ── HERO ── */
        .h-hero {
          background: var(--dark);
          position: relative; overflow: hidden;
          padding: 80px 24px 0;
          text-align: center;
        }

        .h-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 60px 60px; opacity: .04;
          pointer-events: none;
        }
        .h-hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
          animation: hScan 4s ease-in-out infinite;
          pointer-events: none; z-index: 2;
        }
        @keyframes hScan {
          0%  { transform: translateY(-100%); }
          100%{ transform: translateY(3000%); }
        }
        .h-hero-corner {
          position: absolute; width: 16px; height: 16px;
          border-color: var(--blue); border-style: solid; opacity: .3; z-index: 3;
        }

        .h-hero-inner {
          position: relative; z-index: 4;
          max-width: 680px; margin: 0 auto; padding-bottom: 60px;
        }

        .h-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(15,155,231,.1);
          border: 1px solid rgba(15,155,231,.3);
          padding: 5px 14px; margin-bottom: 24px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--blue);
          letter-spacing: .1em; text-transform: uppercase;
        }
        .h-hero-blink {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue);
          animation: blinkDot 1.5s ease infinite; display: inline-block;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0} }

        .h-hero h1 {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800; letter-spacing: -.02em;
          line-height: 1.0; color: var(--white); margin: 0 0 18px;
        }
        .h-hero h1 em {
          font-style: normal;
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .h-hero-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: .78rem; color: rgba(255,255,255,.38);
          line-height: 1.8; margin: 0 0 36px;
          letter-spacing: .02em;
        }

        /* search */
        .h-search {
          display: flex;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
          margin-bottom: 36px;
        }
        .h-search input {
          flex: 1; border: none; outline: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem; color: var(--white);
          padding: 15px 20px; background: transparent;
        }
        .h-search input::placeholder { color: rgba(255,255,255,.22); }
        .h-search input:focus { background: rgba(255,255,255,.03); }
        .h-search-btn {
          background: var(--blue); color: var(--white);
          font-family: 'Oxanium', sans-serif; font-weight: 700;
          font-size: .75rem; letter-spacing: .07em; text-transform: uppercase;
          border: none; cursor: pointer; padding: 15px 26px;
          display: flex; align-items: center; gap: 8px;
          transition: background .2s;
        }
        .h-search-btn:hover { background: var(--blue-hover); }

        /* stat bar */
        .h-stat-bar {
          background: var(--blue); position: relative;
        }
        .h-stat-bar::before {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            90deg, transparent, transparent 80px,
            rgba(255,255,255,.05) 80px, rgba(255,255,255,.05) 81px
          );
        }
        .h-stat-bar-inner {
          max-width: 900px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3,1fr);
        }
        .h-stat-item {
          padding: 22px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,.18);
        }
        .h-stat-item:last-child { border-right: none; }
        .h-stat-num {
          font-family: 'Oxanium', sans-serif;
          font-size: 1.8rem; font-weight: 800;
          color: var(--white); line-height: 1.1;
        }
        .h-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .58rem; color: rgba(255,255,255,.6);
          letter-spacing: .1em; text-transform: uppercase; margin-top: 4px;
        }

        /* ── BODY ── */
        .h-body {
          max-width: 1200px; margin: 0 auto; padding: 40px 24px 80px;
        }

        /* ── FILTER ROW ── */
        .h-filters {
          display: flex; gap: 10px; margin-bottom: 32px;
          flex-wrap: wrap; align-items: center;
        }
        .h-filter-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--muted);
          letter-spacing: .1em; text-transform: uppercase;
        }
        .h-filter-label::before { content: '// '; color: var(--blue); opacity: .6; }

        .h-select {
          padding: 9px 34px 9px 14px;
          border: 1.5px solid var(--border);
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; color: var(--dark);
          background: var(--white); outline: none; cursor: pointer;
          transition: border-color .2s, box-shadow .2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%237a8a98' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 11px center;
          clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
        }
        .h-select:focus { border-color: var(--blue); box-shadow: 0 0 0 4px rgba(15,155,231,.08); }
        .h-select.active { border-color: var(--blue); background-color: var(--light-blue); color: var(--blue); }

        .h-reset-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 16px;
          border: 1.5px solid rgba(239,68,68,.3);
          background: rgba(239,68,68,.05); color: #ef4444;
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; letter-spacing: .06em; text-transform: uppercase;
          cursor: pointer; transition: background .2s;
        }
        .h-reset-btn:hover { background: rgba(239,68,68,.1); }

        /* ── SECTION HEADER ── */
        .h-section-head {
          display: flex; align-items: baseline;
          justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 10px;
        }
        .h-section-title {
          font-family: 'Oxanium', sans-serif;
          font-size: 1.3rem; font-weight: 800; color: var(--dark); letter-spacing: -.01em;
        }
        .h-count {
          display: inline-flex; align-items: center;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; font-weight: 600; letter-spacing: .06em;
          padding: 4px 12px; border: 1px solid rgba(15,155,231,.2);
        }

        /* ── LOADING ── */
        .h-loading {
          display: flex; justify-content: center; gap: 6px; padding: 80px 0;
        }
        .h-loading span {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--blue);
          animation: ldot 1.2s ease-in-out infinite;
        }
        .h-loading span:nth-child(2) { animation-delay: .2s; }
        .h-loading span:nth-child(3) { animation-delay: .4s; }
        @keyframes ldot {
          0%,80%,100%{ transform:scale(.6); opacity:.35; }
          40%{ transform:scale(1); opacity:1; }
        }

        /* ── EMPTY ── */
        .h-empty {
          text-align: center; padding: 72px 0;
        }
        .h-empty-icon {
          width: 64px; height: 64px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin: 0 auto 18px;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }
        .h-empty h3 {
          font-family: 'Oxanium', sans-serif;
          font-size: 1.1rem; font-weight: 800; color: var(--dark); margin-bottom: 8px;
        }
        .h-empty p {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; color: var(--muted);
        }
        .h-empty p::before { content: '// '; color: var(--blue); opacity: .6; }

        /* ── GRID ── */
        .h-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 18px;
        }

        /* ── JOB CARD ── */
        .h-card {
          background: var(--white);
          border: 1px solid var(--border);
          padding: 22px;
          cursor: pointer;
          transition: all .28s cubic-bezier(.23,1,.32,1);
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
        }
        .h-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 2px;
          background: var(--blue); transform: scaleX(0);
          transform-origin: left; transition: transform .3s;
        }
        .h-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px var(--blue-glow);
          border-color: rgba(15,155,231,.35);
        }
        .h-card:hover::after { transform: scaleX(1); }
        .h-card:hover .h-card-title { color: var(--blue); }

        .h-card-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; margin-bottom: 16px;
        }

        /* company logo */
        .h-logo {
          width: 42px; height: 42px;
          background: var(--dark); color: var(--blue);
          font-family: 'Oxanium', sans-serif; font-weight: 800; font-size: 1rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }

        .h-card-badges { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
        .h-badge {
          display: inline-flex; align-items: center;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace;
          font-size: .58rem; letter-spacing: .08em; text-transform: uppercase; font-weight: 600;
          padding: 3px 10px; border-radius: 2px;
          border: 1px solid rgba(15,155,231,.2);
        }
        .h-badge-neutral {
          background: var(--mid); color: var(--muted);
          border-color: var(--border);
        }

        .h-company-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; color: var(--muted);
          letter-spacing: .06em; text-transform: uppercase; margin-bottom: 6px;
        }
        .h-card-title {
          font-family: 'Oxanium', sans-serif;
          font-size: 1rem; font-weight: 800;
          color: var(--dark); line-height: 1.25;
          margin: 0 0 16px; letter-spacing: -.01em;
          transition: color .18s;
        }

        .h-meta { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
        .h-meta-item {
          display: flex; align-items: center; gap: 9px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
        }
        .h-meta-icon {
          width: 20px; height: 20px;
          background: var(--mid); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; flex-shrink: 0;
        }

        .h-divider { height: 1px; background: var(--border); margin-bottom: 16px; }

        .h-view-btn {
          width: 100%; padding: 12px;
          background: var(--dark); color: var(--white);
          font-family: 'Oxanium', sans-serif; font-weight: 700;
          font-size: .78rem; letter-spacing: .07em; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: background .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .h-view-btn:hover { background: var(--blue); }

        @media (max-width: 640px) {
          .h-hero { padding: 56px 20px 0; }
          .h-search { flex-direction: column; }
          .h-search-btn { justify-content: center; }
          .h-stat-bar-inner { grid-template-columns: repeat(3,1fr); }
          .h-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="home-wrap">

        {/* ── HERO ── */}
        <section className="h-hero">

     
          <div className="h-hero-inner">
            <div className="h-hero-badge">
              <span className="h-hero-blink" />
              10,000+ Opportunities Waiting
            </div>
            <h1>
              Find Your <em>Dream Job</em><br />— All in One Place
            </h1>
            <p className="h-hero-sub">
              Thousands of top companies. One seamless search experience.
            </p>
            <div className="h-search">
              <input
                type="text"
                placeholder="Job title, skill, or company…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && fetchJobs()}
              />
              <button className="h-search-btn" onClick={fetchJobs}>
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2.5" />
                  <path d="m21 21-4.35-4.35" strokeWidth="2.5" />
                </svg>
                Search
              </button>
            </div>
          </div>

          
        </section>

        {/* ── BODY ── */}
        <div className="h-body">

          {/* Filters */}
          <div className="h-filters">
            <span className="h-filter-label">Filter by</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`h-select ${category ? 'active' : ''}`}
            >
              <option value="">All Categories</option>
              {['Software Development','Data Science','Design','Marketing','Sales','HR','Finance','Consulting','Other'].map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className={`h-select ${jobType ? 'active' : ''}`}
            >
              <option value="">All Types</option>
              {['Full-time','Part-time','Contract','Internship','Remote'].map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {(category || jobType || search) && (
              <button className="h-reset-btn" onClick={() => { setSearch(''); setCategory(''); setJobType(''); }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                Clear
              </button>
            )}
          </div>

          {/* Section header */}
          <div className="h-section-head">
            <h2 className="h-section-title">
              {category || jobType || search ? 'Search Results' : 'Latest Openings'}
            </h2>
            {!loading && (
              <span className="h-count">
                {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'} found
              </span>
            )}
          </div>

          {/* Loading */}
          {loading && (
            <div className="h-loading">
              <span /><span /><span />
            </div>
          )}

          {/* Empty */}
          {!loading && jobs.length === 0 && (
            <div className="h-empty">
              <div className="h-empty-icon">🔍</div>
              <h3>No jobs found</h3>
              <p>try adjusting your filters or search with different keywords</p>
            </div>
          )}

          {/* Grid */}
          {!loading && jobs.length > 0 && (
            <div className="h-grid">
              {jobs.map((job) => (
                <div key={job.id} className="h-card" onClick={() => navigate(`/jobs/${job.id}`)}>
                  <div className="h-card-top">
                    <div className="h-logo">
                      {(job.company?.name || 'C').slice(0,1).toUpperCase()}
                    </div>
                    <div className="h-card-badges">
                      <span className="h-badge">{job.job_type}</span>
                      <span className="h-badge h-badge-neutral">{job.category}</span>
                    </div>
                  </div>

                  <p className="h-company-name">{job.company?.name || 'Company'}</p>
                  <h3 className="h-card-title">{job.title}</h3>

                  <div className="h-meta">
                    {job.location && (
                      <div className="h-meta-item">
                        <span className="h-meta-icon">📍</span>
                        {job.location}
                      </div>
                    )}
                    {job.salary_min && (
                      <div className="h-meta-item">
                        <span className="h-meta-icon">₹</span>
                        ₹{(job.salary_min/100000).toFixed(1)}L – ₹{(job.salary_max/100000).toFixed(1)}L per annum
                      </div>
                    )}
                    <div className="h-meta-item">
                      <span className="h-meta-icon">◎</span>
                      {job.experience_min}–{job.experience_max} years experience
                    </div>
                  </div>

                  <div className="h-divider" />
                  <button className="h-view-btn">View Details →</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;