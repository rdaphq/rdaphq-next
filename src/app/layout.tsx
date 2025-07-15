import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  display: 'swap',
  variable: '--font-inter-tight',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rdap | RdapHQ - Official Website [@rdaphq]',
  description: 'The official website for Rdap. Find everything about Rdap in one place.',
  openGraph: {
    title: 'Rdap | RdapHQ - Official Website [@rdaphq]',
    description: 'The official website for Rdap. Find everything about Rdap in one place.',
    url: 'https://rdaphq.com',
    siteName: 'Rdap'
  },
  metadataBase: new URL('https://rdaphq.com'),
  abstract: 'The official website for Rdap. Find everything about Rdap in one place.',
  twitter: {
    card: 'summary_large_image',
    title: 'Rdap | RdapHQ - Official Website [@rdaphq]',
    description: 'The official website for Rdap. Find everything about Rdap in one place.',
    site: '@rdaphq',
    creator: '@rdaphq',
  },
  keywords: ['rdap','rdaphq','rdapshii','rdap music','rdap merch','rdap shop','rdap phonk','rdap biker',],
  authors: [{ name: 'RdapHQ', url: 'https://rdaphq.com' }],
  robots: { index: true, follow: true },
  publisher: 'Rdap',
};

import Navbar from '../components/navbar';
import Splash from '../components/splash/splash';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
      </head>
      <body className={`${interTight.variable}`}>
        <Splash />
        <Navbar />
        <div className='wrapper'>
          {children}
        </div>
      </body>
    </html>
  );
}
