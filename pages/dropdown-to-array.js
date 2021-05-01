/**
 * External dependancies
 */
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

/**
 * Internal dependancies
 */
import { dropdownToArray } from '../lib/utils';
import ClearButton from '../components/clear';
import Page from '../components/page';
import Results from '../components/results';

const defaultText = `<select id="country" name="country">\n\t<option value="Afganistan">Afghanistan</option>\n\t<option value="Albania">Albania</option>\n\t<option value="Algeria">Algeria</option>\n\t<option value="American Samoa">American Samoa</option>\n\t<option value="Andorra">Andorra</option>\n\t<option value="Angola">Angola</option>\n</select>`;

export default function DropdownToArray() {
	const [text, setText] = useState(defaultText);
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
		<Page>
			<div>
				<label className="">Output Options:</label>
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

			<Form.Group controlId="input-text">
				<Form.Control
					as="textarea"
					rows={8}
					value={text}
					placeholder="Just put your select tag html code here"
					onChange={(e) => setText(e.target.value)}
				/>

				<ClearButton text={text} handle={setText} />
			</Form.Group>

			<Results results={results} />
		</Page>
	);
}
