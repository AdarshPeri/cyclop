import { Azeret_Mono, Rubik_Mono_One, Rubik } from 'next/font/google';

export const azeret = Azeret_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
