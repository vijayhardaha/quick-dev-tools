import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BsFiles, BsCheckAll } from 'react-icons/bs';

export default function CopyCodeButton({ copied, ...others }) {
	return (
		<Button type="button" size="sm" variant={copied ? 'success' : 'primary'} {...others}>
			{copied ? <BsFiles /> : <BsCheckAll />}
		</Button>
	);
}

CopyCodeButton.propTypes = {
	className: PropTypes.string,
	copied: PropTypes.bool.isRequired,
};
