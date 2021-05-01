/**
 * External dependancies
 */
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

/**
 * Internal dependancies
 */
import { getMeta } from '../lib/utils';
import Meta from './meta';
import Sidebar from './sidebar';

export default function Page({ header = true, children }) {
	const { asPath } = useRouter();
	const meta = getMeta(asPath);
	const title = typeof meta !== 'undefined' ? meta.name : '';
	const desc = typeof meta !== 'undefined' ? meta.description : '';

	return (
		<Container fluid className="px-0">
			<div className="app">
				<Meta meta={meta} />
				<div className="app-container">
					<Sidebar />
					<section className="app-main">
						{header && title !== '' && (
							<header className="page-header">
								<h1 className="page-title my-0">{title}</h1>
								{desc !== '' && <p className="page-desc">{desc}</p>}
							</header>
						)}
						<div className="app-content">{children}</div>
					</section>
				</div>
			</div>
		</Container>
	);
}
