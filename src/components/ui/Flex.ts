import { styled } from '../../../stitches.config';

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
      false: {
        flexWrap: 'nowrap',
      },
    },
    gap: {
      xs: {
        gap: '$xs',
      },
      sm: {
        gap: '$sm',
      },
      md: {
        gap: '$md',
      },
      lg: {
        gap: '$lg',
      },
      xl: {
        gap: '$xl',
      },
      '2xl': {
        gap: '$2xl',
      },
    },
    full: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
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
    mb: {
      xs: {
        marginBottom: '$xs',
      },
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
});
