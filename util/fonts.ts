// This is where I load my fonts
// Read https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// Fonts are downloaded at build time
// Users won't make a call to google when using the website
import { Bitter, Roboto, Fira_Mono } from 'next/font/google';

// For titles
const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bitter',
});
export const bitterFontClass = bitter.variable;

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
export const robotoFontClass = roboto.variable;

const fira = Fira_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira',
});
export const firaFontClass = fira.variable;
