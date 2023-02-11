import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@components/ui/Box';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { truncateString } from '@utils/index';
import AudioPlayer from './AudioPlayer';
import { useAudioPlayingState } from '@state/audioPlaying';
import TracklistMetrics from './TracklistMetrics';
import TrackListPlaceHolder from './TracklistPlaceholder';
import { useCurrentPlaylistStore } from '@state/currentPlaylist';
import { AnimatePresence, motion } from 'framer-motion';
import TrackArtist from './TrackArtist';
import { Button } from '@components/ui/Button';
import { api } from '@utils/api';

const Tracklist = () => {
  const { id: trackPlayingId } = useAudioPlayingState((state) => state);
  const { data, isLoading, error, setData } = useCurrentPlaylistStore(
    (state) => state
  );

  const createPlaylist = api.userRouter.createPlaylist.useMutation({
    onSuccess: (data) => {
      console.log('success');
    },
    onMutate: (s) => {
      console.log('mutate');
    },
    onError: (e) => {
      console.log('error');
    },
  });

  if (isLoading) return <TrackListPlaceHolder status="Loading" />;

  if (error) return <TrackListPlaceHolder status="Error" />;

  function handleCreatePlaylist() {
    createPlaylist.mutate({
      name: 'test',
      tracks: data.map((track) => track.track.uri),
    });
  }

  return (
    <Box spaceY="md" width="twoThirds">
      <Box
        css={{ height: '32px' }}
        full
        flex="row"
        align="center"
        justify="between"
      >
        <Button onClick={handleCreatePlaylist} variant="black">
          Save
        </Button>
        <TracklistMetrics />
      </Box>

      <Box css={{ pr: '12px' }} as={motion.ul} spaceY="md" layout>
        <AnimatePresence initial={false}>
          {data.map(({ track, features }) => (
            <Box
              as={motion.li}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              flex="row"
              gap="md"
              key={track.id}
            >
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
                <a href={track.external_urls?.spotify}>
                  <Text
                    css={{
                      cursor: 'pointer',
                      color:
                        trackPlayingId === track.preview_url ? '$primary' : '',
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
                    track.artists
                      .slice(0, 2)
                      .map((artist) => (
                        <TrackArtist name={artist.name} id={artist.id} />
                      ))}
                </Flex>
              </Box>
              <Box width="quarter" flex="column" justify="center">
                <Text color="faded" as="small" size="small">
                  {truncateString(track?.album?.name, 20)}
                </Text>
              </Box>
              <AudioPlayer audio={track.preview_url} tempo={features.tempo} />
            </Box>
          ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Tracklist;

interface StatusProps {
  status: 'Loading' | 'Error';
}
