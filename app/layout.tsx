import '../style/style.css';
import { bitterFontClass, firaFontClass, robotoFontClass } from 'util/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bitterFontClass} ${robotoFontClass} ${firaFontClass}`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
