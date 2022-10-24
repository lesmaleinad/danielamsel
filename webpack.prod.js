const path = require('path');

module.exports = {
	mode: 'production',
	entry: './public/src/index.js',
	output: {
		path: path.join(__dirname, 'public/scripts'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: [/node_modules/, /views/], loader: 'babel-loader' }
		]
	}
};
