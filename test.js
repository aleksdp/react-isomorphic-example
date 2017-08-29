const isBrowser = require('is-browser')

class Config {
    constructor() {
        const {NODE_ENV = 'production', ...rest} = isBrowser ? settings : process.env
        this.env = rest

        this.baseConfig = require(`./config/config.${NODE_ENV}.json`)
        this.config = {}

        this.build(this.env, this.baseConfig)
        this.build(this.baseConfig, this.env)
    }

    build(v1, v2) {
        for (let k in v1) {
            if (Object.prototype.hasOwnProperty.call(v1, k) && /^APP_/.test(k)) {
                this.setProperty(k, v2[k] || v1[k])
            }
        }
    }


    setProperty(key, value) {
        this.config[key] = value
    }

    getConfig() {
        return this.config
    }

}


const config = new Config().getConfig()

console.log(config)