import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { globalCss } from '../../stitches.config';
import { Inter } from '@next/font/google';

import { api } from '../utils/api';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const globalStyles = globalCss({
  '*': {
    fontFamily: inter.style.fontFamily,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    lineHeight: 1,
    fontSmooth: 'always',
  },
  body: {
    backgroundColor: '#F4F5EC',
  },
  a: {
    textDecoration: 'none',
    all: 'unset',
  },
  li: {
    listStyle: 'none',
  },
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  globalStyles();
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
