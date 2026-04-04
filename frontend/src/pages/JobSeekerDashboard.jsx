import { useState, useEffect } from 'react';
import API from '../api';
import { useAuth } from '../context/AuthContext';

// Add to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

const BRAND = '#0f9be7';
const DARK  = '#13181f';

const statusConfig = {
  applied:     { color: '#0f9be7', bg: '#e8f6fd', label: 'Applied'     },
  reviewed:    { color: '#e67e22', bg: '#fef3e2', label: 'Reviewed'    },
  shortlisted: { color: '#27ae60', bg: '#e8f8ef', label: 'Shortlisted' },
  rejected:    { color: '#e74c3c', bg: '#fdecea', label: 'Rejected'    },
  hired:       { color: '#8e44ad', bg: '#f5eefa', label: 'Hired'       },
};

const styles = {
  page: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '2.5rem 1.5rem',
    background: '#fff',
    minHeight: '100vh',
    fontFamily: "'Oxanium', sans-serif",
    color: DARK,
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    paddingBottom: '1.5rem',
    borderBottom: '1.5px solid #eef0f2',
  },
  pageTitle: {
    fontFamily: "'Oxanium', sans-serif",
    fontSize: 28,
    fontWeight: 700,
    color: DARK,
    margin: 0,
    letterSpacing: '-0.5px',
  },
  pageSub: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: '#8a9099',
    marginTop: 4,
    margin: '4px 0 0',
  },
  msgSuccess: {
    padding: '12px 16px',
    borderRadius: 10,
    background: '#e8f8ef',
    color: '#1a6e3f',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    marginBottom: 16,
    border: '1px solid #b3e8ca',
  },
  msgError: {
    padding: '12px 16px',
    borderRadius: 10,
    background: '#fdecea',
    color: '#b71c1c',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    marginBottom: 16,
    border: '1px solid #f5c0bb',
  },
  profileCard: {
    background: '#fff',
    border: '1.5px solid #eef0f2',
    borderRadius: 16,
    padding: '1.5rem',
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
  },
  avatarRing: {
    width: 54,
    height: 54,
    borderRadius: '50%',
    background: '#e8f6fd',
    border: `2px solid ${BRAND}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Oxanium', sans-serif",
    fontWeight: 700,
    fontSize: 18,
    color: BRAND,
    flexShrink: 0,
  },
  userName: {
    fontFamily: "'Oxanium', sans-serif",
    fontSize: 19,
    fontWeight: 700,
    color: DARK,
    margin: 0,
  },
  userEmail: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: '#8a9099',
    margin: '2px 0 0',
  },
  editBtn: {
    background: '#fff',
    border: `1.5px solid ${BRAND}`,
    color: BRAND,
    padding: '8px 18px',
    borderRadius: 10,
    fontFamily: "'Oxanium', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background 0.15s, color 0.15s',
  },
  formCard: {
    background: '#fafbfc',
    border: '1.5px solid #eef0f2',
    borderRadius: 16,
    padding: '1.5rem',
    marginBottom: '1.5rem',
  },
  formTitle: {
    fontFamily: "'Oxanium', sans-serif",
    fontSize: 15,
    fontWeight: 700,
    color: DARK,
    margin: '0 0 16px',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 10,
    border: '1.5px solid #dde1e6',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: DARK,
    background: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 10,
    border: '1.5px solid #dde1e6',
    fontFamily: "'Oxanium', sans-serif",
    fontSize: 13,
    color: DARK,
    background: '#fff',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box',
    lineHeight: 1.6,
  },
  saveBtn: {
    background: BRAND,
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: 10,
    fontFamily: "'Oxanium', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    cursor: 'pointer',
    letterSpacing: '0.3px',
  },
  cancelBtn: {
    background: '#fff',
    color: '#5a6370',
    border: '1.5px solid #dde1e6',
    padding: '10px 20px',
    borderRadius: 10,
    fontFamily: "'Oxanium', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 12,
    marginBottom: '1.5rem',
  },
  tabsRow: {
    display: 'flex',
    gap: 8,
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  tabActive: {
    background: DARK,
    color: '#fff',
    border: `1.5px solid ${DARK}`,
    padding: '7px 16px',
    borderRadius: 9,
    fontFamily: "'Oxanium', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
  },
  tabInactive: {
    background: '#fff',
    color: '#5a6370',
    border: '1.5px solid #dde1e6',
    padding: '7px 16px',
    borderRadius: 9,
    fontFamily: "'Oxanium', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
  },
  appCard: {
    background: '#fff',
    border: '1.5px solid #eef0f2',
    borderRadius: 16,
    padding: '1.25rem 1.5rem',
    marginBottom: 12,
    transition: 'border-color 0.15s, box-shadow 0.15s',
  },
  jobTitle: {
    fontFamily: "'Oxanium', sans-serif",
    fontSize: 17,
    fontWeight: 700,
    color: DARK,
    margin: 0,
  },
  companyName: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: BRAND,
    fontWeight: 500,
    margin: '4px 0 0',
  },
  jobMeta: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    color: '#8a9099',
    display: 'flex',
    gap: 14,
    flexWrap: 'wrap',
    marginTop: 5,
  },
  statusPill: {
    padding: '5px 14px',
    borderRadius: 30,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
    flexShrink: 0,
  },
  coverBox: {
    marginTop: 12,
    background: '#f7f8fa',
    borderRadius: 10,
    padding: '10px 14px',
    border: '1px solid #eef0f2',
  },
  coverLabel: {
    fontFamily: "'Oxanium', sans-serif",
    fontSize: 10,
    fontWeight: 700,
    color: '#8a9099',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 0 5px',
  },
  coverText: {
    fontFamily: "'Oxanium', sans-serif",
    fontSize: 13,
    color: '#5a6370',
    lineHeight: 1.65,
    margin: 0,
  },
  emptyState: {
    textAlign: 'center',
    padding: '5rem 2rem',
  },
  findJobsBtn: {
    display: 'inline-block',
    background: BRAND,
    color: '#fff',
    padding: '11px 28px',
    borderRadius: 10,
    fontFamily: "'Oxanium', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    textDecoration: 'none',
    letterSpacing: '0.3px',
  },
};

// Inject global styles once
if (typeof document !== 'undefined' && !document.getElementById('jd-styles')) {
  const s = document.createElement('style');
  s.id = 'jd-styles';
  s.textContent = `
    @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
    .jd-input:focus { border-color: #0f9be7 !important; box-shadow: 0 0 0 3px #0f9be718 !important; }
    .jd-edit-btn:hover { background: #0f9be7 !important; color: #fff !important; }
    .jd-app-card:hover { border-color: #0f9be740 !important; box-shadow: 0 4px 20px #0f9be710 !important; }
    .jd-skeleton { height: 100px; border-radius: 16px; background: linear-gradient(90deg,#f7f8fa 25%,#eef0f2 50%,#f7f8fa 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; margin-bottom: 12px; }
  `;
  document.head.appendChild(s);
}

const initials = (name = '') =>
  name.split(' ').slice(0, 2).map(w => w[0]?.toUpperCase() || '').join('');

const StatCard = ({ label, value, color, bg }) => (
  <div style={{
    background: bg,
    border: `1.5px solid ${color}33`,
    borderRadius: 14,
    padding: '1.1rem 1rem',
    textAlign: 'center',
  }}>
    <div style={{
      fontFamily: "'Oxanium', sans-serif",
      fontSize: 32,
      fontWeight: 700,
      color,
      lineHeight: 1,
      marginBottom: 6,
    }}>
      {value}
    </div>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      fontWeight: 500,
      color,
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
    }}>
      {label}
    </div>
  </div>
);

const AlertBanner = ({ color, bg, children }) => (
  <div style={{
    marginTop: 12,
    background: bg,
    borderRadius: 10,
    padding: '10px 16px',
    fontFamily: "'Oxanium', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color,
    textAlign: 'center',
    border: `1px solid ${color}33`,
  }}>
    {children}
  </div>
);

const JobseekerDashboard = () => {
  const { user } = useAuth();

  const [applications, setApplications]       = useState([]);
  const [loading, setLoading]                 = useState(true);
  const [activeTab, setActiveTab]             = useState('all');
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [message, setMessage]                 = useState('');
  const [messageType, setMessageType]         = useState('success');

  const [profileForm, setProfileForm] = useState({
    name:             user?.name             || '',
    phone:            user?.phone            || '',
    location:         user?.location         || '',
    bio:              user?.bio              || '',
    skills:           (user?.skills || []).join(', '),
    experience_years: user?.experience_years || 0,
  });

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await API.get('/applications/my');
      setApplications(res.data.applications);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchApplications(); }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...profileForm,
        skills: profileForm.skills.split(',').map(s => s.trim()).filter(Boolean),
      };
      await API.put('/auth/me', data);
      setMessageType('success');
      setMessage('Profile updated successfully.');
      setShowProfileForm(false);
      setTimeout(() => setMessage(''), 3500);
    } catch (err) {
      setMessageType('error');
      setMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  const patchForm = (key, val) =>
    setProfileForm(prev => ({ ...prev, [key]: val }));

  const filteredApps =
    activeTab === 'all'
      ? applications
      : applications.filter(a => a.status === activeTab);

  const stats = {
    total:       applications.length,
    shortlisted: applications.filter(a => a.status === 'shortlisted').length,
    hired:       applications.filter(a => a.status === 'hired').length,
    rejected:    applications.filter(a => a.status === 'rejected').length,
  };

  const tabs = [
    { key: 'all',         label: 'All'         },
    { key: 'applied',     label: 'Applied'     },
    { key: 'reviewed',    label: 'Reviewed'    },
    { key: 'shortlisted', label: 'Shortlisted' },
    { key: 'hired',       label: 'Hired'       },
    { key: 'rejected',    label: 'Rejected'    },
  ];

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>

      {/* Page Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.pageTitle}>My Dashboard</h1>
          <p style={styles.pageSub}>Track your job applications and manage your profile</p>
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: '#8a9099',
          paddingTop: 4,
        }}>
          {new Date().toLocaleDateString('en-US', {
            weekday: 'short', month: 'short', day: 'numeric',
          })}
        </div>
      </div>

      {/* Message */}
      {message && (
        <div style={messageType === 'success' ? styles.msgSuccess : styles.msgError}>
          {messageType === 'success' ? '✓ ' : '✕ '}{message}
        </div>
      )}

      {/* Profile Card */}
      <div style={styles.profileCard}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flex: 1 }}>
          <div style={styles.avatarRing}>{initials(user?.name)}</div>
          <div>
            <h2 style={styles.userName}>{user?.name}</h2>
            <p style={styles.userEmail}>{user?.email}</p>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#5a6370',
              marginTop: 6,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px 14px',
            }}>
              {user?.location          && <span>📍 {user.location}</span>}
              {user?.experience_years > 0 && <span>{user.experience_years} yrs experience</span>}
              {user?.phone             && <span>{user.phone}</span>}
            </div>
            {user?.bio && (
              <p style={{
                fontFamily: "'Oxanium', sans-serif",
                fontSize: 13,
                color: '#5a6370',
                marginTop: 8,
                lineHeight: 1.6,
                maxWidth: 480,
              }}>
                {user.bio}
              </p>
            )}
            {user?.skills?.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                {user.skills.map(skill => (
                  <span key={skill} style={{
                    background: '#e8f6fd',
                    color: BRAND,
                    padding: '3px 10px',
                    borderRadius: 20,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    border: `1px solid ${BRAND}33`,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          className="jd-edit-btn"
          style={styles.editBtn}
          onClick={() => setShowProfileForm(p => !p)}>
          {showProfileForm ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Edit Form */}
      {showProfileForm && (
        <div style={styles.formCard}>
          <p style={styles.formTitle}>Update Profile</p>
          <form onSubmit={handleProfileUpdate}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 12,
            }}>
              <input
                className="jd-input"
                style={styles.input}
                placeholder="Full Name"
                value={profileForm.name}
                onChange={e => patchForm('name', e.target.value)}
              />
              <input
                className="jd-input"
                style={styles.input}
                placeholder="Phone number"
                value={profileForm.phone}
                onChange={e => patchForm('phone', e.target.value)}
              />
              <input
                className="jd-input"
                style={styles.input}
                placeholder="Location (e.g. New Delhi)"
                value={profileForm.location}
                onChange={e => patchForm('location', e.target.value)}
              />
              <input
                className="jd-input"
                style={styles.input}
                placeholder="Years of experience"
                type="number"
                value={profileForm.experience_years}
                onChange={e => patchForm('experience_years', e.target.value)}
              />
              <input
                className="jd-input"
                style={{ ...styles.input, gridColumn: '1 / -1' }}
                placeholder="Skills (comma-separated: React, Node.js, Python)"
                value={profileForm.skills}
                onChange={e => patchForm('skills', e.target.value)}
              />
              <textarea
                className="jd-input"
                style={{ ...styles.textarea, gridColumn: '1 / -1' }}
                placeholder="Write a short bio about yourself..."
                value={profileForm.bio}
                rows={3}
                onChange={e => patchForm('bio', e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button type="submit" style={styles.saveBtn}>Save Changes</button>
              <button type="button" style={styles.cancelBtn}
                onClick={() => setShowProfileForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Stats */}
      <div style={styles.statsGrid}>
        <StatCard label="Applications"  value={stats.total}       color={BRAND}    bg="#e8f6fd" />
        <StatCard label="Shortlisted"   value={stats.shortlisted} color="#27ae60"  bg="#e8f8ef" />
        <StatCard label="Hired"         value={stats.hired}       color="#8e44ad"  bg="#f5eefa" />
        <StatCard label="Rejected"      value={stats.rejected}    color="#e74c3c"  bg="#fdecea" />
      </div>

      {/* Filter Tabs */}
      <div style={styles.tabsRow}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            style={activeTab === tab.key ? styles.tabActive : styles.tabInactive}
            onClick={() => setActiveTab(tab.key)}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Application List */}
      {loading ? (
        <div>
          {[1, 2, 3].map(i => <div key={i} className="jd-skeleton" />)}
        </div>
      ) : filteredApps.length === 0 ? (
        <div style={styles.emptyState}>
          <div style={{
            width: 64, height: 64,
            background: '#f7f8fa',
            border: '1.5px solid #eef0f2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
              stroke="#c0c6ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </div>
          <p style={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: 18, fontWeight: 700, color: DARK, margin: '0 0 8px',
          }}>
            No applications found
          </p>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, color: '#8a9099', margin: '0 0 24px',
          }}>
            {activeTab === 'all'
              ? "You haven't applied to any jobs yet."
              : `No applications with status "${activeTab}".`}
          </p>
          <a href="/" style={styles.findJobsBtn}>Browse Open Positions</a>
        </div>
      ) : (
        <div>
          {filteredApps.map(app => {
            const sc = statusConfig[app.status] || statusConfig.applied;
            return (
              <div key={app.id} className="jd-app-card" style={styles.appCard}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 12,
                }}>
                  <div style={{ flex: 1 }}>
                    <p style={styles.jobTitle}>{app.job?.title}</p>
                    <p style={styles.companyName}>{app.job?.company?.name}</p>
                    <div style={styles.jobMeta}>
                      {app.job?.location && <span>📍 {app.job.location}</span>}
                      <span>
                        Applied{' '}
                        {new Date(app.createdAt).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                  <span style={{
                    ...styles.statusPill,
                    background: sc.bg,
                    color: sc.color,
                    border: `1px solid ${sc.color}33`,
                  }}>
                    {sc.label}
                  </span>
                </div>

                {app.cover_letter && (
                  <div style={styles.coverBox}>
                    <p style={styles.coverLabel}>Cover Letter</p>
                    <p style={styles.coverText}>{app.cover_letter}</p>
                  </div>
                )}

                {app.status === 'hired' && (
                  <AlertBanner color="#6d28d9" bg="#f5eefa">
                    Congratulations! You have been selected for this position.
                  </AlertBanner>
                )}
                {app.status === 'shortlisted' && (
                  <AlertBanner color="#166534" bg="#e8f8ef">
                    Your application has been shortlisted — start preparing for your interview.
                  </AlertBanner>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JobseekerDashboard;