import { styled } from '../../../stitches.config';

export const IconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: '200ms ease-out',
  transitionProperty: 'background-color, color',
  variants: {
    size: {
      xs: {
        width: '$xs',
        height: '$xs',
        padding: '0.125rem',
      },
      sm: {
        width: '$sm',
        height: '$sm',
        padding: '$xs',
      },
      md: {
        width: '$md',
        height: '$md',
        padding: '$sm',
      },
      lg: {
        width: '$lg',
        height: '$lg',
        padding: '$md',
      },
      xl: {
        width: '$xl',
        height: '$xl',
        padding: '$lg',
      },
    },
    variant: {
      outline: {
        border: '1px solid $gray9',
        '&:hover': {
          backgroundColor: '$cyan6',
        },
        '&:active': {
          backgroundColor: '$cyan7',
        },
        '&:hover:disabled': {
          backgroundColor: 'transparent',
          cursor: 'none',
        },
      },
      solid: {
        backgroundColor: '$primary',
      },
      default: {
        backgroundColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
