import { styled } from '../../../stitches.config';

export const IconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 200ms ease-out',
  variants: {
    size: {
      sm: {
        width: '$5',
        height: '$5',
        padding: '$1',
      },
      md: {
        width: '$6',
        height: '$6',
        padding: '$2',
      },
      lg: {
        width: '$7',
        height: '$7',
        padding: '$3',
      },
      xl: {
        width: '$8',
        height: '$8',
        padding: '$4',
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
