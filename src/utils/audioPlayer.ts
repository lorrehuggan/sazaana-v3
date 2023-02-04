import { Howl, Howler } from 'howler';

export default function sound(src: string, volume: number = 1): Howl {
  return new Howl({
    src: [src ? src : ''],
    html5: true,
    autoplay: false,
    loop: false,
    volume: 1,
  });
}
