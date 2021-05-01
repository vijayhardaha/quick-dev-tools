/**
 * External dependancies
 */
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import latinize from 'latinize';
import slugify from 'slugify';

/**
 * Internal dependancies
 */
import CopyCodeButton from '../components/copy';
import Page from '../components/page';

export default function Slugify() {
	const defaultData = `What’s New in the Block Editor\nIntroducing Milestone Notifications\nDesign Update for a More Intuitive Experience\nPublish and Update WordPress Posts Directly From Ulysses\nIntroducing new Stats widgets for iPhone\nWhat’s New in the Block Editor: Edit Your Images, Drag and Drop Blocks and Patterns, and More\nTurn Your WordPress.com Blog into a Podcast with Anchor\nShowcase Your Figma Designs on WordPress P2`;

	const [text, setText] = useState(defaultData);
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
		<Page>
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
			</div>

			<Form.Group controlId="inputString">
				<Form.Control
					as="textarea"
					rows={8}
					value={text}
					placeholder="Write one text per line to generate multiple slugs at once."
					onChange={(e) => setText(e.target.value)}
				/>
				{text.length > 0 && (
					<div className="clear-btn">
						<Button variant="light" size="sm" onClick={() => setText('')}>
							Clear
						</Button>
					</div>
				)}
			</Form.Group>
			{results.length > 0 && (
				<Form.Group controlId="inputString">
					<Form.Control
						as="textarea"
						rows={8}
						readOnly
						value={results}
						placeholder="Results will be shown here."
						onClick={(e) => e.target.select()}
					/>
					<CopyCodeButton text={results} />
				</Form.Group>
			)}
		</Page>
	);
}
