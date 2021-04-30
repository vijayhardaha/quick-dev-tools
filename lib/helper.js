/**
 * External dependancies
 */
import { saveAs } from 'file-saver';

export const downloadText = (string = '', name = 'download') => {
	const blob = new Blob([string], { type: 'text/plain;charset=utf-8' });
	return saveAs(blob, `${name}-${Date.now()}.txt`);
};
