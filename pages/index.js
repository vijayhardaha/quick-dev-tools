/**
 * External dependancies
 */
import { Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

/**
 * Internal dependancies
 */
import { TOOLS } from '../lib/constants';
import { truncate } from '../lib/utils';
import Page from '../components/page';

export default function Home() {
	const items = TOOLS.map((tool) => (
		<Link href={tool.link} key={tool.name}>
			<Card>
				<div className="card-icon">{tool.icon}</div>
				<Card.Body>
					<Card.Title as="h6" className="mb-2">
						{tool.name}
					</Card.Title>
					<Card.Text>{truncate(tool.description, 76)}</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	));

	return (
		<Page header={false}>
			<div className="tools-cards">{items}</div>
		</Page>
	);
}
