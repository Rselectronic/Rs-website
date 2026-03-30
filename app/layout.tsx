import type { Metadata } from 'next';
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-jb',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PCB Assembly Montreal | RS PCB Assembly — R. S. Électronique Inc.',
  description:
    "Montreal's trusted PCB contract manufacturer. Low to mid volume PCB assembly, full turnkey service, same-day quotes. Serving Quebec and North America since 2003.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col font-body">
        <Navbar />
        <main className="relative z-10 flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
