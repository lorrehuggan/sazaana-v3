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
    pt: {
      sm: {
        paddingTop: '$sm',
      },
      md: {
        paddingTop: '$md',
      },
      lg: {
        paddingTop: '$lg',
      },
      xl: {
        paddingTop: '$xl',
      },
      '2xl': {
        paddingTop: '$2xl',
      },
    },
    pb: {
      sm: {
        paddingBottom: '$sm',
      },
      md: {
        paddingBottom: '$md',
      },
      lg: {
        paddingBottom: '$lg',
      },
      xl: {
        paddingBottom: '$xl',
      },
      '2xl': {
        paddingBottom: '$2xl',
      },
    },
    pl: {
      sm: {
        paddingLeft: '$sm',
      },
      md: {
        paddingLeft: '$md',
      },
      lg: {
        paddingLeft: '$lg',
      },
      xl: {
        paddingLeft: '$xl',
      },
      '2xl': {
        paddingLeft: '$2xl',
      },
    },
    pr: {
      sm: {
        paddingRight: '$sm',
      },
      md: {
        paddingRight: '$md',
      },
      lg: {
        paddingRight: '$lg',
      },
      xl: {
        paddingRight: '$xl',
      },
      '2xl': {
        paddingRight: '$2xl',
      },
    },
    mt: {
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
    mb: {
      sm: {
        marginBottom: '$sm',
      },
      md: {
        marginBottom: '$md',
      },
      lg: {
        marginBottom: '$lg',
      },
      xl: {
        marginBottom: '$xl',
      },
      '2xl': {
        marginBottom: '$2xl',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
