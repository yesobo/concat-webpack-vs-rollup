module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        libraryTarget: "umd"
    },
    externals: {
        angular: 'angular'
    }
};