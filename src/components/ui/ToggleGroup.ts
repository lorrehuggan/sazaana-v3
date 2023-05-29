import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { styled } from '../../../stitches.config';

export const ToggleGroupRoot = styled(ToggleGroup.Root, {
  display: 'inline-flex',
  backgroundColor: 'transparent',
  border: '1px solid $gray10',
  borderRadius: 4,
  boxShadow: `0 2px 10px $base`,
});

export const ToggleGroupItem = styled(ToggleGroup.Item, {
  //reset
  all: 'unset',
  // custom
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  color: '$gray12',
  cursor: 'pointer',
  borderRight: '1px solid $gray10',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '$gray4',
  },
  '&:focus': {
    backgroundColor: '$cyan6',
    zIndex: 999,
  },
  '&:focus:first-child': {
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
  },
  '&:focus:last-child': {
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
  },
  '&:last-child': {
    borderRight: 'none',
  },
});
