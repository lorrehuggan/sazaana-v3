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
      <Box>
        <Image
          style={{
            objectFit: 'cover',
            borderRadius: '4px',
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
