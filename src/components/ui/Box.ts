import { styled } from '../../../stitches.config';

export const Box = styled('div', {
  borderRadius: '0.25rem',
  variants: {
    width: {
      full: {
        width: '100%',
      },
      half: {
        width: '50%',
      },
      third: {
        width: '33.333%',
      },
      quarter: {
        width: '25%',
      },
    },
    padding: {
      xs: {
        padding: '$xs',
      },
      sm: {
        padding: '$sm',
      },
      md: {
        padding: '$md',
      },
      lg: {
        padding: '$lg',
      },
      xl: {
        padding: '$xl',
      },
      '2xl': {
        padding: '$2xl',
      },
    },
    border: {
      full: {
        border: '1px solid $gray10',
      },
      top: {
        borderTop: '1px solid $gray10',
      },
      bottom: {
        borderBottom: '1px solid $gray10',
      },
    },
    m: {
      xs: {
        margin: '$xs',
      },
      sm: {
        margin: '$sm',
      },
      md: {
        margin: '$md',
      },
      lg: {
        margin: '$lg',
      },
      xl: {
        margin: '$xl',
      },
      '2xl': {
        margin: '$2xl',
      },
    },
    mt: {
      xs: {
        marginTop: '$xs',
      },
      sm: {
        marginTop: '$sm',
      },
      md: {
        marginTop: '$md',
      },
      lg: {
        marginTop: '$lg',
      },
      xl: {
        marginTop: '$xl',
      },
      '2xl': {
        marginTop: '$2xl',
      },
    },
  },
});
