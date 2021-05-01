/**
 * External dependancies
 */
import { minify } from 'csso';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

/**
 * Internal dependancies
 */
import Page from '../components/page';
import Results from '../components/results';

export default function CSSMinifier() {
	const defaultText = `html {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\nbody {\n\tmargin: 0;\n}\nmain {\n\tdisplay: block;\n}`;

	const [text, setText] = useState(defaultText);

	const getResults = () => {
		return minify(text).css;
	};

	const results = getResults();

	return (
		<Page>
			<Form.Group controlId="input-text">
				<Form.Control as="textarea" rows={8} value={text} placeholder="Copy & Paste CSS code here" onChange={async (e) => setText(e.target.value)} />
				{text.length > 0 && (
					<div className="clear-btn">
						<Button variant="outline-light" size="sm" onClick={() => setText('')}>
							Clear
						</Button>
					</div>
				)}
			</Form.Group>

			<Results results={results} lang="css"/>
		</Page>
	);
}
