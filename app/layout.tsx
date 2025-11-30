import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Chakna in Minutes',
	description: 'Snacks that hit different, fast.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>{children}</body>
		</html>
	)
}
