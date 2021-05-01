/**
 * External dependancies
 */
import htmldom from 'htmldom';
import latinize from 'latinize';
import slugify from 'slugify';

/**
 * Internal dependancies
 */
import { TOOLS } from './constants';

export const getMeta = (key) => TOOLS.find(({ link }) => link === key);

export const arrayToObject = (array, key, value) => {
	const initialValue = {};
	return array.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item[value],
		};
	}, initialValue);
};

export const cleanText = (text) =>
	text
		.toString()
		.split('\n')
		.map((l) => l.trim())
		.filter((l) => l.trim() !== '');

export const removeTags = (str) => {
	if (str === null || str === '') return '';
	else str = str.toString();
	return str.replace(/(<([^>]+)>)/gi, '');
};

export const checkType = (content) => {
	let extension;
	content = content.replace(/\/\*.*?\*\//, '');
	if (content.match(/(^|\s|;)(function|var|for|do|while|if|else|new|switch|return)(\s|;|\{|\})/)) {
		extension = 'js';
	} else {
		extension = 'css';
	}
	return extension;
};

const generateArrayOutput = (results, outputType, arrayType) => {
	let output = '';
	if (!results.length) {
		return '';
	}
	switch (outputType) {
		case 'wp':
			output += `$data = array(\n`;
			for (let item of results) {
				switch (arrayType) {
					case 'simple':
						output += `\t'__( '${item.value}', 'text-domain' ),\n`;
						break;
					case 'numeric':
						output += `\t'${item.id}' => __( '${item.value}', 'text-domain' ),\n`;
						break;
					case 'associative':
						output += `\t'${item.key}' => __( '${item.value}', 'text-domain' ),\n`;
					default:
						break;
				}
			}
			output += `);`;
			break;
		case 'php':
			output += `$data = array(\n`;
			for (let item of results) {
				switch (arrayType) {
					case 'simple':
						output += `\t'${item.value}',\n`;
						break;
					case 'numeric':
						output += `\t'${item.id}' => ${item.value}',\n`;
						break;
					case 'associative':
						output += `\t'${item.key}' => ${item.value}',\n`;
					default:
						break;
				}
			}
			output += `);`;
			break;
		case 'js_array':
			switch (arrayType) {
				case 'simple':
					output = results.map((x) => x.value);
					break;
				case 'numeric':
					output = results.map((x) => {
						return { id: x.id, value: x.value };
					});
					break;
				case 'associative':
				default:
					output = results.map((x) => {
						return { key: x.key, value: x.value };
					});
					break;
			}
			output = JSON.stringify(output, null, 2);
			break;
		case 'js_object':
			switch (arrayType) {
				case 'simple':
				case 'numeric':
					output = arrayToObject(results, 'id', 'value');
					break;
				case 'associative':
					output = arrayToObject(results, 'key', 'value');
				default:
					break;
			}
			output = JSON.stringify(output, null, 2);
			break;
		case 'json':
		default:
			output = results.length ? JSON.stringify(results, null, 2) : '';
			break;
	}
	return output;
};

const prepareTextArray = (text) => {
	const lines = cleanText(text);
	let results = [];
	let id = 1;
	for (let value of lines) {
		const key = slugify(latinize(value), {
			replacement: '_',
			lower: true,
			strict: true,
		});
		results.push({ id, key, value });
		id++;
	}
	return results;
};

export const textToArray = (text, outputType, arrayType) => {
	return generateArrayOutput(prepareTextArray(text), outputType, arrayType);
};

const prepareDropdownArray = (text) => {
	const $ = htmldom(text);
	let results = [];
	let id = 1;
	$('option').each((index, item) => {
		const value = removeTags($(item).html());
		const attrValue = $(item).attr('value');
		const slug = (attrValue !== undefined) & (attrValue !== '') ? attrValue : value;
		const key = slugify(latinize(slug), {
			replacement: '_',
			lower: true,
			strict: true,
		});
		results.push({ id, key, value });
		id++;
	});
	return results;
};

export const dropdownToArray = (text, outputType, arrayType) => {
	return generateArrayOutput(prepareDropdownArray(text), outputType, arrayType);
};
