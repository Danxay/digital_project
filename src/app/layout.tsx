import './globals.scss';
import 'styles/mixins.scss';
import cn from 'classnames';
import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';

const OpenSans = Open_Sans({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--OpenSans',
});

const TTHoves = localFont({
  src: [
    { path: '../fonts/TTHoves/TTHoves-Light.woff2', weight: '300' },
    { path: '../fonts/TTHoves/TTHoves-Regular.woff2', weight: '400' },
    { path: '../fonts/TTHoves/TTHoves-Medium.woff2', weight: '500' },
    { path: '../fonts/TTHoves/TTHoves-DemiBold.woff2', weight: '600' },
    { path: '../fonts/TTHoves/TTHoves-Bold.woff2', weight: '700' },
  ],
  style: 'normal',
  display: 'swap',
  fallback: ['Roboto', 'Helvetica', 'sans-serif'],
  variable: '--TTHoves',
});

export const metadata = {
  title: 'Digital Project',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={cn(OpenSans.variable, TTHoves.variable)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
