import { Box } from '@components/ui/Box';
import { Button } from '@components/ui/Button';
import { Text } from '@components/ui/Text';
import { IconBrandSpotify } from '@tabler/icons-react';
import FilterTracks from './Filter';

const Menu = () => {
  return (
    <Box spaceY="lg" css={{ flex: 1 }}>
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
      <FilterTracks />
    </Box>
  );
};

export default Menu;
