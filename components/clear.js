/**
 * External dependancies
 */
import { Button } from 'react-bootstrap';
import { MdContentCut } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function ClearButton({ text = '', handle }) {
	return (
		text.length && (
			<div className="clear-btn">
				<Button variant="outline-light" size="sm" onClick={() => handle('')}>
					<MdContentCut />
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
