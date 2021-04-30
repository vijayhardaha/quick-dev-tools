/**
 * External dependancies
 */
import { useClipboard } from 'xooks';
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

/**
 * Internal dependancies
 */
import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';

export default function HtmlMinifier() {
	const clipboard = useClipboard({ timeout: 500 });
	const [text, setText] = useState('');

	const showResults = () => {
		let result = '';
		return result.trim();
	};

	const results = showResults();

	return (
		<div className="app">
			<Meta />
			<div className="app-container">
				<Sidebar />
				<section className="app-main">
					<header className="page-header">
						<h1 className="page-title">HTML Minifier</h1>
						<p className="page-desc">Minify HTML and any CSS or JS included in your markup.</p>
					</header>

					<div className="app-content">
						<Row>
							<Col sm="12" md="6">
								<Form.Group controlId="inputString">
									<Form.Control
										as="textarea"
										rows={14}
										value={text}
										placeholder="Paste your html code here"
										onChange={(e) => setText(e.target.value)}
									/>
								</Form.Group>
								<div>
									<Button variant="dark" onClick={() => setText('')}>
										Clear
									</Button>
								</div>
							</Col>
							<Col sm="12" md="6">
								<Form.Group controlId="inputString">
									<Form.Control as="textarea" rows={14} readOnly value={results} placeholder="Results will be shown here." />
								</Form.Group>
								{results.length > 0 && (
									<>
										<Button variant="primary" onClick={() => clipboard.copy(results)}>
											{clipboard.copied ? 'Copied!' : 'Copy to Clipboard'}
										</Button>
									</>
								)}
							</Col>
						</Row>
					</div>
				</section>
			</div>
		</div>
	);
}
