/**
 * External dependancies
 */
import { minify } from 'html-minifier-terser';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

/**
 * Internal dependancies
 */
import Results from '../components/results';
import Page from '../components/page';

export default function HTMLMinifier() {
	const defaultText = `<!DOCTYPE html>\n\t<html lang="en">\n\t<head>\n\t\n\t<script>\n\t\t// Just a lil’ script to show off that inline JS gets highlighted\n\t\twindow.console && console.log('foo');\n\t</script>\n\t<meta charset="utf-8" />\n\t<link rel="icon" href="assets/favicon.png" />\n\t<title>Prism</title>\n\t<link rel="stylesheet" href="assets/style.css" />\n\t<link rel="stylesheet" href="themes/prism.css" data-noprefix />\n\t<script src="assets/prefixfree.min.js"></script>\n\t\n\t<script>var _gaq = [['_setAccount', 'UA-33746269-1'], ['_trackPageview']];</script>\n\t<script src="https://www.google-analytics.com/ga.js" async></script>\n\t</head>\n<body>`;

	const [text, setText] = useState(defaultText);

	const getResults = () => {
		const minified = minify(text, {
			collapseWhitespace: true,
		});
		return minified;
	};

	const results = getResults();

	return (
		<Page>
			<Form.Group controlId="input-text">
				<Form.Control as="textarea" rows={8} value={text} placeholder="Copy & Paste html code here" onChange={async (e) => setText(e.target.value)} />
				{text.length > 0 && (
					<div className="clear-btn">
						<Button variant="light" size="sm" onClick={() => setText('')}>
							Clear
						</Button>
					</div>
				)}
			</Form.Group>

			<Results results={results} lang="html"/>
		</Page>
	);
}
