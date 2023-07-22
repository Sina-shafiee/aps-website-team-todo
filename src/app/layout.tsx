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

const RootLayout = (props: { children: React.ReactNode; modal: React.ReactNode }) => {
  console.log({ props });

  return (
    <html lang='en' dir='ltr'>
      <body className={roboto.className}>
        <Providers>
          {props.modal}
          <Container maxWidth='lg'>
            <Header />
            {props.children}
          </Container>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
