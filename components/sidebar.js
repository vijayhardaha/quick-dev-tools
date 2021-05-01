/**
 * External dependancies
 */
import { useRef } from 'react';
import Link from 'next/link';
import Scrollbars from 'react-custom-scrollbars-2';

/**
 * Internal dependancies
 */
import { TOOLS } from '../lib/constants';
import ActiveLink from './link';

export default function Sidebar({ open, toogle }) {
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
		<>
			<div class="menu" onClick={() => toogle(!open)}>
				<label>
					<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
						<path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
						<path class="line--2" d="M0 50h70" />
						<path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
					</svg>
				</label>
			</div>
			<aside className="app-sidebar">
				<div className="sidebar-wrapper">
					<div className="site-logo mb-3">
						<h1 className="mb-1 h2">
							<Link href="/">
								<a>Quick Tools</a>
							</Link>
						</h1>
						<p className="text-muted mb-0">Dev tools for everyday use</p>
					</div>
					<Scrollbars universal className="scrollbar" style={{ width: '100%' }} ref={scrollbars}>
						<ul className="nav-links">{items}</ul>
					</Scrollbars>
				</div>
			</aside>
		</>
	);
}
