import { styled } from '../../../stitches.config';
import * as Slider from '@radix-ui/react-slider';

export const SliderRoot = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',
  height: 20,
});

export const SliderTrack = styled(Slider.Track, {
  backgroundColor: '$gray10',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 6,
});

export const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: '$gray8',
  borderRadius: '9999px',
  height: '100%',
});

export const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  cursor: 'grab',
  width: 15,
  height: 15,
  border: '1px solid $gray10',
  backgroundColor: '$gray7',
  boxShadow: `4px 2px 1px $gray12`,
  borderRadius: 10,
  opacity: 0.8,
  transition: 'all 200ms ease-out',
  '&:hover': {
    backgroundColor: '$cyan5',
    opacity: 1,
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `1px 1px 0 5px $gray8`,
    backgroundColor: '$cyan7',
    cursor: 'grabbing',
  },
});
