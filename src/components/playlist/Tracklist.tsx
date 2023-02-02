import Image from 'next/image';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { Box } from '@components/ui/Box';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { useCurrentArtistStore } from '@state/currentArtist';
import { api } from '@utils/api';
import { truncateString } from '@utils/index';

const Tracklist = () => {
  const id = useCurrentArtistStore((state) => state.id);
  const { data, isLoading, error } = api.artistRouter.getPlaylist.useQuery(
    { id },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return (
      <Box padding="md" width="twoThirds">
        <Text as="h4" size="h4">
          Loading
        </Text>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box padding="md" width="twoThirds">
        <Text as="h4" size="h4">
          Error
        </Text>
      </Box>
    );
  }

  return (
    <Box spaceY="md" padding="md" width="twoThirds">
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
              <Text css={{ cursor: 'pointer' }} hover="fade" as="h6" size="h6">
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
                  <a key={artist.id}>
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
                  </a>
                ))}
            </Flex>
          </Box>
          <Box width="quarter" flex="column" justify="center">
            <Text color="faded" as="small" size="small">
              {truncateString(track?.album?.name, 20)}
            </Text>
          </Box>
          <Box flex="column" align="end" justify="center" css={{ flex: 1 }}>
            <IconPlayerPlayFilled size={24} />
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Tracklist;
