const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        devtoolLineToLine: true,
        sourceMapFilename: "./bundle.js.map",
        pathinfo: true,
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".js", ".json", ".css"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, use: ["source-map-loader", "babel-loader"],enforce: "pre"}

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            //{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};