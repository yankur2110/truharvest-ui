import './App.css'
import LoginPage from './LoginPage.jsx'

function App({ keycloak }) {

  // Not logged in → show custom TruHarvest login page
  if (!keycloak.authenticated) {
    return <LoginPage keycloak={keycloak} />
  }

  // Logged in → show dashboard
  const user = keycloak.tokenParsed

  return (
    <div className="dashboard">

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar-brand">TruHarvest</div>
        <div className="navbar-user">
          <div className="user-avatar">
            {user?.preferred_username?.[0]?.toUpperCase()}
          </div>
          <span className="user-name">{user?.preferred_username}</span>
          <button className="logout-btn" onClick={() => keycloak.logout()}>
            Sign out
          </button>
        </div>
      </nav>

      {/* ── Page content ── */}
      <div className="page-content">

        {/* Welcome banner */}
        <div className="welcome-banner">
          <div>
            <p className="welcome-eyebrow">Dashboard</p>
            <h1 className="welcome-heading">
              Good to see you, {user?.given_name || user?.preferred_username}
            </h1>
          </div>
          <div className="status-pill">
            <span className="status-dot" />
            Session active
          </div>
        </div>

        {/* Account details card */}
        <div className="card">
          <h2 className="card-title">Account Details</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Username</span>
              <span className="detail-value">{user?.preferred_username}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">{user?.email ?? '—'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Full Name</span>
              <span className="detail-value">
                {user?.given_name && user?.family_name
                  ? `${user.given_name} ${user.family_name}`
                  : '—'}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Realm</span>
              <span className="detail-value">{user?.iss?.split('/').pop()}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
