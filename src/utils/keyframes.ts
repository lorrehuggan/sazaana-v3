import { keyframes } from '../../stitches.config';

export const spinKeyframe = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinAnimation = `${spinKeyframe} 1s linear infinite`;

export function audioPlayingAnimation(time: number) {
  return `${spinKeyframe} ${time}s linear infinite`;
}

export const playbackKeyframe = keyframes({
  '0%': { width: '0%' },
  '100%': { width: '100%' },
});

export function playbackAnimation(time: number) {
  return `${playbackKeyframe} ${time}s  linear`;
}
