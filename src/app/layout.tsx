import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BDSA - Bangladesh Digital Systems Authority',
  description: 'Official Digital Systems Authority of Bangladesh. Building the Future of Digital Infrastructure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
