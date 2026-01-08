import { Sheet } from '@/component/UI/sheet';
import '../style/style.css';
import { bitterFontClass, firaFontClass, robotoFontClass } from 'util/fonts';
import Navbar from '@/component/NavbarNew';
import { Sidebar } from '@/component/Sidebar';

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
        <main>
          <Sheet>
            <Navbar />
            {children}
            <Sidebar />
          </Sheet>
        </main>
      </body>
    </html>
  );
}
