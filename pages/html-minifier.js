/**
 * External dependancies
 */
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useClipboard } from 'xooks';
import { useState } from 'react';
import { minify } from 'html-minifier-terser';

/**
 * Internal dependancies
 */
import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';
import CopyCodeButton from '../lib/copy-btn';

export default function HTMLMinifier() {
	const clipboard = useClipboard({ timeout: 500 });
	const [text, setText] = useState('');

	const getResults = () => {
		const minified = minify(text, {
			collapseWhitespace:true
		});
		return minified;
	};

	const results = getResults();

	return (
		<div className="app">
			<Meta />
			<div className="app-container">
				<Sidebar />
				<section className="app-main">
					<header className="page-header">
						<h1 className="page-title">HTML Minifier</h1>
						<p className="page-desc">A simple tool to minify html.</p>
					</header>

					<div className="app-content">
						<Row>
							<Col sm="12" md="6">
								<Form.Group controlId="inputString">
									<Form.Control
										as="textarea"
										rows={14}
										value={text}
										placeholder="Put your html code here."
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
