const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./src/app.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: [/node_modules/]
            },
        ]
    },
    target: "node",
    externals: [nodeExternals()],
    mode: "development",
    watch: true,
    node: {
        net: "empty",
        fs: "empty"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    }
};