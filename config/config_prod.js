const https = process.env.HTTPS

//
const domain = 'api.zoozz.org'
const defaultLocale = 'en'
const nodeLocales = [
    'ru-RU'
]

const origin = `${https ? 'https' : 'http'}://${domain}`
export default {
    domain,
    origin,
    baseUrl: origin + '/api',
    defaultLocale,
    nodeLocales
}