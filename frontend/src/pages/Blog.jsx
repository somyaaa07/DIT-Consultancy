import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const CATEGORIES = ['', 'Technology', 'Career', 'Interview Tips', 'Resume', 'Work Life', 'Other'];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = {};
      if (category) params.category = category;
      if (search)   params.search   = search;
      const res = await API.get('/blogs', { params });
      setBlogs(res.data.blogs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [category]);

  
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

        .blog-root * { box-sizing: border-box; }

        .blog-root {
          font-family: 'JetBrains Mono', monospace;
          background: var(--white);
          min-height: 100vh;
          color: var(--dark);
        }

        /* ── HERO ─────────────────────────────── */
        .b-hero {
          background: var(--dark);
          position: relative;
          overflow: hidden;
          padding: 64px 48px 52px;
          margin-bottom: 40px;
        }

     
        /* scan line */
        .b-hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
          animation: scanLine 4s ease-in-out infinite;
          pointer-events: none; z-index: 2;
        }
        @keyframes scanLine {
          0%  { transform: translateY(-100%); }
          100%{ transform: translateY(400%); }
        }

        .b-hero-inner {
          position: relative; z-index: 3;
          max-width: 640px; margin: 0 auto; text-align: center;
        }

        .b-hero-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; letter-spacing: .14em;
          text-transform: uppercase; color: var(--blue);
          margin-bottom: 18px;
        }
        .b-hero-label::before { content: '//'; opacity: .5; }

        .b-hero-blink {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue);
          animation: blinkDot 1.5s ease infinite;
          display: inline-block;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0} }

        .b-hero h1 {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800; letter-spacing: -.02em;
          line-height: 1.0; color: var(--white);
          margin: 0 0 16px;
        }

        .b-hero h1 span {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .b-hero p {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255,255,255,.45);
          font-size: .78rem; line-height: 1.8;
          margin: 0 0 32px;
        }

        /* Search inside hero */
        .b-search {
          display: flex;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
        }

        .b-search input {
          flex: 1; border: none; outline: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem; color: var(--white);
          padding: 15px 20px; background: transparent;
        }
        .b-search input::placeholder { color: rgba(255,255,255,.25); }
        .b-search input:focus { background: rgba(255,255,255,.02); }

        .b-search-btn {
          background: var(--blue); color: var(--white);
          font-family: 'Oxanium', sans-serif; font-weight: 700;
          font-size: .75rem; letter-spacing: .07em; text-transform: uppercase;
          border: none; cursor: pointer; padding: 15px 26px;
          transition: background .2s;
          display: flex; align-items: center; gap: 8px;
        }
        .b-search-btn:hover { background: var(--blue-hover); }

        /* corner decorator */
        .b-corner {
          position: absolute; width: 18px; height: 18px;
          border-color: var(--blue); border-style: solid; opacity: .4;
        }

        /* ── CATEGORY PILLS ───────────────────── */
        .b-cat-bar {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .b-cat-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; letter-spacing: .08em;
          text-transform: uppercase; font-weight: 600;
          padding: 8px 18px; border-radius: 3px;
          border: 1.5px solid var(--border);
          background: var(--white); color: var(--muted);
          cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
        }
        .b-cat-pill:hover {
          border-color: var(--blue); color: var(--blue);
          background: var(--light-blue);
        }
        .b-cat-pill.active {
          background: var(--dark); color: var(--blue);
          border-color: var(--dark);
        }

        /* ── BLOGS GRID ───────────────────────── */
        .b-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        /* ── BLOG CARD ────────────────────────── */
        .b-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden; cursor: pointer;
          transition: all .28s cubic-bezier(.23,1,.32,1);
          position: relative;
        }
        .b-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s;
        }
        .b-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px var(--blue-glow);
          border-color: rgba(15,155,231,.35);
        }
        .b-card:hover::after { transform: scaleX(1); }

        .b-card-img {
          width: 100%; height: 188px;
          object-fit: cover; display: block;
        }

        .b-card-placeholder {
          width: 100%; height: 188px;
          background: var(--dark);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .b-card-placeholder::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 40px 40px; opacity: .05;
        }
        .b-card-placeholder span {
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; letter-spacing: .14em;
          text-transform: uppercase; color: var(--blue);
          opacity: .7; position: relative; z-index: 1;
        }

        .b-card-body { padding: 22px 20px 18px; }

        .b-card-cat {
          display: inline-flex; align-items: center;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; letter-spacing: .1em;
          text-transform: uppercase; font-weight: 600;
          padding: 3px 11px; border-radius: 2px;
          border: 1px solid rgba(15,155,231,.2);
          margin-bottom: 12px;
        }

        .b-card-title {
          font-family: 'Oxanium', sans-serif;
          font-size: .95rem; font-weight: 700;
          color: var(--dark); letter-spacing: .01em;
          line-height: 1.35; margin: 0 0 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color .18s;
        }
        .b-card:hover .b-card-title { color: var(--blue); }

        .b-card-excerpt {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; color: var(--muted);
          line-height: 1.85; margin: 0 0 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3; -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .b-card-footer {
          display: flex; justify-content: space-between;
          align-items: center; padding-top: 14px;
          border-top: 1px solid var(--border);
        }

        .b-author {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Oxanium', sans-serif;
          font-size: .75rem; font-weight: 700; color: var(--dark);
        }
        .b-author-dot {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--dark); color: var(--blue);
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid rgba(15,155,231,.3);
        }

        .b-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--muted);
          letter-spacing: .05em;
        }

        /* ── STATES ───────────────────────────── */
        .b-state {
          text-align: center; padding: 80px 20px;
        }
        .b-state-icon { font-size: 44px; margin-bottom: 14px; }
        .b-state-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem; color: var(--muted);
          letter-spacing: .08em;
        }
        .b-state-text::before { content: '// '; color: var(--blue); }

        .b-loading {
          display: flex; justify-content: center;
          gap: 6px; padding: 80px 20px;
        }
        .b-loading span {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--blue);
          animation: ldot 1.2s ease-in-out infinite;
        }
        .b-loading span:nth-child(2) { animation-delay: .2s; }
        .b-loading span:nth-child(3) { animation-delay: .4s; }
        @keyframes ldot {
          0%,80%,100%{ transform:scale(.6); opacity:.35; }
          40%{ transform:scale(1); opacity:1; }
        }

        /* ── SECTION LABEL ────────────────────── */
        .b-section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; letter-spacing: .14em;
          text-transform: uppercase; color: var(--blue);
          margin-bottom: 24px;
        }
        .b-section-label::before { content: '//'; opacity: .5; }

        @media (max-width: 640px) {
          .b-hero { padding: 48px 20px 40px; }
          .b-search { flex-direction: column; }
        }
      `}</style>

      <div className="blog-root">
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '32px 20px' }}>

          {/* ── HERO ── */}
          <div className="b-hero">
        

            <div className="b-hero-inner">
              <div className="b-hero-label">
                <span className="b-hero-blink" />
                Insights &amp; Articles
              </div>
              <h1>Our <span>Blog</span></h1>
              <p>Career tips, interview advice &amp; much more</p>

              <div className="b-search">
                <input
                  type="text"
                  placeholder="Search articles…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && fetchBlogs()}
                />
                <button onClick={fetchBlogs} className="b-search-btn">
                  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* ── CATEGORY FILTER ── */}
          <div className="b-section-label">Filter by category</div>
          <div className="b-cat-bar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`b-cat-pill ${category === cat ? 'active' : ''}`}
              >
                {cat === '' ? 'All Posts' : cat}
              </button>
            ))}
          </div>

          {/* ── LOADING ── */}
          {loading && (
            <div className="b-loading">
              <span /><span /><span />
            </div>
          )}

          {/* ── EMPTY ── */}
          {!loading && blogs.length === 0 && (
            <div className="b-state">
              <div className="b-state-icon">📭</div>
              <p className="b-state-text">no articles found</p>
            </div>
          )}

          {/* ── GRID ── */}
          {!loading && blogs.length > 0 && (
            <div className="b-grid">
              {blogs.map(blog => (
                <div
                  key={blog.id}
                  className="b-card"
                  onClick={() => navigate(`/blogs/${blog.id}`)}
                >
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} className="b-card-img" />
                  ) : (
                    <div className="b-card-placeholder">
                      <span>{blog.category || 'article'}</span>
                    </div>
                  )}

                  <div className="b-card-body">
                    <span className="b-card-cat">{blog.category}</span>
                    <h2 className="b-card-title">{blog.title}</h2>
                    {blog.excerpt && (
                      <p className="b-card-excerpt">{blog.excerpt}</p>
                    )}
                    <div className="b-card-footer">
                      <div className="b-author">
                        <div className="b-author-dot">
                          {blog.author?.charAt(0)?.toUpperCase() || 'A'}
                        </div>
                        {blog.author}
                      </div>
                      <span className="b-date">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Blogs;