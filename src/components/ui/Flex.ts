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
      sm: {
        gap: '$1',
      },
      md: {
        gap: '$2',
      },
      lg: {
        gap: '$3',
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
      sm: {
        marginTop: '$1',
      },
      md: {
        marginTop: '$2',
      },
      lg: {
        marginTop: '$3',
      },
    },
    mb: {
      sm: {
        marginBottom: '$1',
      },
      md: {
        marginBottom: '$2',
      },
      lg: {
        marginBottom: '$3',
      },
    },
  },
});
