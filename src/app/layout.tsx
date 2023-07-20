import { Roboto } from 'next/font/google';
import { Container } from '@mui/material';

import Providers from './providers';
import { Header } from '@/components/header';

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
        <Container maxWidth='lg'>
          <Header />
          <Providers>{children}</Providers>
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
