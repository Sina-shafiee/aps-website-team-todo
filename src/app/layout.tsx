import { Roboto } from 'next/font/google';
import Providers from './providers';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  adjustFontFallback: true,
  fallback: [' Helvetica Neue', 'Sans-Serif'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' dir='ltr'>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
