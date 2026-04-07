import { useState, useEffect } from 'react';
import {
  Briefcase, Users, FileText, Building2,
  CheckCircle, AlertTriangle, ArrowRight,
  MapPin, Clock, Trash2, Eye, ChevronRight,
  Mail, Inbox, PenLine, Loader2
} from 'lucide-react';
import API from '../api';

const DIT_STYLES = `
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
    --blue-glow:  rgba(15,155,231,.15);
  }

  .emp-dashboard * { box-sizing: border-box; }

  .emp-dashboard {
    font-family: 'JetBrains Mono', monospace;
    background: var(--mid);
    min-height: 100vh;
    color: var(--dark);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scanLine {
    0%  { transform: translateY(-100%); }
    100%{ transform: translateY(3000%); }
  }
  @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes shimmer  { 0%{background-position:0%} 100%{background-position:200%} }
  @keyframes ldot {
    0%,80%,100%{ transform:scale(.6); opacity:.35; }
    40%{ transform:scale(1); opacity:1; }
  }
  @keyframes skelAnim {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }

  .anim-fadein { animation: fadeUp .45s cubic-bezier(.22,.68,0,1.2) both; }

  /* ── HEADER BANNER ── */
  .emp-header {
    background: var(--dark);
    position: relative; overflow: hidden;
    padding: 40px 0 0;
    margin-bottom: 32px;
  }
  .emp-header-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
    background-size: 60px 60px; opacity: .04; pointer-events: none;
  }
  .emp-header-scan {
    position: absolute; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
    animation: scanLine 4s ease-in-out infinite;
    pointer-events: none; z-index: 2;
  }
  .emp-header-corner {
    position: absolute; width: 16px; height: 16px;
    border-color: var(--blue); border-style: solid; opacity: .35; z-index: 3;
  }
  .emp-header-inner {
    position: relative; z-index: 4;
    max-width: 1140px; margin: 0 auto; padding: 0 28px 32px;
    display: flex; align-items: flex-end; justify-content: space-between;
    flex-wrap: wrap; gap: 20px;
  }
  .emp-header-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; letter-spacing: .14em; text-transform: uppercase;
    color: var(--blue); margin-bottom: 10px;
  }
  .emp-header-label::before { content: '//'; opacity: .5; }
  .emp-header-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--blue); animation: blinkDot 1.5s ease infinite;
  }
  .emp-header h1 {
    font-family: 'Oxanium', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800; letter-spacing: -.02em;
    color: var(--white); margin: 0;
    line-height: 1.05;
  }
  .emp-header h1 span {
    background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
    background-size: 200% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text; animation: shimmer 3s linear infinite;
  }
  .emp-company-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: .68rem; color: rgba(255,255,255,.38);
    letter-spacing: .06em; margin-top: 6px;
  }

  /* tabs bar inside header */
  .emp-tabs {
    display: flex; gap: 3px;
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.08);
    padding: 4px; position: relative; z-index: 4;
    align-self: flex-end;
  }
  .emp-tab {
    padding: 9px 22px;
    border: 1.5px solid transparent;
    font-family: 'Oxanium', sans-serif;
    font-size: .75rem; font-weight: 700;
    letter-spacing: .05em; text-transform: uppercase;
    cursor: pointer; transition: all .2s;
    background: transparent; color: rgba(255,255,255,.4);
    clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
    display: inline-flex; align-items: center; gap: 7px;
  }
  .emp-tab.active {
    background: var(--blue); color: var(--white);
    border-color: var(--blue);
  }
  .emp-tab:not(.active):hover {
    color: rgba(255,255,255,.75);
    background: rgba(255,255,255,.06);
  }

  /* ── MAIN CONTENT AREA ── */
  .emp-body {
    max-width: 1140px; margin: 0 auto; padding: 0 28px 72px;
  }

  /* ── TOAST ── */
  .emp-toast {
    display: flex; align-items: center; gap: 10px;
    padding: 13px 18px; margin-bottom: 24px;
    border-left: 3px solid;
    font-family: 'JetBrains Mono', monospace;
    font-size: .72rem; font-weight: 600; letter-spacing: .04em;
  }
  .emp-toast.success {
    background: rgba(34,197,94,.06);
    border-color: #22c55e; color: #166534;
    border-top: 1px solid rgba(34,197,94,.2);
    border-right: 1px solid rgba(34,197,94,.2);
    border-bottom: 1px solid rgba(34,197,94,.2);
  }
  .emp-toast.error {
    background: rgba(239,68,68,.06);
    border-color: #ef4444; color: #991b1b;
    border-top: 1px solid rgba(239,68,68,.2);
    border-right: 1px solid rgba(239,68,68,.2);
    border-bottom: 1px solid rgba(239,68,68,.2);
  }

  /* ── STAT STRIP ── */
  .emp-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px; margin-bottom: 28px;
  }
  .emp-stat-card {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 20px 22px;
    position: relative; overflow: hidden;
    transition: all .25s;
  }
  .emp-stat-card::after {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 2px;
    background: var(--blue); transform: scaleX(0);
    transform-origin: left; transition: transform .3s;
  }
  .emp-stat-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px var(--blue-glow); border-color: rgba(15,155,231,.35); }
  .emp-stat-card:hover::after { transform: scaleX(1); }
  .emp-stat-icon {
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px;
    background: var(--light-blue); color: var(--blue);
    border-radius: 4px; margin-bottom: 10px;
  }
  .emp-stat-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; color: var(--muted);
    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 4px;
  }
  .emp-stat-label::before { content: '// '; color: var(--blue); opacity: .6; }
  .emp-stat-num {
    font-family: 'Oxanium', sans-serif;
    font-size: 1.8rem; font-weight: 800;
    color: var(--dark); line-height: 1.1;
  }

  /* ── NO COMPANY BANNER ── */
  .emp-no-company {
    background: var(--dark); position: relative; overflow: hidden;
    border: 1px solid rgba(15,155,231,.2);
    padding: 40px 36px; margin-bottom: 28px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px; flex-wrap: wrap;
  }
  .emp-no-company-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
    background-size: 40px 40px; opacity: .04; pointer-events: none;
  }
  .emp-no-company > * { position: relative; z-index: 1; }

  /* ── FORMS ── */
  .emp-form-card {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 32px; margin-bottom: 24px;
    position: relative;
  }
  .emp-form-card::before {
    content: ''; position: absolute;
    top: 0; left: 0; right: 0; height: 3px; background: var(--blue);
  }
  .emp-form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 13px;
  }
  .emp-form-full { grid-column: 1 / -1; }

  .emp-field-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; font-weight: 600;
    color: var(--muted); text-transform: uppercase;
    letter-spacing: .12em; margin-bottom: 6px; display: block;
  }

  .emp-input, .emp-select, .emp-textarea {
    width: 100%; padding: 11px 14px;
    border: 1.5px solid var(--border);
    background: var(--mid);
    font-family: 'JetBrains Mono', monospace;
    font-size: .75rem; color: var(--dark);
    outline: none; transition: border-color .2s, box-shadow .2s, background .2s;
    border-radius: 3px;
  }
  .emp-input::placeholder,
  .emp-textarea::placeholder { color: rgba(19,24,31,.22); }
  .emp-input:focus, .emp-select:focus, .emp-textarea:focus {
    border-color: var(--blue);
    background: var(--white);
    box-shadow: 0 0 0 4px rgba(15,155,231,.08);
  }
  .emp-select { appearance: none; cursor: pointer; }
  .emp-textarea { resize: vertical; }

  /* ── BUTTONS ── */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue); color: var(--white);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .78rem; letter-spacing: .07em; text-transform: uppercase;
    padding: 11px 24px; border: none; cursor: pointer;
    transition: all .2s; position: relative; overflow: hidden;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  }
  .btn-primary::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
    transform: translateX(-100%); transition: transform .5s;
  }
  .btn-primary:hover::before { transform: translateX(100%); }
  .btn-primary:hover { background: var(--blue-hover); transform: translateY(-1px); box-shadow: 0 8px 24px var(--blue-glow); }
  .btn-primary:disabled { opacity: .55; cursor: not-allowed; }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--dark);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .78rem; letter-spacing: .07em; text-transform: uppercase;
    padding: 10px 24px; border: 1.5px solid var(--border); cursor: pointer;
    transition: all .2s;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  }
  .btn-ghost:hover { background: var(--dark); color: var(--white); border-color: var(--dark); }

  .btn-ghost-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--white);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .78rem; letter-spacing: .07em; text-transform: uppercase;
    padding: 10px 24px; border: 1.5px solid rgba(255,255,255,.3); cursor: pointer;
    transition: all .2s;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  }
  .btn-ghost-white:hover { background: rgba(255,255,255,.08); border-color: var(--white); }

  /* ── SECTION HEADER ── */
  .emp-section-head {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
  }
  .emp-section-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; letter-spacing: .14em; text-transform: uppercase;
    color: var(--blue); margin-bottom: 6px;
  }
  .emp-section-label::before { content: '//'; opacity: .5; }
  .emp-section-title {
    font-family: 'Oxanium', sans-serif;
    font-size: 1.15rem; font-weight: 800;
    color: var(--dark); letter-spacing: -.01em; margin: 0;
  }
  .emp-section-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; color: var(--muted);
    letter-spacing: .1em; text-transform: uppercase;
    margin-top: 3px;
  }
  .emp-section-count span { color: var(--blue); }

  /* ── JOB / BLOG ROW CARD ── */
  .emp-row-card {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 20px 24px;
    display: flex; align-items: center;
    justify-content: space-between;
    gap: 16px; flex-wrap: wrap;
    transition: all .25s cubic-bezier(.23,1,.32,1);
    position: relative; overflow: hidden;
    margin-bottom: 12px;
  }
  .emp-row-card::after {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 2px;
    background: var(--blue); transform: scaleX(0);
    transform-origin: left; transition: transform .3s;
  }
  .emp-row-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px var(--blue-glow); border-color: rgba(15,155,231,.35); }
  .emp-row-card:hover::after { transform: scaleX(1); }

  .emp-row-accent {
    width: 3px; height: 36px; background: var(--blue);
    flex-shrink: 0; margin-right: 4px;
  }

  /* ── TAGS ── */
  .emp-tag {
    display: inline-flex; align-items: center; gap: 4px;
    background: var(--light-blue); color: var(--blue);
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; letter-spacing: .08em; text-transform: uppercase; font-weight: 600;
    padding: 3px 10px; border-radius: 2px;
    border: 1px solid rgba(15,155,231,.2); margin: 2px;
  }
  .emp-tag-neutral {
    background: var(--mid); color: var(--muted);
    border-color: var(--border);
  }

  /* ── STATUS BADGE ── */
  .emp-status {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 2px;
    border: 1px solid transparent;
  }
  .emp-status-dot {
    width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
  }

  /* ── APPLICANT CARD ── */
  .emp-app-card {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 22px 26px; margin-bottom: 14px;
    position: relative; overflow: hidden;
  }
  .emp-app-card::before {
    content: ''; position: absolute;
    left: 0; top: 0; bottom: 0; width: 3px;
    background: var(--blue); transform: scaleY(0);
    transform-origin: bottom; transition: transform .3s;
  }
  .emp-app-card:hover::before { transform: scaleY(1); }

  .emp-avatar {
    width: 44px; height: 44px;
    background: var(--dark); color: var(--blue);
    font-family: 'Oxanium', sans-serif; font-weight: 800; font-size: 1rem;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; border: 2px solid rgba(15,155,231,.25);
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
  }

  .emp-cover-letter {
    margin-top: 14px; padding: 14px 16px;
    background: var(--mid); border-left: 3px solid var(--blue);
  }
  .emp-cover-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; color: var(--blue);
    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px;
    display: flex; align-items: center; gap: 5px;
  }
  .emp-cover-label::before { content: '// '; }

  /* status action buttons */
  .emp-status-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: .07em;
    padding: 6px 14px; border-radius: 2px;
    cursor: pointer; transition: filter .15s;
    border: 1.5px solid transparent;
  }
  .emp-status-btn:hover { filter: brightness(.9); }

  /* view applicants / delete */
  .emp-btn-view {
    background: var(--light-blue); color: var(--blue);
    border: 1.5px solid rgba(15,155,231,.25);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .72rem; letter-spacing: .05em; text-transform: uppercase;
    padding: 9px 16px; cursor: pointer; transition: all .2s;
    clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
    display: inline-flex; align-items: center; gap: 6px;
  }
  .emp-btn-view:hover { background: var(--blue); color: var(--white); }

  .emp-btn-delete {
    background: rgba(239,68,68,.07); color: #dc2626;
    border: 1.5px solid rgba(239,68,68,.22);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .72rem; letter-spacing: .05em; text-transform: uppercase;
    padding: 9px 14px; cursor: pointer; transition: background .2s;
    display: inline-flex; align-items: center; gap: 6px;
  }
  .emp-btn-delete:hover { background: rgba(239,68,68,.15); }

  /* ── EMPTY STATE ── */
  .emp-empty {
    text-align: center; padding: 64px 24px;
    background: var(--white); border: 1px dashed var(--border);
  }
  .emp-empty-icon {
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 14px; color: var(--muted); opacity: .5;
  }
  .emp-empty-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: .75rem; color: var(--muted);
  }
  .emp-empty-text::before { content: '// '; color: var(--blue); }

  /* ── SKELETON ── */
  .emp-skel {
    height: 80px; border-radius: 0; margin-bottom: 12px;
    background: linear-gradient(90deg, var(--mid) 25%, var(--border) 50%, var(--mid) 75%);
    background-size: 600px 100%;
    animation: skelAnim 1.4s infinite linear;
  }

  /* ── FORM SECTION TITLE ── */
  .emp-form-title {
    font-family: 'Oxanium', sans-serif;
    font-size: 1rem; font-weight: 800;
    color: var(--dark); letter-spacing: -.01em; margin: 6px 0 20px;
  }

  @media (max-width: 640px) {
    .emp-header-inner { flex-direction: column; align-items: flex-start; }
    .emp-tabs { width: 100%; overflow-x: auto; }
    .emp-body { padding: 0 16px 60px; }
  }
`;

