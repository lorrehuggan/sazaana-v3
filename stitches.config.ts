import { createStitches } from '@stitches/react';
import { Inter } from '@next/font/google';
import { gray, cyan, red, grass, plum } from '@radix-ui/colors';

const inter = Inter({ subsets: ['latin'] });

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...cyan,
      ...red,
      ...grass,
      ...plum,
      primary: '$cyan8',
      secondary: '$plum8',
      error: '$red8',
      success: '$grass8',
      text: '$gray11',
    },
    fonts: {
      sans: inter.className,
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      lg: '3rem',
      xl: '4rem',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
  },
  utils: {
    m: (value: string) => ({ margin: value }),
    mt: (value: string) => ({ marginTop: value }),
    mr: (value: string) => ({ marginRight: value }),
    mb: (value: string) => ({ marginBottom: value }),
    ml: (value: string) => ({ marginLeft: value }),
    mx: (value: string) => ({ marginLeft: value, marginRight: value }),
    my: (value: string) => ({ marginTop: value, marginBottom: value }),
    p: (value: string) => ({ padding: value }),
    pt: (value: string) => ({ paddingTop: value }),
    pr: (value: string) => ({ paddingRight: value }),
    pb: (value: string) => ({ paddingBottom: value }),
    pl: (value: string) => ({ paddingLeft: value }),
    px: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: string) => ({ paddingTop: value, paddingBottom: value }),
    h: (value: string) => ({ height: value }),
    w: (value: string) => ({ width: value }),
    size: (value: string) => ({ width: value, height: value }),
    text: (value: string) => ({ fontSize: value, fontWeight: '400' }),
    textBold: (value: string) => ({ fontSize: value, fontWeight: '700' }),
    textCenter: () => ({ textAlign: 'center' }),
    textRight: () => ({ textAlign: 'right' }),
    textLeft: () => ({ textAlign: 'left' }),
    textColor: (value: string) => ({ color: value }),
    rounded: () => ({ borderRadius: '0.25rem' }),
    sy: (value: string) => ({
      '--space-y-reverse': 0,
      display: 'flex',
      flexDirection: 'column-reverse',
      '& > * + *': {
        marginTop: `calc(${value} * calc(1 - var(--space-y-reverse)))`,
        marginBottom: `calc(${value} * var(--space-y-reverse))`,
      },
    }),
    sx: (value: string) => ({
      '--space-x-reverse': 0,
      display: 'flex',
      flexDirection: 'row-reverse',
      '& > * + *': {
        marginLeft: `calc(${value} * calc(1 - var(--space-x-reverse)))`,
        marginRight: `calc(${value} * var(--space-x-reverse))`,
      },
    }),
  },
});
