import { styled } from '../../../stitches.config';

export const Text = styled('h1', {
  variants: {
    size: {
      h1: {
        fontSize: '9.701rem',
        fontWeight: '700',
      },
      h2: {
        fontSize: '5.996rem',
        fontWeight: '700',
      },
      h3: {
        fontSize: '3.706rem',
        fontWeight: '700',
      },
      h4: {
        fontSize: '2.291rem',
        fontWeight: '700',
      },
      h5: {
        fontSize: '1.416rem',
        fontWeight: '700',
      },
      h6: {
        fontSize: '1.125rem',
      },
      p: {
        fontSize: '0.875rem',
        fontWeight: '400',
      },
      small: {
        fontSize: '0.75rem',
        fontWeight: '400',
      },
    },
    fontWeight: {
      200: {
        fontWeight: '200',
      },
      400: {
        fontWeight: '400',
      },
      700: {
        fontWeight: '700',
      },
    },

    color: {
      black: {
        color: '$gray12',
      },
      primary: {
        color: '$primary',
      },
      faded: {
        color: '$gray10',
      },
    },
  },
  defaultVariants: {
    size: 'p',
    color: 'black',
  },
});
