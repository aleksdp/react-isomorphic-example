import prod from './config_prod'
import dev from './config_dev'

let config

switch (process.env.NODE_ENV) {
    case 'production': {
        config = prod
    }
        break
    case 'development': {
        config = dev
    }
        break
    default: {
        config = prod
    }
}

export default config