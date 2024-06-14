import { Azeret_Mono, Rubik_Mono_One, Rubik } from 'next/font/google';
import localFont from 'next/font/local';

export const azeret = Azeret_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const takino = localFont({
  src: [{ path: '../../public/fonts/takimon.woff2' }],
  variable: '--font-takino',
});

export const rubik = Rubik_Mono_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const rubikM = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});
