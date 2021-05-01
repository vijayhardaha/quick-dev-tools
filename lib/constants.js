/**
 * External dependancies
 */
import { BsLink, BsFilter, BsFileEarmarkCode, BsCode, BsCodeSlash, BsArrowsAngleContract, BsLock } from 'react-icons/bs';

export const TOOLS = [
	{
		link: '/slugify',
		name: 'Slugify',
		icon: <BsLink />,
		description:
			'Smart, fast and easy to use tool built to generate search engine friendly and user friendly URL slugs.You can generate multiple slugs as well.',
	},
	{
		link: '/url-shortener',
		name: 'URL Shortener',
		icon: <BsFilter />,
		description: 'Simple tool to generate shorten urls in bulk from using TinyURL.com',
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
		description: 'This minifier removes whitespace, strips comments, and optimizes/shortens a few common programming patterns from CSS code.',
	},
	{
		link: '/js-minifier',
		name: 'JS Minifier',
		icon: <BsArrowsAngleContract />,
		description: 'This minifier removes whitespace, strips comments, and optimizes/shortens a few common programming patterns from JS code.',
	},
	{
		link: '/dropdown-to-array',
		name: 'Dropdown → Array',
		icon: <BsCode />,
		description: 'This is a simple helping tool to create the php/js array from dropdown options(select tag).',
	},
	{
		link: '/text-to-array',
		name: 'Text → Array',
		icon: <BsFileEarmarkCode />,
		description:
			'This is a simple helping tool to create the php/js array from texts. This tool will automatically generate array keys for texts list.',
	},
	{
		link: '/password-generator',
		name: 'Password Generator',
		icon: <BsLock />,
		description: 'Javascript tool to generate random passwords. You can customize the password length and the security level.',
	},
];
