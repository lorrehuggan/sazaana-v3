import { styled } from '../../../stitches.config';

export const Text = styled('h1', {
  variants: {
    size: {
      h1: {
        fontSize: '9.701rem',
        fontWeight: '700',
        color: '$gray12',
      },
      h2: {
        fontSize: '5.996rem',
        fontWeight: '700',
        color: '$gray12',
      },
      h3: {
        fontSize: '3.706rem',
        fontWeight: '700',
        color: '$gray12',
      },
      h4: {
        fontSize: '2.291rem',
        fontWeight: '700',
        color: '$gray12',
      },
      h5: {
        fontSize: '1.416rem',
        fontWeight: '700',
        color: '$gray12',
      },
      p: {
        fontSize: '0.875rem',
        fontWeight: '400',
        color: '$gray12',
      },
      small: {
        fontSize: '0.75rem',
        fontWeight: '400',
      },
    },
  },
  defaultVariants: {
    size: 'p',
  },
});
