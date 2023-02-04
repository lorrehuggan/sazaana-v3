import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  // Reset
  appearance: 'none',
  border: 'none',
  margin: 0,
  padding: 0,
  background: 'none',
  // Custom
  transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '700',
  backgroundColor: 'transparent',
  px: '$lg',
  py: '$md',
  variants: {
    width: {
      full: {
        width: '100%',
      },
      auto: {
        width: 'auto',
      },
      half: {
        width: '50%',
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        py: '$sm',
        px: '$md',
      },
      md: {
        fontSize: '$md',
        py: '$md',
        px: '$lg',
      },
      lg: {
        fontSize: '$lg',
        py: '$lg',
        px: '$xl',
      },
      xl: {
        fontSize: '$xl',
        py: '$xl',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:hover': {
          backgroundColor: '$primaryHover',
        },
        '&:active': {
          backgroundColor: '$primaryActive',
        },
      },
      black: {
        backgroundColor: '$gray12',
        color: '#fff',
        '&:hover': {
          backgroundColor: '$baseHover',
          color: '#fff',
        },
        '&:active': {
          backgroundColor: '$baseHover',
          color: '#fff',
        },
      },
    },

    outlined: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid',
      },
    },

    disabled: {
      true: {
        backgroundColor: '$gray4',
        color: '$gray20',
        cursor: 'not-allowed',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'black',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        color: '$gray12',
        border: '1px solid $gray12',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '$baseHover',
          border: '1px solid $baseHover',
        },
      },
    },
    {
      variant: 'primary',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        color: '$primary',
        border: '1px solid $primary',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '$primaryHover',
          border: '1px solid $primaryHover',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'black',
  },
});
