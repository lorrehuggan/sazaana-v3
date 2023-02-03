import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '700',
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
      },
      md: {
        fontSize: '$md',
        py: '$md',
      },
      lg: {
        fontSize: '$lg',
        py: '$lg',
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
        '&:focus': {
          backgroundColor: '$primaryHover',
        },
        '&:active': {
          backgroundColor: '$primaryActive',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$base',
        border: '1px solid $base',
        '&:hover': {
          backgroundColor: '$base',
          color: '#fff',
        },
        '&:focus': {
          backgroundColor: '$baseHover',
          color: '#fff',
        },
        '&:active': {
          backgroundColor: '$baseHover',
          color: '#fff',
        },
      },
      black: {
        backgroundColor: '$gray12',
        color: '#fff',
        '&:hover': {
          backgroundColor: '$baseHover',
          color: '#fff',
        },
        '&:focus': {
          backgroundColor: '$baseHover',
          color: '#fff',
        },
        '&:active': {
          backgroundColor: '$baseHover',
          color: '#fff',
        },
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
});
