import { Box } from '@components/ui/Box';
import { Button } from '@components/ui/Button';
import { Container } from '@components/ui/Container';
import { Text } from '@components/ui/Text';
import { IconBrandSpotify } from '@tabler/icons-react';
import Tracklist from './Tracklist';

const PlaylistBody = () => {
  return (
    <Container flex="row" gap="lg" mt="xl" as="section" size="lg">
      <Box spaceY="md" css={{ flex: 1 }}>
        <Box spaceY="md" radius="sm">
          <Text as="h6" size="h6">
            Keep This Playlist
          </Text>
          <Text color="faded">
            Sign in with Spotify and save your songs to a playlist
          </Text>
          <Button
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '$xs',
            }}
            size="md"
            width="full"
            variant="black"
          >
            <IconBrandSpotify
              size={24}
              style={{
                color: '#17D860',
              }}
            />
            Sign In To Save
          </Button>
        </Box>
        {/* <Box
          full
          border="full"
          padding="md"
          radius="sm"
          css={{ height: '30rem' }}
        >
          <Text as="p" size="p">
            Filter Songs
          </Text>
        </Box> */}
      </Box>
      <Tracklist />
    </Container>
  );
};

export default PlaylistBody;
