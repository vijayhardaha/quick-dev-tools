/**
 * External dependancies
 */
import { BsLink, BsFilter, BsFileEarmarkCode, BsCode, BsCodeSlash, BsArrowsAngleContract, BsLock } from 'react-icons/bs';

export const TOOLS = [
	{
		link: '/slugify',
		name: 'Slugify',
		icon: <BsLink />,
		description: 'Smart, fast and easy to use tool built to generate search engine friendly and user friendly URL slugs',
	},
	{
		link: '/url-shortener',
		name: 'URL Shortener',
		icon: <BsFilter />,
		description: 'Convert images or files to base64, generate styles to use as background image',
	},
	{
		link: '/html-minifier',
		name: 'HTML Minifier',
		icon: <BsCodeSlash />,
		description: 'A simple tool to minify html.',
	},
	{
		link: '/css-minifier',
		name: 'CSS Minifier',
		icon: <BsArrowsAngleContract />,
		description: 'Make your website smaller and faster to load by minifying the CSS code.',
	},
	{
		link: '/js-minifier',
		name: 'JS Minifier',
		icon: <BsArrowsAngleContract />,
		description: 'Make your website smaller and faster to load by minifying the JS code.',
	},
	{
		link: '/dropdown-to-array',
		name: 'Dropdown → Array',
		icon: <BsCode />,
		description: 'A simple tool to convert HTML select tag to php/js array.',
	},
	{
		link: '/text-to-array',
		name: 'Text → Array',
		icon: <BsFileEarmarkCode />,
		description: 'A simple tool to convert text lines to php/js array.',
	},
	{
		link: '/password-generator',
		name: 'Password Generator',
		icon: <BsLock />,
		description: 'A simple random password generator tool.',
	},
];
