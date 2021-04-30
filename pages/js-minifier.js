/**
 * External dependancies
 */
import { useClipboard } from 'xooks';
import { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { minify } from 'terser';
/**
 * Internal dependancies
 */
import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';
import CopyCodeButton from '../lib/copy-btn';

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
	const clipboard = useClipboard({ timeout: 500 });
	const [text, setText] = useState('');
	const [results] = useAsyncHook(text);

	return (
		<div className="app">
			<Meta />
			<div className="app-container">
				<Sidebar />
				<section className="app-main">
					<header className="page-header">
						<h1 className="page-title">JS Minifier</h1>
						<p className="page-desc">
							This minifier removes whitespace, strips comments, and optimizes/shortens a few common programming patterns from JS code.
						</p>
					</header>

					<div className="app-content">
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
									{results.length > 0 && <CopyCodeButton copied={clipboard.copied} onClick={() => clipboard.copy(results)} />}
								</Form.Group>
							</Col>
						</Row>
					</div>
				</section>
			</div>
		</div>
	);
}
