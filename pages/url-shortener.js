/**
 * External dependancies
 */
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import TinyURL from 'tinyurl';
import validUrl from 'valid-url';

/**
 * Internal dependancies
 */
import { cleanText } from '../lib/utils';
import ClearButton from '../components/clear';
import Page from '../components/page';
import Results from '../components/results';

const defaultText = `https://example.com/\nhttps://www.google.com/\nhttps://www.facebook.com/\nhttps://twitter.com/\nhttps://github.com/`;

export default function UrlShortner() {
	const [text, setText] = useState(defaultText);
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
		<Page>
			<Form.Group controlId="input-text">
				<Form.Control
					as="textarea"
					rows={8}
					value={text}
					placeholder="Write one text per line to shorten multiple urls at once."
					onChange={(e) => {
						setText(e.target.value), setResults('');
					}}
				/>

				<ClearButton text={text} handle={setText} />
			</Form.Group>

			<Form.Group>
				<Button type="button" variant="primary" disabled={loading} onClick={!loading ? handleClick : null}>
					{loading ? 'Generating Urls...' : 'Generate Short Urls'}
				</Button>
			</Form.Group>

			<Results results={results} />
		</Page>
	);
}
