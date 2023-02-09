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
  backgroundColor: '$primary',
  borderRadius: '9999px',
  height: '100%',
});

export const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  border: '1px solid $gray10',
  backgroundColor: '$gray4',
  boxShadow: `0 2px 10px $gray7`,
  borderRadius: 10,
  '&:hover': { backgroundColor: '$cyan5' },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 5px $gray8`,
    backgroundColor: '$cyan7',
  },
});
