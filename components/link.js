/**
 * External dependancies
 */
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

export default function ActiveLink({ children, ...props }) {
	const activeClassName = 'active';
	const { asPath } = useRouter();
	const child = Children.only(children);
	const childClassName = child.props.className || '';

	const className = asPath === props.href || asPath === props.as ? `${childClassName} ${activeClassName}`.trim() : childClassName;

	return (
		<Link {...props}>
			{React.cloneElement(child, {
				className: className || null,
			})}
		</Link>
	);
}
