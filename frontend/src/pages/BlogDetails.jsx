import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/${id}`);
        setBlog(res.data.blog);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return (
    <>
      <style>{baseStyles}</style>
      <div className="bd-root">
        <div className="bd-loading"><span /><span /><span /></div>
      </div>
    </>
  );

  if (!blog) return (
    <>
      <style>{baseStyles}</style>
      <div className="bd-root">
        <div className="bd-container">
          <div className="bd-state">
            <div className="bd-state-icon">📭</div>
            <p className="bd-state-text">article not found</p>
            <button className="bd-back-btn" onClick={() => navigate('/blogs')}>
              ← Back to Blogs
            </button>
          </div>
        </div>
      </div>
    </>
  );
  

  return (
    <>
      <style>{baseStyles}</style>
      <div className="bd-root">
        <div className="bd-container">

          {/* Back */}
          <button className="bd-back-btn" onClick={() => navigate('/blogs')}>
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </button>

          {/* Article card */}
          <div className="bd-card">

            {/* Hero image / placeholder */}
            {blog.image ? (
              <img src={blog.image} alt={blog.title} className="bd-img" />
            ) : (
              <div className="bd-img-placeholder">
                <div className="bd-img-scan" />
                <div className="bd-corner" style={{ top: 16, left: 16, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 0, borderBottomWidth: 0 }} />
                <div className="bd-corner" style={{ top: 16, right: 16, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 0, borderBottomWidth: 0 }} />
                <span>{blog.category || 'article'}</span>
              </div>
            )}

            <div className="bd-body">

              {/* Meta top row */}
              <div className="bd-meta-top">
                <span className="bd-cat">{blog.category}</span>
                <span className="bd-date">
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                  })}
                </span>
              </div>

              {/* Title */}
              <h1 className="bd-title">{blog.title}</h1>

              {/* Author */}
              <div className="bd-author-row">
                <div className="bd-avatar">
                  {blog.author?.charAt(0)?.toUpperCase() || 'A'}
                </div>
                <div>
                  <p className="bd-author-name">{blog.author}</p>
                  <p className="bd-author-label">// author</p>
                </div>
              </div>

              {/* Divider */}
              <div className="bd-divider" />

              {/* Content */}
              <div className="bd-content">
                {blog.content}
              </div>

            </div>
          </div>

          {/* Footer nav */}
          <div className="bd-footer-nav">
            <button className="bd-back-btn" onClick={() => navigate('/blogs')}>
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </button>
            <span className="bd-end-label">// end_of_article</span>
          </div>

        </div>
      </div>
    </>
  );
};

const baseStyles = `
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

  .bd-root * { box-sizing: border-box; }

  .bd-root {
    font-family: 'JetBrains Mono', monospace;
    background: var(--mid);
    min-height: 100vh;
    color: var(--dark);
  }

  .bd-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 40px 20px 72px;
  }

  /* ── BACK BUTTON ── */
  .bd-back-btn {
    display: inline-flex; align-items: center; gap: 7px;
    font-family: 'JetBrains Mono', monospace;
    font-size: .68rem; font-weight: 600;
    letter-spacing: .06em; text-transform: uppercase;
    color: var(--blue); background: transparent;
    border: 1.5px solid rgba(15,155,231,.3);
    border-radius: 3px; padding: 9px 18px;
    cursor: pointer; margin-bottom: 28px;
    transition: background .2s, border-color .2s;
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
  }
  .bd-back-btn:hover {
    background: var(--light-blue);
    border-color: var(--blue);
  }

  /* ── ARTICLE CARD ── */
  .bd-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }
  .bd-card::after {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 3px; background: var(--blue);
  }

  .bd-img {
    width: 100%; height: 320px;
    object-fit: cover; display: block;
  }

  /* placeholder */
  .bd-img-placeholder {
    width: 100%; height: 220px;
    background: var(--dark);
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .bd-img-placeholder::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
    background-size: 60px 60px; opacity: .04;
  }
  .bd-img-scan {
    position: absolute; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
    animation: scanLine 4s ease-in-out infinite;
    pointer-events: none; z-index: 2;
  }
  @keyframes scanLine {
    0%  { transform: translateY(-100%); }
    100%{ transform: translateY(400%); }
  }
  .bd-img-placeholder span {
    font-family: 'JetBrains Mono', monospace;
    font-size: .65rem; letter-spacing: .14em;
    text-transform: uppercase; color: var(--blue);
    opacity: .7; position: relative; z-index: 3;
  }
  .bd-corner {
    position: absolute; width: 16px; height: 16px;
    border-color: var(--blue); border-style: solid; opacity: .4;
    z-index: 3;
  }

  /* ── BODY ── */
  .bd-body { padding: 40px 44px 52px; }

  .bd-meta-top {
    display: flex; align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 10px;
    margin-bottom: 20px;
  }

  .bd-cat {
    display: inline-flex; align-items: center;
    background: var(--light-blue); color: var(--blue);
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; letter-spacing: .1em;
    text-transform: uppercase; font-weight: 600;
    padding: 3px 12px; border-radius: 2px;
    border: 1px solid rgba(15,155,231,.2);
  }

  .bd-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: .63rem; color: var(--muted);
    letter-spacing: .05em;
  }

  .bd-title {
    font-family: 'Oxanium', sans-serif;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 800; letter-spacing: -.02em;
    line-height: 1.1; color: var(--dark);
    margin: 0 0 28px;
  }

  /* ── AUTHOR ── */
  .bd-author-row {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 28px;
  }

  .bd-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--dark); color: var(--blue);
    font-family: 'JetBrains Mono', monospace;
    font-size: .8rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    border: 2px solid rgba(15,155,231,.3);
  }

  .bd-author-name {
    font-family: 'Oxanium', sans-serif;
    font-size: .85rem; font-weight: 700;
    color: var(--dark); margin: 0 0 3px;
  }

  .bd-author-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; letter-spacing: .1em;
    color: var(--blue); margin: 0;
  }

  /* ── DIVIDER ── */
  .bd-divider {
    height: 1px;
    background: linear-gradient(to right, rgba(15,155,231,.4), var(--border), transparent);
    margin-bottom: 36px;
  }

  /* ── CONTENT ── */
  .bd-content {
    font-family: 'JetBrains Mono', monospace;
    font-size: .82rem; line-height: 2.0;
    color: #2a3340; white-space: pre-line;
  }

  /* ── FOOTER NAV ── */
  .bd-footer-nav {
    display: flex; align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 12px;
    margin-top: 36px;
  }
  .bd-footer-nav .bd-back-btn { margin-bottom: 0; }

  .bd-end-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; color: var(--muted);
    letter-spacing: .1em;
  }

  /* ── LOADING ── */
  .bd-loading {
    display: flex; justify-content: center;
    gap: 6px; padding: 120px 20px;
  }
  .bd-loading span {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--blue);
    animation: ldot 1.2s ease-in-out infinite;
  }
  .bd-loading span:nth-child(2) { animation-delay: .2s; }
  .bd-loading span:nth-child(3) { animation-delay: .4s; }
  @keyframes ldot {
    0%,80%,100%{ transform:scale(.6); opacity:.35; }
    40%{ transform:scale(1); opacity:1; }
  }

  /* ── STATE ── */
  .bd-state {
    text-align: center; padding: 100px 20px;
  }
  .bd-state-icon { font-size: 44px; margin-bottom: 14px; }
  .bd-state-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: .8rem; color: var(--muted);
    letter-spacing: .08em; margin-bottom: 28px;
  }
  .bd-state-text::before { content: '// '; color: var(--blue); }

  @media (max-width: 600px) {
    .bd-body { padding: 28px 20px 36px; }
    .bd-title { font-size: 1.5rem; }
  }
`;

export default BlogDetail;