const STATUS_MAP = {
  applied:     { bg: 'rgba(15,155,231,.08)',  text: '#0a6fa0', dot: '#0f9be7',  border: 'rgba(15,155,231,.25)' },
  reviewed:    { bg: 'rgba(245,166,35,.08)',   text: '#956d00', dot: '#f5a623',  border: 'rgba(245,166,35,.25)' },
  shortlisted: { bg: 'rgba(34,197,94,.08)',    text: '#1a7a45', dot: '#22c55e',  border: 'rgba(34,197,94,.25)'  },
  rejected:    { bg: 'rgba(239,68,68,.08)',    text: '#a02020', dot: '#ef4444',  border: 'rgba(239,68,68,.25)'  },
  hired:       { bg: 'rgba(139,92,246,.08)',   text: '#5b2d9e', dot: '#8b5cf6',  border: 'rgba(139,92,246,.25)' },
};

/* ─── Sub-components ─── */
const StatusBadge = ({ status }) => {
  const s = STATUS_MAP[status] || STATUS_MAP.applied;
  return (
    <span className="emp-status" style={{ background: s.bg, color: s.text, borderColor: s.border }}>
      <span className="emp-status-dot" style={{ background: s.dot }} />
      {status}
    </span>
  );
};

const SectionLabel = ({ children }) => (
  <p className="emp-section-label">{children}</p>
);

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const [blogs, setBlogs] = useState([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: '', excerpt: '', content: '',
    image: '', author: '', category: 'Technology'
  });
  const [jobForm, setJobForm] = useState({
    title: '', description: '', job_type: 'Full-time',
    category: 'Software Development', location: '',
    experience_min: 0, experience_max: 3,
    salary_min: '', salary_max: '', openings: 1, skills_required: ''
  });
  const [companyForm, setCompanyForm] = useState({
    name: '', description: '', industry: 'IT & Software',
    size: '11-50', city: '', email: '', phone: '', website: ''
  });

  const notify = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3500);
  };

  const fetchCompany = async () => {
    try { const res = await API.get('/companies/mine'); setCompany(res.data.company || null); }
    catch { setCompany(null); }
  };
  const fetchMyJobs = async () => {
    try { setLoading(true); const res = await API.get('/jobs/mine'); setJobs(res.data.jobs); }
    catch {} finally { setLoading(false); }
  };
  const fetchApplicants = async (jobId) => {
    try { setLoading(true); const res = await API.get(`/applications/job/${jobId}`); setApplicants(res.data.applications); setSelectedJob(jobId); setActiveTab('applicants'); }
    catch {} finally { setLoading(false); }
  };
  const fetchBlogs = async () => {
    try { setLoading(true); const res = await API.get('/blogs'); setBlogs(res.data.blogs); }
    catch {} finally { setLoading(false); }
  };

  useEffect(() => { fetchCompany(); fetchMyJobs(); fetchBlogs(); }, []);
  useEffect(() => { if (activeTab === 'blogs') fetchBlogs(); }, [activeTab]);

  const handleCreateCompany = async (e) => {
    e.preventDefault();
    try { const res = await API.post('/companies', companyForm); setCompany(res.data.company); setShowCompanyForm(false); notify('Company created successfully!'); }
    catch (err) { notify(err.response?.data?.message || 'Failed to create company', 'error'); }
  };
  const handleCreateJob = async (e) => {
    e.preventDefault();
    try {
      await API.post('/jobs', { ...jobForm, skills_required: jobForm.skills_required.split(',').map(s => s.trim()).filter(Boolean) });
      setShowJobForm(false);
      setJobForm({ title: '', description: '', job_type: 'Full-time', category: 'Software Development', location: '', experience_min: 0, experience_max: 3, salary_min: '', salary_max: '', openings: 1, skills_required: '' });
      notify('Job posted successfully!'); fetchMyJobs();
    } catch (err) { notify(err.response?.data?.message || 'Failed to post job', 'error'); }
  };
  const handleDeleteJob = async (jobId) => {
    if (!window.confirm('Delete this job posting?')) return;
    try { await API.delete(`/jobs/${jobId}`); notify('Job deleted.'); fetchMyJobs(); }
    catch { notify('Failed to delete job.', 'error'); }
  };
  const handleStatusUpdate = async (appId, status) => {
    try { await API.put(`/applications/${appId}/status`, { status }); notify(`Status updated to "${status}"`); fetchApplicants(selectedJob); }
    catch { notify('Status update failed.', 'error'); }
  };
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try { await API.post('/blogs', blogForm); setShowBlogForm(false); setBlogForm({ title: '', excerpt: '', content: '', image: '', author: '', category: 'Technology' }); notify('Blog published!'); fetchBlogs(); }
    catch (err) { notify(err.response?.data?.message || 'Failed to publish blog', 'error'); }
  };
  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm('Delete this blog post?')) return;
    try { await API.delete(`/blogs/${blogId}`); notify('Blog deleted.'); fetchBlogs(); }
    catch { notify('Failed to delete blog.', 'error'); }
  };

  const Skeleton = () => (
    <>{[1,2,3].map(i => <div key={i} className="emp-skel" />)}</>
  );

  const TABS = [
    { key: 'jobs',       label: 'My Jobs',    icon: <Briefcase size={13} /> },
    { key: 'applicants', label: 'Applicants', icon: <Users size={13} /> },
    { key: 'blogs',      label: 'Blogs',      icon: <FileText size={13} /> },
  ];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{DIT_STYLES}</style>
      <div className="emp-dashboard">

        {/* ── HEADER ── */}
        <div className="emp-header">
          <div className="emp-header-inner">
            <div>
              <div className="emp-header-label">
                <span className="emp-header-dot" />
                Employer Portal
              </div>
              <h1>Employer <span>Dashboard</span></h1>
              {company && (
                <p className="emp-company-name">// {company.name} · {company.industry}</p>
              )}
            </div>

            {company && (
              <div className="emp-tabs">
                {TABS.map(t => (
                  <button
                    key={t.key}
                    className={`emp-tab ${activeTab === t.key ? 'active' : ''}`}
                    onClick={() => setActiveTab(t.key)}
                  >
                    {t.icon}
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="emp-body">

          {/* ── TOAST ── */}
          {message.text && (
            <div className={`emp-toast anim-fadein ${message.type}`}>
              {message.type === 'error'
                ? <AlertTriangle size={14} />
                : <CheckCircle size={14} />
              }
              {message.text}
            </div>
          )}

          {/* ── NO COMPANY BANNER ── */}
          {!company && (
            <div className="emp-no-company anim-fadein">
              <div className="emp-no-company-grid" />
              <div>
                <SectionLabel>Setup Required</SectionLabel>
                <h2 style={{ fontFamily: 'Oxanium, sans-serif', color: '#fff', fontSize: '1.3rem', fontWeight: 800, margin: '4px 0 8px' }}>
                  Create your company profile
                </h2>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,.38)', fontSize: '.72rem', lineHeight: 1.8, margin: 0, maxWidth: 420 }}>
                  You need a company profile before you can post jobs and receive applications.
                </p>
              </div>
              <button className="btn-primary" onClick={() => setShowCompanyForm(true)}>
                <Building2 size={14} />
                Create Company
                <ArrowRight size={13} />
              </button>
            </div>
          )}

          {/* ── COMPANY FORM ── */}
          {showCompanyForm && !company && (
            <div className="emp-form-card anim-fadein">
              <SectionLabel>Company Setup</SectionLabel>
              <h3 className="emp-form-title">Company Details</h3>
              <form onSubmit={handleCreateCompany}>
                <div className="emp-form-grid">
                  <input className="emp-input" placeholder="Company Name *" required value={companyForm.name} onChange={e => setCompanyForm({ ...companyForm, name: e.target.value })} />
                  <input className="emp-input" placeholder="Company Email *" required type="email" value={companyForm.email} onChange={e => setCompanyForm({ ...companyForm, email: e.target.value })} />
                  <input className="emp-input" placeholder="Phone Number" value={companyForm.phone} onChange={e => setCompanyForm({ ...companyForm, phone: e.target.value })} />
                  <input className="emp-input" placeholder="City" value={companyForm.city} onChange={e => setCompanyForm({ ...companyForm, city: e.target.value })} />
                  <input className="emp-input" placeholder="Website URL" value={companyForm.website} onChange={e => setCompanyForm({ ...companyForm, website: e.target.value })} />
                  <select className="emp-select" value={companyForm.industry} onChange={e => setCompanyForm({ ...companyForm, industry: e.target.value })}>
                    {['IT & Software','Consulting','Finance & Banking','Healthcare','Education','E-commerce','Manufacturing','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                  <select className="emp-select" value={companyForm.size} onChange={e => setCompanyForm({ ...companyForm, size: e.target.value })}>
                    {['1-10','11-50','51-200','201-500','1000+'].map(o => <option key={o} value={o}>{o} employees</option>)}
                  </select>
                  <textarea className="emp-textarea emp-form-full" placeholder="Company Description *" required rows={3}
                    value={companyForm.description} onChange={e => setCompanyForm({ ...companyForm, description: e.target.value })} />
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                  <button className="btn-primary" type="submit">
                    <Building2 size={14} />
                    Create Company
                  </button>
                  <button className="btn-ghost" type="button" onClick={() => setShowCompanyForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
          )}

          {/* ── MAIN CONTENT (company exists) ── */}
          {company && (
            <>
              {/* Stat Strip */}
              <div className="emp-stats anim-fadein">
                {[
                  { label: 'Active Jobs',  value: jobs.length,         icon: <Briefcase size={16} /> },
                  { label: 'Applicants',   value: applicants.length,   icon: <Users size={16} /> },
                  { label: 'Blog Posts',   value: blogs.length,        icon: <PenLine size={16} /> },
                  { label: 'Team Size',    value: company.size || '—', icon: <Building2 size={16} /> },
                ].map(s => (
                  <div key={s.label} className="emp-stat-card">
                    <div className="emp-stat-icon">{s.icon}</div>
                    <div className="emp-stat-label">{s.label}</div>
                    <div className="emp-stat-num">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* ══════ JOBS TAB ══════ */}
              {activeTab === 'jobs' && (
                <div className="anim-fadein">
                  <div className="emp-section-head">
                    <div>
                      <SectionLabel>Listings</SectionLabel>
                      <h2 className="emp-section-title">Posted Jobs</h2>
                      <p className="emp-section-count"><span>{jobs.length}</span> active listings</p>
                    </div>
                    <button className="btn-primary" onClick={() => setShowJobForm(!showJobForm)}>
                      {showJobForm
                        ? <><ChevronRight size={14} style={{ transform: 'rotate(90deg)' }} /> Close</>
                        : <><Briefcase size={14} /> Post New Job</>
                      }
                    </button>
                  </div>

                  {showJobForm && (
                    <div className="emp-form-card anim-fadein">
                      <SectionLabel>New Listing</SectionLabel>
                      <h3 className="emp-form-title">Job Details</h3>
                      <form onSubmit={handleCreateJob}>
                        <div className="emp-form-grid">
                          <input className="emp-input" placeholder="Job Title *" required value={jobForm.title} onChange={e => setJobForm({ ...jobForm, title: e.target.value })} />
                          <input className="emp-input" placeholder="Location" value={jobForm.location} onChange={e => setJobForm({ ...jobForm, location: e.target.value })} />
                          <select className="emp-select" value={jobForm.job_type} onChange={e => setJobForm({ ...jobForm, job_type: e.target.value })}>
                            {['Full-time','Part-time','Contract','Internship','Remote'].map(o => <option key={o}>{o}</option>)}
                          </select>
                          <select className="emp-select" value={jobForm.category} onChange={e => setJobForm({ ...jobForm, category: e.target.value })}>
                            {['Software Development','Data Science','Design','Marketing','Sales','HR','Finance','Consulting','Other'].map(o => <option key={o}>{o}</option>)}
                          </select>
                          <input className="emp-input" placeholder="Min Salary (₹)" type="number" value={jobForm.salary_min} onChange={e => setJobForm({ ...jobForm, salary_min: e.target.value })} />
                          <input className="emp-input" placeholder="Max Salary (₹)" type="number" value={jobForm.salary_max} onChange={e => setJobForm({ ...jobForm, salary_max: e.target.value })} />
                          <input className="emp-input" placeholder="Min Experience (yrs)" type="number" value={jobForm.experience_min} onChange={e => setJobForm({ ...jobForm, experience_min: e.target.value })} />
                          <input className="emp-input" placeholder="Max Experience (yrs)" type="number" value={jobForm.experience_max} onChange={e => setJobForm({ ...jobForm, experience_max: e.target.value })} />
                          <input className="emp-input" placeholder="Number of Openings" type="number" value={jobForm.openings} onChange={e => setJobForm({ ...jobForm, openings: e.target.value })} />
                          <input className="emp-input" placeholder="Skills (comma separated)" value={jobForm.skills_required} onChange={e => setJobForm({ ...jobForm, skills_required: e.target.value })} />
                          <textarea className="emp-textarea emp-form-full" placeholder="Job Description *" required rows={4}
                            value={jobForm.description} onChange={e => setJobForm({ ...jobForm, description: e.target.value })} />
                        </div>
                        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                          <button className="btn-primary" type="submit">
                            <Briefcase size={14} />
                            Post Job
                          </button>
                          <button className="btn-ghost" type="button" onClick={() => setShowJobForm(false)}>Cancel</button>
                        </div>
                      </form>
                    </div>
                  )}

                  {loading ? <Skeleton /> : jobs.length === 0 ? (
                    <div className="emp-empty">
                      <div className="emp-empty-icon"><Inbox size={40} /></div>
                      <p className="emp-empty-text">no jobs posted yet — click "Post New Job" to start</p>
                    </div>
                  ) : jobs.map((job, idx) => (
                    <div key={job.id} className="emp-row-card anim-fadein" style={{ animationDelay: `${idx * .06}s` }}>
                      <div className="emp-row-accent" />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: 'Oxanium, sans-serif', fontWeight: 800, fontSize: '.95rem', color: 'var(--dark)', marginBottom: 4 }}>{job.title}</div>
                        {job.salary_min && (
                          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '.68rem', color: 'var(--blue)', marginBottom: 8 }}>
                            ₹{(job.salary_min/100000).toFixed(1)}L – ₹{(job.salary_max/100000).toFixed(1)}L
                          </div>
                        )}
                        <div>
                          <span className="emp-tag"><Clock size={9} />{job.job_type}</span>
                          <span className="emp-tag emp-tag-neutral"><MapPin size={9} />{job.location || 'Remote'}</span>
                          <span className="emp-tag emp-tag-neutral">{job.category}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                        <button className="emp-btn-view" onClick={() => fetchApplicants(job.id)}>
                          <Eye size={13} />
                          View Applicants
                        </button>
                        <button className="emp-btn-delete" onClick={() => handleDeleteJob(job.id)}>
                          <Trash2 size={13} />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ══════ APPLICANTS TAB ══════ */}
              {activeTab === 'applicants' && (
                <div className="anim-fadein">
                  <div className="emp-section-head">
                    <div>
                      <SectionLabel>Applications</SectionLabel>
                      <h2 className="emp-section-title">Applicants</h2>
                      <p className="emp-section-count"><span>{applicants.length}</span> total received</p>
                    </div>
                  </div>

                  {loading ? <Skeleton /> : applicants.length === 0 ? (
                    <div className="emp-empty">
                      <div className="emp-empty-icon"><Inbox size={40} /></div>
                      <p className="emp-empty-text">no applications yet — click "View Applicants" on a job</p>
                    </div>
                  ) : applicants.map((app, idx) => (
                    <div key={app.id} className="emp-app-card anim-fadein" style={{ animationDelay: `${idx * .06}s` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                          <div className="emp-avatar">
                            {(app.applicant?.name || 'U').slice(0,1).toUpperCase()}
                          </div>
                          <div>
                            <div style={{ fontFamily: 'Oxanium, sans-serif', fontWeight: 800, fontSize: '.95rem', color: 'var(--dark)', marginBottom: 2 }}>
                              {app.applicant?.name}
                            </div>
                            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '.62rem', color: 'var(--muted)', marginBottom: 8, letterSpacing: '.04em', display: 'flex', alignItems: 'center', gap: 6 }}>
                              <Mail size={10} />
                              {app.applicant?.email}{app.applicant?.phone ? ` · ${app.applicant.phone}` : ''}
                            </div>
                            <div>
                              {app.applicant?.location && (
                                <span className="emp-tag emp-tag-neutral"><MapPin size={9} />{app.applicant.location}</span>
                              )}
                              {app.applicant?.experience_years > 0 && (
                                <span className="emp-tag emp-tag-neutral"><Clock size={9} />{app.applicant.experience_years}y exp</span>
                              )}
                              {app.applicant?.skills?.map((s, i) => (
                                <span key={i} className="emp-tag emp-tag-neutral">{s}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <StatusBadge status={app.status} />
                      </div>

                      {app.cover_letter && (
                        <div className="emp-cover-letter">
                          <div className="emp-cover-label">Cover Letter</div>
                          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '.72rem', color: '#2a3340', margin: 0, lineHeight: 1.8 }}>
                            {app.cover_letter}
                          </p>
                        </div>
                      )}

                      <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
                        {['reviewed','shortlisted','rejected','hired'].map(status => {
                          const s = STATUS_MAP[status];
                          return (
                            <button key={status} className="emp-status-btn"
                              style={{ background: s.bg, color: s.text, borderColor: s.border }}
                              onClick={() => handleStatusUpdate(app.id, status)}>
                              {status}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ══════ BLOGS TAB ══════ */}
              {activeTab === 'blogs' && (
                <div className="anim-fadein">
                  <div className="emp-section-head">
                    <div>
                      <SectionLabel>Content</SectionLabel>
                      <h2 className="emp-section-title">Blog Posts</h2>
                      <p className="emp-section-count"><span>{blogs.length}</span> published posts</p>
                    </div>
                    <button className="btn-primary" onClick={() => setShowBlogForm(!showBlogForm)}>
                      {showBlogForm
                        ? <><ChevronRight size={14} style={{ transform: 'rotate(90deg)' }} /> Close</>
                        : <><PenLine size={14} /> Write New Blog</>
                      }
                    </button>
                  </div>

                  {showBlogForm && (
                    <div className="emp-form-card anim-fadein">
                      <SectionLabel>New Blog Post</SectionLabel>
                      <h3 className="emp-form-title">Blog Details</h3>
                      <form onSubmit={handleCreateBlog}>
                        <div className="emp-form-grid" style={{ marginBottom: 13 }}>
                          <input className="emp-input" placeholder="Blog Title *" required value={blogForm.title} onChange={e => setBlogForm({ ...blogForm, title: e.target.value })} />
                          <input className="emp-input" placeholder="Author Name" value={blogForm.author} onChange={e => setBlogForm({ ...blogForm, author: e.target.value })} />
                          <input className="emp-input" placeholder="Image URL (optional)" value={blogForm.image} onChange={e => setBlogForm({ ...blogForm, image: e.target.value })} />
                          <select className="emp-select" value={blogForm.category} onChange={e => setBlogForm({ ...blogForm, category: e.target.value })}>
                            {['Technology','Career','Interview Tips','Resume','Work Life','Other'].map(o => <option key={o}>{o}</option>)}
                          </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                          <textarea className="emp-textarea" placeholder="Short Summary (shown on listing page) *" required rows={2}
                            value={blogForm.excerpt} onChange={e => setBlogForm({ ...blogForm, excerpt: e.target.value })} />
                          <textarea className="emp-textarea" placeholder="Full Blog Content *" required rows={10}
                            value={blogForm.content} onChange={e => setBlogForm({ ...blogForm, content: e.target.value })} />
                        </div>
                        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                          <button className="btn-primary" type="submit">
                            <PenLine size={14} />
                            Publish Blog
                          </button>
                          <button className="btn-ghost" type="button" onClick={() => setShowBlogForm(false)}>Cancel</button>
                        </div>
                      </form>
                    </div>
                  )}

                  {loading ? <Skeleton /> : blogs.length === 0 ? (
                    <div className="emp-empty">
                      <div className="emp-empty-icon"><FileText size={40} /></div>
                      <p className="emp-empty-text">no blog posts yet — click "Write New Blog" to publish</p>
                    </div>
                  ) : blogs.map((blog, idx) => (
                    <div key={blog.id} className="emp-row-card anim-fadein" style={{ animationDelay: `${idx * .06}s` }}>
                      <div className="emp-row-accent" style={{ background: 'var(--blue)' }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: 'Oxanium, sans-serif', fontWeight: 800, fontSize: '.95rem', color: 'var(--dark)', marginBottom: 4 }}>{blog.title}</div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '.62rem', color: 'var(--muted)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
                          // {blog.author || 'Admin'} · {new Date(blog.createdAt).toLocaleDateString('en-IN')}
                        </div>
                        <span className="emp-tag">{blog.category}</span>
                        {blog.excerpt && (
                          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '.68rem', color: 'var(--muted)', margin: '8px 0 0', lineHeight: 1.7, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            {blog.excerpt}
                          </p>
                        )}
                      </div>
                      <button className="emp-btn-delete" onClick={() => handleDeleteBlog(blog.id)}>
                        <Trash2 size={13} />
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;