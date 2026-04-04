import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';
import { useAuth } from '../context/AuthContext';

/* ─── Google Fonts – add to your index.html <head> ───────────────────────────
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
   <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
──────────────────────────────────────────────────────────────────────────────*/

// ─── Inline styles (no Tailwind dependency) ──────────────────────────────────

const styles = {
  root: {
    fontFamily: "'Oxanium', sans-serif",
    background: '#ffffff',
    minHeight: '100vh',
    padding: '24px 16px',
  },
  inner: {
    maxWidth: '820px',
    margin: '0 auto',
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#0f9be7',
    fontSize: '13px',
    fontFamily: "'JetBrains Mono', monospace",
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '0.02em',
    marginBottom: '20px',
    padding: 0,
  },
  card: {
    background: '#ffffff',
    border: '1.5px solid #e8f4fd',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 0 0 1px rgba(15,155,231,0.07)',
  },

  // ── Header (dark band) ──────────────────────────────────────────────────────
  header: {
    background: '#13181f',
    padding: '28px 32px 24px',
    borderBottom: '2px solid #0f9be7',
  },
  companyRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: "'JetBrains Mono', monospace",
    color: '#0f9be7',
    fontSize: '12px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  companyDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#0f9be7',
    flexShrink: 0,
  },
  jobTitle: {
    fontFamily: "'Oxanium', sans-serif",
    color: '#ffffff',
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '16px',
    letterSpacing: '-0.01em',
  },
  tagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
  },
  tag: (color, bg, border) => ({
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    fontWeight: 500,
    padding: '4px 12px',
    borderRadius: '20px',
    letterSpacing: '0.04em',
    border: `1px solid ${border}`,
    color,
    background: bg,
  }),
  metaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '12px',
  },
  metaLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    color: 'rgba(255,255,255,0.35)',
    fontSize: '10px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  metaValue: {
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },

  // ── Body ────────────────────────────────────────────────────────────────────
  body: {
    padding: '28px 32px',
  },
  section: {
    marginBottom: '28px',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: "'Oxanium', sans-serif",
    color: '#13181f',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.02em',
    marginBottom: '12px',
  },
  sectionAccent: {
    width: '3px',
    height: '16px',
    background: '#0f9be7',
    borderRadius: '2px',
    flexShrink: 0,
  },
  description: {
    color: '#4a5568',
    fontSize: '14px',
    lineHeight: 1.75,
    fontFamily: "'JetBrains Mono', monospace",
    whiteSpace: 'pre-line',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #edf2f7',
    margin: '0 0 24px',
  },
  skillsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  skillChip: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px',
    color: '#13181f',
    fontWeight: 500,
    background: '#f0f8ff',
    border: '1px solid rgba(15,155,231,0.25)',
    padding: '5px 12px',
    borderRadius: '6px',
    letterSpacing: '0.02em',
  },

  // ── Alerts ──────────────────────────────────────────────────────────────────
  alertSuccess: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    borderRadius: '10px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '13px',
    marginBottom: '16px',
    background: 'rgba(79,209,165,0.1)',
    color: '#1a7a5e',
    border: '1px solid rgba(79,209,165,0.3)',
  },
  alertError: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    borderRadius: '10px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '13px',
    marginBottom: '16px',
    background: 'rgba(239,68,68,0.08)',
    color: '#b91c1c',
    border: '1px solid rgba(239,68,68,0.2)',
  },

  // ── CTA buttons ─────────────────────────────────────────────────────────────
  applyBtn: {
    width: '100%',
    background: '#0f9be7',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '16px',
    fontFamily: "'Oxanium', sans-serif",
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '0.04em',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'opacity 0.2s',
  },
  loginBtn: {
    width: '100%',
    background: '#13181f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '16px',
    fontFamily: "'Oxanium', sans-serif",
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '0.04em',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },

  // ── Cover letter form ────────────────────────────────────────────────────────
  formLabel: {
    display: 'block',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    color: '#718096',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  textarea: {
    width: '100%',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    padding: '14px 16px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '13px',
    color: '#13181f',
    resize: 'none',
    outline: 'none',
    background: '#fafbfc',
    lineHeight: 1.6,
    marginBottom: '16px',
    boxSizing: 'border-box',
  },
  btnRow: {
    display: 'flex',
    gap: '10px',
  },
  submitBtn: {
    flex: 1,
    background: '#0f9be7',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 20px',
    fontFamily: "'Oxanium', sans-serif",
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: '0.03em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    opacity: 1,
    transition: 'opacity 0.2s',
  },
  submitBtnDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  cancelBtn: {
    padding: '14px 20px',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    background: '#ffffff',
    color: '#4a5568',
    fontFamily: "'Oxanium', sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  // ── Loading / not found ──────────────────────────────────────────────────────
  centered: {
    textAlign: 'center',
    padding: '80px 0',
    color: '#718096',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '14px',
    letterSpacing: '0.04em',
  },
};

// ─── Small SVG icons ─────────────────────────────────────────────────────────

const IconArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 12L6 8l4-4" />
  </svg>
);

