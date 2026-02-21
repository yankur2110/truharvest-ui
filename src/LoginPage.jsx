import './LoginPage.css'

function LoginPage({ keycloak }) {
  return (
    <div className="login-root">

      {/* Left panel — branding */}
      <div className="login-left">
        <div className="login-left-inner">
          <div className="brand-logo">TH</div>
          <h1 className="brand-name">TruHarvest</h1>
          <p className="brand-tagline">
            Empowering farmers with smart, transparent supply chains.
          </p>
          <ul className="brand-features">
            <li>Track crops from farm to market</li>
            <li>Real-time yield analytics</li>
            <li>Secure and verified transactions</li>
          </ul>
        </div>
      </div>

      {/* Right panel — login */}
      <div className="login-right">
        <div className="login-card">
          <p className="login-eyebrow">Welcome back</p>
          <h2 className="login-title">Sign in to TruHarvest</h2>
          <p className="login-sub">
            Use your TruHarvest account credentials to continue.
          </p>

          <button
            className="login-btn"
            onClick={() => keycloak.login()}
          >
            Sign in
          </button>

          <p className="login-footer">
            Protected by Keycloak SSO &mdash; your data is safe.
          </p>
        </div>
      </div>

    </div>
  )
}

export default LoginPage
