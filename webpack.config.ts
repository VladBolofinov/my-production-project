import path from 'path';
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack';

const config:webpack.Configuration = {
    mode: 'development',//тип сборки (есть production он автоматически минимифицирует код)
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js", //название главного файла в проекте
        path: path.resolve(__dirname, 'build'),//куда собирается сборка
        clean: true //удаляет предыдущие файлы при новой сборке каждый раз
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;