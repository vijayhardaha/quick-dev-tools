/**
 * External dependancies
 */
import { minify } from 'html-minifier-terser';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

/**
 * Internal dependancies
 */
import CopyCodeButton from '../components/copy';
import Page from '../components/page';

export default function HTMLMinifier() {
	const [text, setText] = useState('');

	const getResults = () => {
		const minified = minify(text, {
			collapseWhitespace: true,
		});
		return minified;
	};

	const results = getResults();

	return (
		<Page>
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
						{results.length > 0 && <CopyCodeButton text={results} />}
					</Form.Group>
				</Col>
			</Row>
		</Page>
	);
}
