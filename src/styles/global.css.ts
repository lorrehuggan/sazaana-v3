import { Inter } from '@next/font/google';
import { globalCss } from '../../stitches.config';

const inter = Inter({ subsets: ['latin'] });

export const globalStyles = globalCss({
  '*': {
    fontFamily: inter.style.fontFamily,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    lineHeight: 1,
    fontSmooth: 'always',
  },
  body: {
    backgroundColor: 'white',
  },
  a: {
    textDecoration: 'none',
    all: 'unset',
  },
  li: {
    listStyle: 'none',
  },
});
