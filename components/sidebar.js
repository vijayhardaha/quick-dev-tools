/**
 * External dependancies
 */
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Scrollbars from 'react-custom-scrollbars-2';

/**
 * Internal dependancies
 */
import { TOOLS } from '../lib/constants';
import { findCurrentIndex } from '../lib/utils';
import ActiveLink from './link';

const LINK_HEIGHT = 72;

export default function Sidebar() {
	const scrollbars = useRef();
	const { asPath } = useRouter();
	const [current, setCurrent] = useState(findCurrentIndex(asPath));

	useEffect(() => {
		const currentIndex = findCurrentIndex(asPath);
		setCurrent(currentIndex);
		scrollbars.current && scrollbars.current.scrollTop(currentIndex * LINK_HEIGHT);
	}, [asPath]);

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
					<h1 className="mb-1 h2">
						<Link href="/">
							<a>Quick Tools</a>
						</Link>
					</h1>
					<p className="text-muted mb-0">Dev tools for everyday use</p>
				</div>
				<Scrollbars universal className="scrollbar" style={{ width: '100%' }} ref={scrollbars}>
					<div className="nav-wrap">
						<ul className="nav-links">{items}</ul>
						<div
							className="nav-scroller"
							style={{
								transform: current !== -1 ? `translateY(${current * 72}px)` : 'scaleY(0)',
							}}
						></div>
					</div>
				</Scrollbars>
			</div>
		</aside>
	);
}
