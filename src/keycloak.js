import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url:      'http://localhost:9090',
  realm:    'truharvest',
  clientId: 'truharvest-ui',
})

export default keycloak
