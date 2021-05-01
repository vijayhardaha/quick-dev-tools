/**
 * External dependancies
 */
import { Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

/**
 * Internal dependancies
 */
import { TOOLS } from '../lib/constants';
import Page from '../components/page';

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
		<Page header={false}>
			<div className="tools-cards">
				<Row>{items}</Row>
			</div>
		</Page>
	);
}
