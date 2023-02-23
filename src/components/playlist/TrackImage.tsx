import { Box } from '@components/ui/Box';
import Image from 'next/image';

interface Props {
  trackPlayingId: string;
  track: SpotifyApi.TrackObjectFull;
}

const TrackImage = ({ trackPlayingId, track }: Props) => {
  return (
    <Box
      css={{
        position: 'relative',
        rotate: trackPlayingId === track.preview_url ? '3deg' : '0deg',
        transition: 'rotate 0.3s ease-in-out',
        zIndex: trackPlayingId === track.preview_url ? 10 : 0,
      }}
    >
      <Box
        css={{
          '&:after': {
            content: '""',
            backgroundImage: `url(${track.album?.images[2]?.url!})`,
            width: track.album?.images[2]?.width,
            height: track.album?.images[2]?.height,
            position: 'absolute',
            left: 2,
            top: 12,
            filter: 'blur(10px)',
            zIndex: -1,
            transition: 'opacity 0.4s ease-in-out',
            scale: 0.8,
          },
        }}
      >
        <Image
          style={{
            objectFit: 'cover',
            borderRadius: '4px',
            outline:
              trackPlayingId === track.preview_url
                ? '1px solid rgba(0, 0, 0, 1)'
                : '1px solid rgba(0, 0, 0, 0)',
            transition: 'outline 0.3s ease-in-out',
          }}
          width={track.album?.images[2]?.width}
          height={track.album?.images[2]?.height}
          src={track.album?.images[2]?.url!}
          alt={track.name!}
        />
      </Box>
    </Box>
  );
};

export default TrackImage;
