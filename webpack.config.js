const path = require('path');const basePath = __dirname;

const distPath = 'dist';
const webpackInitConfig = {
    mode: 'development',
    name: 'vds',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/js/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: 'vira-design-system.js'
    }
};

module.exports = webpackInitConfig;