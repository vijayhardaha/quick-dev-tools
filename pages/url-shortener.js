/**
 * External dependancies
 */
import validUrl from 'valid-url';
import TinyURL from 'tinyurl';
import { useClipboard } from 'xooks';
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

/**
 * Internal dependancies
 */
import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';
import CopyCodeButton from '../lib/copy-btn';
import { cleanText } from '../lib/helper';

export default function UrlShortner() {
	const defaultData = `https://example.com/\nhttps://www.google.com/\nhttps://www.facebook.com/\nhttps://twitter.com/\nhttps://github.com/`;
	const clipboard = useClipboard({ timeout: 500 });
	const [text, setText] = useState(defaultData);
	const [results, setResults] = useState('');
	const [loading, setLoading] = useState(false);

	const getUrl = async (url) => {
		if (url == null || url == '') return '';
		const data = await TinyURL.shorten(url).then((res) => {
			return res;
		});
		return data;
	};

	const getResults = async () => {
		const lines = cleanText(text);
		let result = '';
		for (let string of lines) {
			const url = string.trim();
			if (validUrl.isUri(url)) {
				const shortUrl = await Promise.resolve(getUrl(url));
				result += `${shortUrl}\n`;
			} else {
				result += 'Invalid url\n';
			}
		}

		return result.trim();
	};

	const handleClick = async () => {
		setLoading(true);
		const data = await Promise.resolve(getResults());
		setResults(data);
		setLoading(false);
	};

	return (
		<div className="app">
			<Meta />
			<div className="app-container">
				<Sidebar />
				<section className="app-main">
					<header className="page-header">
						<h1 className="page-title">URL Shortener</h1>
						<p className="page-desc">Convert images or files to base64, generate styles to use as background image.</p>
					</header>

					<div className="app-content">
						<Form.Group controlId="inputString">
							<Form.Control
								as="textarea"
								rows={8}
								value={text}
								placeholder="Write one text per line to shorten multiple urls at once."
								onChange={(e) => {
									setText(e.target.value), setResults('');
								}}
							/>
							{text.length > 0 && !loading && (
								<div className="clear-btn">
									<Button variant="light" size="sm" onClick={() => setText('')}>
										Clear
									</Button>
								</div>
							)}
						</Form.Group>
						<Form.Group>
							<Button type="button" variant="primary" disabled={loading} onClick={!loading ? handleClick : null}>
								{loading ? 'Generating Urls...' : 'Generate Short Urls'}
							</Button>
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
								<CopyCodeButton copied={clipboard.copied} onClick={() => clipboard.copy(results)} />
							</Form.Group>
						)}
					</div>
				</section>
			</div>
		</div>
	);
}
