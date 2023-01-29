import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
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
  },
  body: {
    backgroundColor: '#fefce1',
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
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
