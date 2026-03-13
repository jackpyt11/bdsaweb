import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'বিডিএসএ - বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি',
  description: 'বাংলাদেশের অফিশিয়াল ডিজিটাল সিস্টেম অথরিটি। ডিজিটাল অবকাঠামোর ভবিষ্যৎ নির্মাণ।',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
