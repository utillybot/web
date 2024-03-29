/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration } from 'webpack';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import 'webpack-dev-server';

const config = (): Configuration => {
	const mode =
		process.env.NODE_ENV == 'production' ? 'production' : 'development';

	const devMode = mode == 'development';

	const babelLoader = {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/env'],
			plugins: ['@babel/plugin-transform-runtime'],
		},
	};

	const tsLoader = {
		loader: 'ts-loader',
		options: { transpileOnly: true },
	};

	const baseConfig: Configuration = {
		entry: './src/index.tsx',
		mode: mode,
		module: {
			rules: [
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					use: [babelLoader, tsLoader],
				},
			],
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/',
		},
		plugins: [
			new CopyWebpackPlugin({
				patterns: [{ from: './public' }],
			}),
			new ForkTsCheckerWebpackPlugin({
				async: false,
				eslint: { files: './**/*.{ts,tsx,js,jsx}' },
			}),
			new HtmlWebpackPlugin({ template: 'index.html' }),
			new FaviconsWebpackPlugin({
				logo: './assets/logo.png',
				prefix: 'static/favicons',
				outputPath: 'static/favicons',
				cache: true,
				favicons: {
					appName: 'Utilly',
					appDescription: 'The tool for the job',
					developerName: 'jtsshieh',
					developerURL: null, // prevent retrieving from the nearest package.json
					background: '#ddd',
					theme_color: '#007aff',
				},
			}),
		],
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
	};

	if (devMode) {
		baseConfig.devServer = {
			contentBase: path.join(__dirname, 'public'),
			compress: true,
			port: 4000,
			historyApiFallback: true,
		};
		baseConfig.devtool = 'cheap-module-eval-source-map';

		baseConfig.output!.filename = 'static/js/[name].js';

		baseConfig.resolve!.alias = {
			'react-dom$': 'react-dom/profiling',
			'scheduler/tracing': 'scheduler/tracing-profiling',
		};
	} else {
		baseConfig.devtool = 'source-map';
		baseConfig.optimization = {
			minimize: !devMode,
			minimizer: [new TerserPlugin({ sourceMap: true })],
			splitChunks: {
				chunks: 'all',
			},
			runtimeChunk: true,
		};

		baseConfig.output!.filename = 'static/js/[name].[contenthash].js';
	}

	const fileLoader = {
		loader: 'file-loader',
		options: {
			name: 'static/assets/[name].[ext]?[contenthash]',
		},
	};

	baseConfig.module?.rules?.push({
		test: /\.(jpg|png|gif|svg|pdf|ico)$/,
		use: [fileLoader],
	});

	return baseConfig;
};
export default config;
