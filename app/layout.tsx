import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
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
      className={`${plusJakarta.variable} ${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col font-body">
        <Navbar />
        <main className="relative z-10 flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
