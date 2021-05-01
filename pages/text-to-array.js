/**
 * External dependancies
 */
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

/**
 * Internal dependancies
 */
import { textToArray } from '../lib/utils';
import ClearButton from '../components/clear';
import Page from '../components/page';
import Results from '../components/results';

const defaultText = `Afghanistan\nAlbania\nAlgeria\nAmerican Samoa\nAndorra\nAngola\nAnguilla\nAntigua & Barbuda`;

export default function TextToArray() {
	const [text, setText] = useState(defaultText);
	const [outputType, setOutputType] = useState('json');
	const [arrayType, setArrayType] = useState('associative');

	const outputTypes = [
		{ name: 'Json', value: 'json' },
		{ name: 'JS Array', value: 'js_array' },
		{ name: 'JS Object', value: 'js_object' },
		{ name: 'WordPress', value: 'wp' },
		{ name: 'Php', value: 'php' },
	];

	const arrayTypes = [
		{ name: 'Associative', value: 'associative' },
		{ name: 'Numeric', value: 'numeric' },
		{ name: 'Simple', value: 'simple' },
	];

	const results = textToArray(text, outputType, arrayType);

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
				<Form.Control as="textarea" rows={8} value={text} placeholder="Write one option value per line." onChange={(e) => setText(e.target.value)} />

				<ClearButton text={text} handle={setText} />
			</Form.Group>

			<Results results={results} />
		</Page>
	);
}
