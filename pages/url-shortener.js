import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';

export default function UrlShortner() {
	return (
		<div className="app">
			<Meta />
			<div className="app-container">
				<Sidebar />
				<section className="app-main">
                    <header className="page-header">
                        <h1 className="page-title">Example Demo</h1>
                    </header>
                </section>
			</div>
		</div>
	);
}
