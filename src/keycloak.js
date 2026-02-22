import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url:      import.meta.env.VITE_KEYCLOAK_URL,
  realm:    'truharvest',
  clientId: 'truharvest-ui',
})

export default keycloak
