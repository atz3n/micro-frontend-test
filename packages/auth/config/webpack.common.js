module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
                plugins: ['@babel/plugin-transform-runtime'],
            },
        }],
    },
};
