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
import { dropdownToArray } from '../lib/helper';
import CopyCodeButton from '../lib/copy-btn';

export default function DropdownToArray() {
	const defaultData = `<select id="country" name="country">\n\t<option value="Afganistan">Afghanistan</option>\n\t<option value="Albania">Albania</option>\n\t<option value="Algeria">Algeria</option>\n\t<option value="American Samoa">American Samoa</option>\n\t<option value="Andorra">Andorra</option>\n\t<option value="Angola">Angola</option>\n\t<option value="Anguilla">Anguilla</option>\n\t<option value="Antigua & Barbuda">Antigua & Barbuda</option>\n\t<option value="Argentina">Argentina</option>\n\t<option value="Armenia">Armenia</option>\n\t<option value="Aruba">Aruba</option>\n\t<option value="Australia">Australia</option>\n</select>`;
	const clipboard = useClipboard({ timeout: 500 });
	const [text, setText] = useState(defaultData);
	const [outputType, setOutputType] = useState('json');
	const [arrayType, setArrayType] = useState('associative');

	const outputTypes = [
		{ name: 'Json', value: 'json' },
		{ name: 'JS Array', value: 'js_array' },
		{ name: 'JS Object', value: 'js_object' },
		{ name: 'Php', value: 'php' },
		{ name: 'WordPress', value: 'wp' },
	];

	const arrayTypes = [
		{ name: 'Associative', value: 'associative' },
		{ name: 'Numeric', value: 'numeric' },
		{ name: 'Simple', value: 'simple' },
	];

	const results = dropdownToArray(text, outputType, arrayType);

	return (
		<div className="app">
			<Meta />
			<div className="app-container">
				<Sidebar />
				<section className="app-main">
					<header className="page-header">
						<h1 className="page-title">Dropdown &rarr; Array</h1>
						<p className="page-desc">This is a simple helping tool to create the php/js array from dropdown options(select tag).</p>
					</header>

					<div className="app-content">
						<div>
							<label className="">Output Type:</label>
							<div className="d-flex align-items-center">
								<Form.Group controlId="outputType" className="check-btn-group">
									{outputTypes.map((radio, idx) => (
										<Form.Check
											key={idx}
											id={`outputType-${idx}`}
											inline
											name="outputType"
											type="radio"
											label={radio.name}
											value={radio.value}
											checked={outputType === radio.value}
											onChange={(e) => setOutputType(e.currentTarget.value)}
										/>
									))}
								</Form.Group>
							</div>
							{outputType !== 'json' && (
								<div className="d-flex align-items-center">
									<Form.Group controlId="arrayType" className="check-btn-group">
										{arrayTypes.map((radio, idx) => (
											<Form.Check
												key={idx}
												id={`arrayType-${idx}`}
												inline
												name="arrayType"
												type="radio"
												label={radio.name}
												value={radio.value}
												checked={arrayType === radio.value}
												onChange={(e) => setArrayType(e.currentTarget.value)}
											/>
										))}
									</Form.Group>
								</div>
							)}
						</div>
						<Row>
							<Col sm="12" md="6">
								<Form.Group controlId="inputString">
									<Form.Control
										as="textarea"
										rows={14}
										value={text}
										placeholder="Just put your select tag html code here"
										onChange={(e) => setText(e.target.value)}
									/>
									{text.length && (
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
									<Form.Control as="textarea" rows={14} readOnly value={results} placeholder="Results will be shown here." />{' '}
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
