import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '../../../stitches.config';

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 32,
  height: 32,
  borderRadius: '100%',
  backgroundColor: '$gray8',
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$cyan7',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});
