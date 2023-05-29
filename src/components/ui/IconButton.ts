import { styled } from '../../../stitches.config';

export const IconButton = styled('button', {
  // Reset
  appearance: 'none',
  border: 'none',
  margin: 0,
  padding: 0,
  background: 'none',
  // Custom
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: '300ms ease-out',
  transitionProperty: 'background-color, color',
  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        py: '$xs',
        px: '$xs',
      },
      md: {
        fontSize: '$md',
        py: '$md',
        px: '$md',
      },
      lg: {
        fontSize: '$lg',
        py: '$lg',
        px: '$lg',
      },
      xl: {
        fontSize: '$xl',
        py: '$xl',
        px: '$xl',
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
        border: '1px solid $gray10',
        '&:hover': {
          backgroundColor: '$gray6',
          color: '$baseHover',
          border: '1px solid $baseHover',
        },
        '&:active': {
          backgroundColor: '$gray4',
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
          backgroundColor: '$cyan4',
          color: '$primaryHover',
          border: '1px solid $primaryHover',
        },
      },
    },
  ],

  defaultVariants: {
    size: 'sm',
    variant: 'primary',
    outlined: true,
  },
});
