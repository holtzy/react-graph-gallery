// This is where I load my fonts
// Read https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// Fonts are downloaded at build time
// Users won't make a call to google when using the website
import { Bitter, Roboto } from 'next/font/google';

export const inter = Bitter({
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
