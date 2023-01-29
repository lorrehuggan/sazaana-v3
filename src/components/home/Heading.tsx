import { Container } from '@components/ui/Container';
import { Span } from '@components/ui/Span';
import { Text } from '@components/ui/Text';

const Heading = () => {
  return (
    <Container pt="lg" size="lg">
      <Text as="h3" size="h3">
        <Span>Discover</Span> Your Next Favorite Artist:
      </Text>
      <Text css={{ mt: '$2' }} as="h4" size="h4">
        Create a personalised music experience by searching for your favorite
        artist...
      </Text>
    </Container>
  );
};

export default Heading;
