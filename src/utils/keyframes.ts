import { keyframes } from '../../stitches.config';

export const spinKeyframe = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinAnimation = `${spinKeyframe} 1s linear infinite`;
