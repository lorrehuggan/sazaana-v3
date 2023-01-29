import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  width: '90%',
  margin: '0 auto',
  variants: {
    size: {
      sm: {
        maxWidth: '640px',
      },
      md: {
        maxWidth: '768px',
      },
      lg: {
        maxWidth: '1024px',
      },
      xl: {
        maxWidth: '1280px',
      },
    },
    p: {
      sm: {
        padding: '$3',
      },
      md: {
        padding: '$6',
      },
      lg: {
        padding: '$9',
      },
    },
    pt: {
      sm: {
        paddingTop: '$3',
      },
      md: {
        paddingTop: '$6',
      },
      lg: {
        paddingTop: '$9',
      },
    },
    pb: {
      sm: {
        paddingBottom: '$3',
      },
      md: {
        paddingBottom: '$6',
      },
      lg: {
        paddingBottom: '$9',
      },
    },
    pl: {
      sm: {
        paddingLeft: '$3',
      },
      md: {
        paddingLeft: '$6',
      },
      lg: {
        paddingLeft: '$9',
      },
    },
    pr: {
      sm: {
        paddingRight: '$3',
      },
      md: {
        paddingRight: '$6',
      },
      lg: {
        paddingRight: '$9',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
