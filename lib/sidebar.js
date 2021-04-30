/**
 * External dependancies
 */
import { useRef } from 'react';
import Link from 'next/link';
import Scrollbars from 'react-custom-scrollbars-2';

/**
 * Internal dependancies
 */
import ActiveLink from './active-link';
import { TOOLS } from './constants';

export default function Sidebar() {
	const scrollbars = useRef();

	const items = TOOLS.map((tool) => (
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
				<div className="site-logo">
					<h1>
						<Link href="/">
							<a>Quick Tools</a>
						</Link>
					</h1>
					<p>Dev tools for everyday use</p>
				</div>
				<Scrollbars universal className="scrollbar" style={{ width: '100%' }} ref={scrollbars}>
					<ul className="nav-links">{items}</ul>
				</Scrollbars>
			</div>
		</aside>
	);
}
