import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import keycloak from './keycloak.js'

// check-sso: silently checks if user is already logged in
// If not logged in → app loads anyway → we show our custom login page
// If logged in    → app loads         → we show the dashboard
keycloak.init({ onLoad: 'check-sso' }).then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App keycloak={keycloak} />
    </StrictMode>,
  )
})
