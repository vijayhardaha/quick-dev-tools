/**
 * External dependancies
 */
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import Link from 'next/link';

/**
 * Internal dependancies
 */
import Meta from '../lib/meta';
import Sidebar from '../lib/sidebar';
import { TOOLS } from '../lib/constants';

export default function Home() {
	const items = TOOLS.map((tool) => (
		<Col sm="12" md="3" key={tool.name} className="d-flex align-items-stretch">
			<Link href={tool.link}>
				<Card>
					<div className="card-icon">{tool.icon}</div>
					<Card.Body>
						<Card.Title as="h4">{tool.name}</Card.Title>
						<Card.Text>{tool.description}</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	));

	return (
		<div className="app">
			<Meta />
			<div className="app-container">
				<Sidebar />
				<section className="app-main">
					<div className="app-content">
						<div className="tools-cards">
							<Row>{items}</Row>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
