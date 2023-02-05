import Link from 'next/link';
import Image from 'next/image';
import {
  IconActivity,
  IconBounceRight,
  IconPlayerPlay,
  IconSpeedboat,
} from '@tabler/icons-react';
import { Box } from '@components/ui/Box';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { useCurrentArtistStore } from '@state/currentArtist';
import { api } from '@utils/api';
import { convertMsToMinutesAndSeconds, truncateString } from '@utils/index';
import { IconButton } from '@components/ui/IconButton';
import AudioPlayer from './AudioPlayer';
import { useAudioPlayingState } from '@state/audioPlaying';
import { ToggleGroupItem, ToggleGroupRoot } from '@components/ui/ToggleGroup';
import { useState } from 'react';
import ToolTipButton from '@components/ui/ToolTip';
import TracklistSort from './TracklistSort';
import TracklistMetrics from './TracklistMetrics';
import TrackListPlaceHolder from './TracklistPlaceholder';

const Tracklist = () => {
  const [value, setValue] = useState('');
  const id = useCurrentArtistStore((state) => state.id);
  const { id: trackPlayingId } = useAudioPlayingState((state) => state);
  const { data, isLoading, error } = api.artistRouter.getPlaylist.useQuery(
    { id },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <TrackListPlaceHolder status="Loading" />;

  if (error) return <TrackListPlaceHolder status="Error" />;

  // const tempoSortedData = useMemo(() => {
  //   if (!data) return null;
  //   return data.sort((a, b) => a.tempo - b.tempo);
  // }, [data]);

  return (
    <Box spaceY="md" width="twoThirds">
      <Box
        css={{ height: '32px' }}
        full
        flex="row"
        align="center"
        justify="between"
      >
        <TracklistSort value={value} setValue={setValue} />
        <TracklistMetrics />
      </Box>
      {data.map((track) => (
        <Flex gap="md" key={track.id}>
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
          <Box
            css={{ width: '50%' }}
            flex="column"
            justify="center"
            spaceY="xs"
          >
            <a>
              <Text
                css={{
                  cursor: 'pointer',
                  color: trackPlayingId === track.preview_url ? '$primary' : '',
                }}
                hover="fade"
                as="h6"
                size="h6"
              >
                {truncateString(track.name?.split('(')[0]!, 26)}
              </Text>
            </a>
            <Flex align="center" gap="sm">
              {track.explicit && (
                <Flex
                  as="span"
                  justify="center"
                  align="center"
                  css={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: '$gray9',
                    fontSize: '10px',
                    padding: '10px',
                    color: '$gray1',
                  }}
                >
                  E
                </Flex>
              )}
              {track.artists &&
                track.artists.slice(0, 2).map((artist) => (
                  <Link href={`/playlist/${artist.id}`} key={artist.id}>
                    <Text
                      hover="dark"
                      css={{
                        cursor: 'pointer',
                        transition: 'color 0.3s ease-in-out',
                        '&:hover': {
                          color: '$gray12',
                        },
                      }}
                      color="faded"
                      as="p"
                      size="p"
                    >
                      {artist.name}
                    </Text>
                  </Link>
                ))}
            </Flex>
          </Box>
          <Box width="quarter" flex="column" justify="center">
            <Text color="faded" as="small" size="small">
              {truncateString(track?.album?.name, 20)}
            </Text>
          </Box>
          <AudioPlayer audio={track.preview_url} tempo={track.tempo} />
        </Flex>
      ))}
    </Box>
  );
};

export default Tracklist;

interface StatusProps {
  status: 'Loading' | 'Error';
}
