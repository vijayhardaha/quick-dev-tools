/**
 * External dependancies
 */
import { useRef } from 'react';
import Prism from 'prismjs';
import PrismCode from 'react-prism';
import Scrollbars from 'react-custom-scrollbars-2';

/**
 * Internal dependancies
 */
import CopyCodeButton from '../components/copy';

export default function Results({ results, lang = 'markup' }) {
	const ref = useRef();

	return (
		results.trim().length > 0 && (
			<div className="results-container">
				<CopyCodeButton text={results} />
				<Scrollbars universal className="scrollbar" ref={ref} style={{ width: '100%' }}>
					<PrismCode component="pre" className={`language-${lang}`}>
						{results}
					</PrismCode>
				</Scrollbars>
			</div>
		)
	);
}
