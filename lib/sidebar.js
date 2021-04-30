import Link from 'next/link';
import Scrollbars from 'react-custom-scrollbars-2';
import { useRef } from 'react';
import {
	BsLink,
	BsFilter,
	BsFileEarmarkCode,
	BsCode,
	BsCodeSlash,
	BsArrowsAngleContract,
	BsLock,
} from 'react-icons/bs';

import ActiveLink from './active-link';

export default function Sidebar() {
	const scrollbars = useRef();
	const tools = [
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
			link: '/minifier',
			name: 'Minify',
			icon: <BsArrowsAngleContract />,
			description: 'Make your website smaller and faster to load by minifying the JS and CSS code.',
		},
		{
			link: '/html-minifier',
			name: 'HTML Minifier',
			icon: <BsCodeSlash />,
			description: 'A simple tool to minify html.',
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

	const items = tools.map((tool) => (
		<li key={tool.name}>
			<ActiveLink href={tool.link}>
				<a className="link-item">
					<span className="icon">{tool.icon}</span>
					<span className="text">{tool.name}</span>
				</a>
			</ActiveLink>
		</li>
	));

	return (
		<aside className="app-sidebar">
			<div>
				<h1 className="site-logo">
					<Link href="/">
						<a>Quick Tools</a>
					</Link>
				</h1>

				<Scrollbars universal className="scrollbar" style={{ width: '100%' }} ref={scrollbars}>
					<ul className="nav-links">{items}</ul>
				</Scrollbars>
			</div>
		</aside>
	);
}
