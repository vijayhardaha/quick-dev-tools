/**
 * External dependancies
 */
import { useClipboard } from 'xooks';
import { useState } from 'react';
import { Row, Col, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

/**
 * Internal dependancies
 */
import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';

export default function TextToArray() {
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
						<h1 className="page-title">Text &rarr; Array</h1>
						<p className="page-desc">
							This is a simple helping tool to create the php/js array from texts. This tool will automatically generate array keys for provided
							texts.
						</p>
					</header>

					<div className="app-content">
						<Form.Check inline >
							<Form.Check.Label>
								Allow us to contact you?
								<Form.Check.Input name="group1" type="radio" id={`inline-2`}/>
							</Form.Check.Label>
						</Form.Check>

						<ButtonGroup toggle className="mb-2">
							<ToggleButton type="checkbox" variant="outline-primary" value="1">
								Checked
							</ToggleButton>
						</ButtonGroup>
						<Row>
							<Col sm="12" md="6">
								<Form.Group controlId="inputString">
									<Form.Control
										as="textarea"
										rows={14}
										value={text}
										placeholder="Write one option value per line."
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
