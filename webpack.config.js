module.exports = {
	entry: {
		main: "./src/Parent.js"
	},
	output: {
		filename: "bundle.js",
		path: "./public"
	},
	devtool: "sourcemap",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			}
		]
	},
	devServer: {
          contentBase: './public'
        , historyApiFallback: true
        , stats: {
            colors: true
        }
    }
	
}
