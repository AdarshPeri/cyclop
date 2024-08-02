import { Azeret_Mono } from 'next/font/google';
import './globals.css';
import { NavContextProvider } from './components/NavContext';
import { ServiceContextProvider } from './components/ServiceContext';
import { Toaster } from 'react-hot-toast';

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
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${azeret.className} min-h-screen min-w-screen bg-primary-100 text-alternate-50 overflow-x-hidden transition-all duration-500`}
      >
        <Toaster
          position='top-right'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 4000,
            },
            error: {
              duration: 4000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: '#FBF7F4',
              color: '#2E2E32',
            },
          }}
        />
        <NavContextProvider>
          <ServiceContextProvider>{children}</ServiceContextProvider>
        </NavContextProvider>
      </body>
    </html>
  );
}
