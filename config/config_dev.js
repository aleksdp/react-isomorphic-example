const https = process.env.HTTPS

//
const domain = 'api.zoozz.org'


const origin = `${https ? 'https' : 'http'}://${domain}`
export default {
    domain,
    origin,
    baseUrl: origin + '/api'
}