const IconLocation = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#0f9be7" strokeWidth="2">
    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5z" />
    <circle cx="8" cy="6" r="1.5" />
  </svg>
);

const IconSalary = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#0f9be7" strokeWidth="2">
    <circle cx="8" cy="8" r="6.5" />
    <path d="M5.5 9.5C5.5 10.6 6.6 11.5 8 11.5s2.5-.9 2.5-2c0-2.5-5-1.5-5-4 0-1.1 1.1-2 2.5-2s2.5.9 2.5 2M8 4.5v1M8 11.5v1" />
  </svg>
);

const IconExp = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#0f9be7" strokeWidth="2">
    <rect x="2" y="4.5" width="12" height="9" rx="1.5" />
    <path d="M5.5 4.5V3.5a1 1 0 011-1h3a1 1 0 011 1v1M2 8.5h12" />
  </svg>
);

const IconCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#0f9be7" strokeWidth="2">
    <rect x="2" y="2.5" width="12" height="11" rx="1.5" />
    <path d="M5 1.5v2M11 1.5v2M2 6.5h12" />
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="8" cy="8" r="6.5" />
    <path d="M5 8l2.5 2.5L11 5.5" />
  </svg>
);

const IconSend = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2">
    <path d="M2 8h12M9 4l4 4-4 4" />
  </svg>
);

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2">
    <rect x="3.5" y="7" width="9" height="7.5" rx="1.5" />
    <path d="M5 7V5.5a3 3 0 016 0V7" />
  </svg>
);


// ─── Component ────────────────────────────────────────────────────────────────

const JobDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [job, setJob]           = useState(null);
  const [loading, setLoading]   = useState(true);
  const [applying, setApplying] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [message, setMessage]   = useState('');
  const [error, setError]       = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await API.get(`/jobs/${id}`);
        setJob(res.data.job);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleApply = async (e) => {
    e.preventDefault();
    if (!user) return navigate('/login');

    setApplying(true);
    setError('');
    try {
      await API.post('/applications', {
        job_id: id,
        cover_letter: coverLetter,
      });
      setMessage('Application submitted successfully! We will be in touch soon.');
      setShowForm(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setApplying(false);
    }
  };

  if (loading) return (
    <div style={styles.root}>
      <div style={styles.centered}>Loading job details…</div>
    </div>
  );

  if (!job) return (
    <div style={styles.root}>
      <div style={styles.centered}>Job not found.</div>
    </div>
  );
  

  return (
    <div style={styles.root}>
      <div style={styles.inner}>

        {/* ── Back button ── */}
        <button style={styles.backBtn} onClick={() => navigate('/')}>
          <IconArrowLeft />
          Back to Jobs
        </button>

        <div style={styles.card}>

          {/* ══ HEADER ══ */}
          <div style={styles.header}>

            {/* Company name */}
            <div style={styles.companyRow}>
              <div style={styles.companyDot} />
              {job.company?.name}
            </div>

            {/* Job title */}
            <h1 style={styles.jobTitle}>{job.title}</h1>

            {/* Tags */}
            <div style={styles.tagsRow}>
              <span style={styles.tag('#0f9be7', 'rgba(15,155,231,0.1)', 'rgba(15,155,231,0.4)')}>
                {job.job_type}
              </span>
              <span style={styles.tag('#4fd1a5', 'rgba(79,209,165,0.08)', 'rgba(79,209,165,0.4)')}>
                {job.category}
              </span>
              <span style={styles.tag('#f0a050', 'rgba(240,160,80,0.08)', 'rgba(240,160,80,0.4)')}>
                {job.openings} Opening{job.openings > 1 ? 's' : ''}
              </span>
            </div>

            {/* Meta grid */}
            <div style={styles.metaGrid}>
              {job.location && (
                <div>
                  <div style={styles.metaLabel}>Location</div>
                  <div style={styles.metaValue}>
                    <IconLocation />
                    {job.location}
                  </div>
                </div>
              )}

              {job.salary_min && (
                <div>
                  <div style={styles.metaLabel}>Salary</div>
                  <div style={styles.metaValue}>
                    <IconSalary />
                    ₹{(job.salary_min / 100000).toFixed(1)}L – ₹{(job.salary_max / 100000).toFixed(1)}L
                  </div>
                </div>
              )}

              <div>
                <div style={styles.metaLabel}>Experience</div>
                <div style={styles.metaValue}>
                  <IconExp />
                  {job.experience_min}–{job.experience_max} Years
                </div>
              </div>

              {job.deadline && (
                <div>
                  <div style={styles.metaLabel}>Deadline</div>
                  <div style={styles.metaValue}>
                    <IconCalendar />
                    {new Date(job.deadline).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'short', year: 'numeric'
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ══ BODY ══ */}
          <div style={styles.body}>

            {/* Description */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>
                <div style={styles.sectionAccent} />
                Job Description
              </div>
              <p style={styles.description}>{job.description}</p>
            </div>

            {/* Skills */}
            {job.skills_required?.length > 0 && (
              <>
                <hr style={styles.divider} />
                <div style={styles.section}>
                  <div style={styles.sectionTitle}>
                    <div style={styles.sectionAccent} />
                    Required Skills
                  </div>
                  <div style={styles.skillsRow}>
                    {job.skills_required.map((skill, i) => (
                      <span key={i} style={styles.skillChip}>{skill}</span>
                    ))}
                  </div>
                </div>
              </>
            )}

            <hr style={styles.divider} />

            {/* Success alert */}
            {message && (
              <div style={styles.alertSuccess}>
                <IconCheck />
                {message}
              </div>
            )}

            {/* Error alert */}
            {error && (
              <div style={styles.alertError}>
                {error}
              </div>
            )}

            {/* ── Apply section (jobseeker only) ── */}
            {user?.role === 'jobseeker' && !message && (
              <>
                {!showForm ? (
                  <button
                    style={styles.applyBtn}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    onClick={() => setShowForm(true)}
                  >
                    <IconSend />
                    Apply Now
                  </button>
                ) : (
                  <div>
                    <div style={{ ...styles.sectionTitle, marginBottom: '14px' }}>
                      <div style={styles.sectionAccent} />
                      Cover Letter
                    </div>
                    <label style={styles.formLabel}>
                      Tell us why you are the best fit for this role
                    </label>
                    <textarea
                      value={coverLetter}
                      onChange={e => setCoverLetter(e.target.value)}
                      placeholder="Describe your relevant experience, what excites you about this role, and what you would bring to the team..."
                      rows={5}
                      style={styles.textarea}
                      onFocus={e => { e.target.style.borderColor = '#0f9be7'; e.target.style.background = '#fff'; }}
                      onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.background = '#fafbfc'; }}
                    />
                    <div style={styles.btnRow}>
                      <button
                        onClick={handleApply}
                        disabled={applying}
                        style={{
                          ...styles.submitBtn,
                          ...(applying ? styles.submitBtnDisabled : {}),
                        }}
                      >
                        <IconCheck />
                        {applying ? 'Submitting…' : 'Submit Application'}
                      </button>
                      <button
                        onClick={() => setShowForm(false)}
                        style={styles.cancelBtn}
                        onMouseEnter={e => { e.currentTarget.style.background = '#f7fafc'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ── Login CTA (unauthenticated) ── */}
            {!user && (
              <button
                style={styles.loginBtn}
                onClick={() => navigate('/login')}
              >
                <IconLock />
                Log In to Apply
              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;