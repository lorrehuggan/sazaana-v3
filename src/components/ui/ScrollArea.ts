import * as ScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '../../../stitches.config';

export const ScrollAreaRoot = styled(ScrollArea.Root, {
  width: '100%',
  height: 560,
  borderRadius: '2px',
  overflow: 'hidden',
});

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: '$gray4',
  transition: 'background 160ms ease-out',
  '&:hover': { background: '$gray10' },
  '&[data-orientation="vertical"]': { width: '5px' },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: '2px',
  },
});

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: 'grass6',
  borderRadius: '2px',
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

export const ScrollAreaCorner = styled(ScrollArea.Corner, {
  background: '$gray2',
});
