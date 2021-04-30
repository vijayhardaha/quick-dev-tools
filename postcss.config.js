module.exports = {
	plugins: [
		'postcss-flexbugs-fixes',
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009',
				},
				stage: 3,
				features: {
					'custom-properties': false,
				},
			},
		],
		[
			'@fullhuman/postcss-purgecss',
			{
				content: [
					'./node_modules/react-bootstrap/**/*.{js,jsx,ts,tsx}',
					'./node_modules/react-custom-scrollbars-2/**/*.{js,jsx,ts,tsx}',
					'./node_modules/react-rangeslider/**/*.{js,jsx,ts,tsx}',
					'./pages/**/*.{js,jsx,ts,tsx}',
					'./lib/**/*.{js,jsx,ts,tsx}',
				],
				safelist: [
					'html',
					'body',
					'form-check-inline',
					'card',
					'rangeslider',
					/col-*/,
					/btn-*/,
					/custom-*/,
					/card-*/,
					/rangeslider-*/,
					/rangeslider_*/,
					/align-*/,
					/justify*/,
					/d-*/,
				],
				defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
			},
		],
		'postcss-combine-media-query',
	],
};
