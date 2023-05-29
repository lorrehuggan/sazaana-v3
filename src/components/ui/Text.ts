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
        '@md': {
          fontSize: '3.706rem',
        },
      },
      h3: {
        fontSize: '3.706rem',
        fontWeight: '700',
        '@md': {
          fontSize: '2.291rem',
        },
      },
      h4: {
        fontSize: '2.291rem',
        fontWeight: '700',
        '@md': {
          fontSize: '1.416rem',
        },
      },
      h5: {
        fontSize: '1.416rem',
        fontWeight: '700',
        '@md': {
          fontSize: '1.125rem',
        },
      },
      h6: {
        fontSize: '1.125rem',
        '@md': {
          fontSize: '0.975rem',
        },
      },
      p: {
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '125%',
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
    textAlign: {
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
      left: {
        textAlign: 'left',
      },
    },
    hover: {
      fade: {
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
          color: '$gray10',
        },
        '&:active': {
          color: '$gray12',
        },
      },
      dark: {
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
          color: '$gray12',
        },
        '&:active': {
          color: '$gray8',
        },
      },
    },
    capitalize: {
      true: {
        textTransform: 'capitalize',
      },
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },
  defaultVariants: {
    size: 'p',
    color: 'black',
  },
});
