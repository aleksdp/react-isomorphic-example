const path = require("path")
const fs = require("fs")
const webpack = require('webpack')

const config = require('./webpack.config')

const isDev = process.env.NODE_ENV == 'development'

//change entry point
config.entry = "./server/server.js"

//this is node application
config.target = "node"

// remove for prod server eslint-loader
!isDev && config.module.rules.splice(0, 1)

// remove for dev server HotModuleReplacementPlugin
isDev && config.plugins.splice(2, 1)

//remove from server.js all common dependencies
config.externals = [
    (context, request, callback)=> {
        if (request.indexOf('.') != -1) {
            return callback()
        }
        return callback(null, 'commonjs ' + request)
    }

]


config.node = {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
}


config.output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: isDev ? 'http://127.0.0.1:3001/public/' : '/public/',
    filename: 'server.js'
}

module.exports = config
