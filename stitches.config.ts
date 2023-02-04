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
    shadow: {
      sm: '1px 1px 2px 2px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      ...gray,
      ...cyan,
      ...red,
      ...grass,
      ...plum,
      primary: '$cyan8',
      primaryHover: '$cyan9',
      primaryActive: '$cyan7',
      base: '$gray12',
      baseHover: '$gray11',
      secondary: '$plum8',
      error: '$red8',
      success: '$grass8',
      text: '$gray11',
      white: '#F4F5EC',
    },
    fonts: {
      sans: inter.className,
    },
    space: {
      xs: '0.25rem',
      sm: '0.405rem',
      md: '0.655rem',
      lg: '1.06rem',
      xl: '1.715rem',
      '2xl': '2.775rem',
      '3xl': '4.491rem',
    },
  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1280px)',
    '2xl': '(max-width: 1536px)',
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
    flexCenter: () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    flexColumn: () => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }),
    flexRow: () => ({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }),
    flexBetween: () => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
    sy: (value: string) => {
      return {
        '& > * + *': {
          marginTop: value,
        },
      };
    },
    sx: (value: string) => {
      return {
        '& > * + *': {
          marginRight: value,
        },
      };
    },
    linearGradient: (value: string) => ({
      background: `linear-gradient(${value})`,
    }),
  },
});
