/**
 * External dependancies
 */
import { Button } from 'react-bootstrap';
import { MdContentCopy } from 'react-icons/md';
import { useClipboard } from 'xooks';
import PropTypes from 'prop-types';

export default function CopyCodeButton({ text, ...others }) {
	const clipboard = useClipboard({ timeout: 1000 });
	const copied = clipboard.copied;

	return (
		<div className="copy-btn">
			<Button type="button" size="sm" variant={copied ? 'success' : 'outline-light'} onClick={() => clipboard.copy(text)}>
				<MdContentCopy />
				&nbsp;
				<span>{copied ? 'Copied!' : 'Copy'}</span>
			</Button>
		</div>
	);
}

CopyCodeButton.propTypes = {
	copied: PropTypes.bool.isRequired,
};
