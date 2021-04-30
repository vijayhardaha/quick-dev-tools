import Head from 'next/head';

export default function Meta({ children }) {
	return (
		<Head>
			<title>Magic Tools</title>
			<meta name="description" content="A simple tool for local works." />
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Federo&display=swap" rel="stylesheet" />
			{children}
		</Head>
	);
}
