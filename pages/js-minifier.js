/**
 * External dependancies
 */
import { minify } from 'terser';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

/**
 * Internal dependancies
 */
import CopyCodeButton from '../components/copy';
import Page from '../components/page';

function useAsyncHook(text) {
	const [results, setResults] = useState('');

	useEffect(() => {
		async function getResults() {
			try {
				const result = await minify(text, { compress: false, format: { comments: false } });
				setResults(result.code);
			} catch (error) {
				const { message, filename, line, col, pos } = error;
				console.log(message);
			}
		}
		getResults();
	}, [text]);

	return [results];
}

export default function JSMinifier() {
	const [text, setText] = useState('');
	const [results] = useAsyncHook(text);

	return (
		<Page>
			<Row>
				<Col sm="12" md="6">
					<Form.Group controlId="inputString">
						<Form.Control
							as="textarea"
							rows={14}
							value={text}
							placeholder="Just plain JavaScript or CSS code"
							onChange={async (e) => setText(e.target.value)}
						/>
						{text.length > 0 && (
							<div className="clear-btn">
								<Button variant="light" size="sm" onClick={() => setText('')}>
									Clear
								</Button>
							</div>
						)}
					</Form.Group>
				</Col>
				<Col sm="12" md="6">
					<Form.Group controlId="inputString">
						<Form.Control as="textarea" rows={14} readOnly value={results} placeholder="Results will be shown here." />
						{results.length > 0 && <CopyCodeButton text={results} />}
					</Form.Group>
				</Col>
			</Row>
		</Page>
	);
}
