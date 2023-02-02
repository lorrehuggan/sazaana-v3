import { Box } from '@components/ui/Box';
import { Container } from '@components/ui/Container';
import { Text } from '@components/ui/Text';
import Tracklist from './Tracklist';

const PlaylistBody = () => {
  return (
    <Container flex="row" gap="lg" mt="xl" as="section" size="lg">
      <Box
        padding="md"
        radius="sm"
        css={{ flex: 1, border: '1px solid #00000050' }}
      >
        <Text as="h5" size="h5">
          Filter
        </Text>
      </Box>
      <Tracklist />
    </Container>
  );
};

export default PlaylistBody;
