import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'May 2024 Art Challenge | Sean Donny',
  description:
    'A website to display the results of the Instagram art challenge held by Sean Donny',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
