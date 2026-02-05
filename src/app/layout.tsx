import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cricket Live Scorecard',
  description: 'Real-time cricket scorecard viewer with live updates, detailed stats, and ball-by-ball commentary',
  keywords: ['cricket', 'scorecard', 'live', 'sports', 'real-time'],
  authors: [{ name: 'Arpan' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="__next">{children}</div>
      </body>
    </html>
  );
}
