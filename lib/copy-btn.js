import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CopyCodeButton({ copied, ...others }) {
	return (
		<div className="copy-btn">
			<Button type="button" size="sm" variant={copied ? 'success' : 'light'} {...others}>
				{copied ? 'Copied!' : 'Copy'}
			</Button>
		</div>
	);
}

CopyCodeButton.propTypes = {
	copied: PropTypes.bool.isRequired,
};
