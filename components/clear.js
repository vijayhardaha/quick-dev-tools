/**
 * External dependancies
 */
import { Button } from 'react-bootstrap';
import { MdFlip } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function ClearButton({ text = '', handle }) {
	return (
		text.length > 0 && (
			<div className="clear-btn">
				<Button variant="outline-light" size="sm" onClick={() => handle('')}>
					<MdFlip />
					&nbsp;Clear
				</Button>
			</div>
		)
	);
}

ClearButton.propTypes = {
	text: PropTypes.string.isRequired,
	handle: PropTypes.func.isRequired,
};
