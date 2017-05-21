require('babel-register');
require('babel-polyfill');
['./css', '.less', '.sass', '.ttf', '.woff', '.woff2', '.jpg', '.png'].forEach((ext) => require.extensions[ext] = () => {
})
process.env.NODE_ENV = 'development'
require('./server')