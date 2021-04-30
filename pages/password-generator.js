/**
 * External dependancies
 */
import { useClipboard } from 'xooks';
import { useState, useEffect } from 'react';
import { Row, Col, Form, Button, InputGroup, Card } from 'react-bootstrap';
import generator from 'generate-password';
import Slider from 'react-rangeslider';

/**
 * Internal dependancies
 */
import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';

export default function PasswordGenerator() {
	const clipboard = useClipboard({ timeout: 500 });

	const defaultOptions = [
		{ key: 'uppercase', name: 'Uppercase', checked: true },
		{ key: 'lowercase', name: 'Lowercase', checked: true },
		{ key: 'numbers', name: 'Numbers', checked: true },
		{ key: 'symbols', name: 'Symbols', checked: true },
	];

	const [options, setOptions] = useState(defaultOptions);
	const [length, setLength] = useState(32);

	const getOption = (o) => options.filter((c) => c.key === o).map((c) => c.checked)[0];
	const isNumber = (num) => !isNaN(parseFloat(num)) && isFinite(num);

	const generatePassword = () => {
		return generator.generate({
			length: length,
			numbers: getOption('numbers'),
			lowercase: getOption('lowercase'),
			uppercase: getOption('uppercase'),
			symbols: getOption('symbols'),
		});
	};

	const [password, setPassword] = useState('');

	useEffect(() => {
		const defaultPassword = generatePassword();
		setPassword(defaultPassword);
	}, []);

	return (
		<div className="app">
			<Meta />
			<div className="app-container">
				<Sidebar />
				<section className="app-main">
					<header className="page-header">
						<h1 className="page-title">Password Generator</h1>
						<p className="page-desc">Javascript tool to generate random passwords. You can customize the password length and the security level.</p>
					</header>

					<div className="app-content">
						<Row>
							<Col sm="12">
								<Card>
									<Card.Body className="text-center">
										<h1 className="my-5" style={{ wordBreak: 'break-all' }}>
											{password}
										</h1>
										<div style={{ maxWidth: '100%', width: 600, margin: '1.5rem auto' }}>
											<Slider
												min={1}
												max={50}
												value={length}
												onChange={(val) => {
													if (isNumber(val) && val > 0) {
														setLength(val);
														setPassword(generatePassword());
													}
												}}
											/>
										</div>
										<div className="mb-4 mt-4">
											<Form.Group>
												{defaultOptions.map((option, idx) => (
													<Form.Check
														custom
														inline
														key={idx}
														id={option.key}
														name={option.key}
														type="checkbox"
														label={option.name}
														checked={options[idx].checked === true}
														onChange={(e) => {
															const _options = [...options];
															_options[idx].checked = e.target.checked;
															setOptions(_options);
															setPassword(generatePassword());
														}}
													/>
												))}
											</Form.Group>
										</div>
										<div className="mb-5">
											<Button variant="primary" onClick={() => setPassword(generatePassword())}>
												Generate
											</Button>
											<Button variant="success" onClick={() => clipboard.copy(password)}>
												{clipboard.copied ? 'Password Copied!' : 'Copy Password'}
											</Button>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</div>
				</section>
			</div>
		</div>
	);
}
