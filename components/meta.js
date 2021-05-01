/**
 * External dependancies
 */
import Head from 'next/head';

export default function Meta({ meta }) {
	const defaultTitle = `Quick Tools`;
	const defaultDesc = `Dev tools for everyday use.`;
	const title = typeof meta !== 'undefined' ? `${defaultTitle} - ${meta.name}` : defaultTitle;
	const desc = typeof meta !== 'undefined' ? meta.description : defaultDesc;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={desc} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Federo&family=Poppins:ital,wght@0,400;0,500;0,600&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
}
