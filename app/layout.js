import { Azeret_Mono } from 'next/font/google';
import './globals.css';
import { PlaceholderProvider } from './components/PlaceholderContext';

const azeret = Azeret_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: { template: '%s | Cyclop', default: 'Welcome | Cyclop' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${azeret.className} min-h-screen bg-primary-100 text-alternate-50`}>
        <PlaceholderProvider>{children}</PlaceholderProvider>
      </body>
    </html>
  );
}
