/**
 * External dependancies
 */
import { Form, Button } from 'react-bootstrap';
import { minify } from 'terser';
import { useState, useEffect } from 'react';

/**
 * Internal dependancies
 */
import Page from '../components/page';
import Results from '../components/results';

function useAsyncHook(text) {
	const [results, setResults] = useState('');

	useEffect(() => {
		async function getResults() {
			try {
				const result = await minify(text, { compress: false, format: { comments: false } });
				setResults(result.code);
			} catch (error) {
				const { message } = error;
				console.log(message);
			}
		}
		getResults();
	}, [text]);

	return [results];
}

export default function JSMinifier() {
	const defaultText =
		`// input from the user\nconst min = parseInt(prompt("Enter a min value: "));\nconst max = parseInt(prompt("Enter a max value: "));\n\n// generating a random number\nconst a = Math.floor(Math.random() * (max - min + 1)) + min;\n\n// display a random number\n` +
		'console.log(`Random value between ${min} and ${max} is ${a}`);';

	const [text, setText] = useState(defaultText);
	const [results] = useAsyncHook(text);

	return (
		<Page>
			<Form.Group controlId="input-text">
				<Form.Control as="textarea" rows={8} value={text} placeholder="Copy & Paste JavaScript code here" onChange={(e) => setText(e.target.value)} />
				{text.length > 0 && (
					<div className="clear-btn">
						<Button variant="outline-light" size="sm" onClick={() => setText('')}>
							Clear
						</Button>
					</div>
				)}
			</Form.Group>

			{results.length > 0 && <Results results={results} lang="js"/>}
		</Page>
	);
}
