/**
 * External dependancies
 */
import slugify from 'slugify';
import latinize from 'latinize';
import { useClipboard } from 'xooks';
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

/**
 * Internal dependancies
 */
import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';
import { downloadText } from '../lib/helper';

export default function Slugify() {
	const clipboard = useClipboard({ timeout: 500 });
	const [text, setText] = useState('');
	const [replacement, setReplacement] = useState('-');
	const [lowercase, setLowercase] = useState(true);
	const radios = [
		{ name: 'Separate with dash (-)', value: '-' },
		{ name: 'Separate with underscore (_)', value: '_' },
	];

	const showResults = () => {
		const lines = latinize(text.trim()).split('\n');
		let result = '';
		for (let string of lines) {
			result += slugify(string.trim(), {
				replacement: replacement,
				lower: lowercase,
				strict: true,
			});
			result += '\n';
		}
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
						<h1 className="page-title">Slugify</h1>
						<p className="page-desc">
							Smart, fast and easy to use tool built to generate search engine friendly and user friendly URL slugs.You can generate multiple slugs as
							well.
						</p>
					</header>

					<div className="app-content">
						<div className="d-flex align-items-center">
							<Form.Group controlId="replacement" className="check-btn-group">
								{radios.map((radio, idx) => (
									<Form.Check
										key={idx}
										id={`replacement-${idx}`}
										inline
										name="replacement"
										type="radio"
										label={radio.name}
										value={radio.value}
										checked={replacement === radio.value}
										onChange={(e) => setReplacement(e.currentTarget.value)}
									/>
								))}
							</Form.Group>

							<Form.Group controlId="lowercase" className="check-btn-group">
								<Form.Check
									inline
									name="lowercase"
									type="checkbox"
									label="Convert to lowercase"
									value={lowercase}
									checked={lowercase}
									onChange={() => setLowercase(!lowercase)}
								/>
							</Form.Group>

							<Form.Group className="ml-auto">
								<Button variant="dark" size="sm" onClick={() => setText('')}>
									Clear
								</Button>
							</Form.Group>
						</div>
						<Row>
							<Col sm="12" md="6">
								<Form.Group controlId="inputString">
									<Form.Control
										as="textarea"
										rows={14}
										value={text}
										placeholder="Write one text per line to generate multiple slugs at once."
										onChange={(e) => setText(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col sm="12" md="6">
								<Form.Group controlId="inputString">
									<Form.Control
										as="textarea"
										rows={14}
										readOnly
										value={results}
										placeholder="Results will be shown here."
										onClick={(e) => e.target.select()}
									/>
								</Form.Group>
								{results.length > 0 && (
									<>
										<Button variant="success" onClick={() => clipboard.copy(results)}>
											{clipboard.copied ? 'Copied!' : 'Copy to Clipboard'}
										</Button>
										<Button variant="info" onClick={() => downloadText(results)}>
											Download to TXT File
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
