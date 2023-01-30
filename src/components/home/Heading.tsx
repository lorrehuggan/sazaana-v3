import { Container } from '@components/ui/Container';
import { Span } from '@components/ui/Span';
import { Text } from '@components/ui/Text';

const Heading = () => {
  return (
    <Container pt="2xl" size="lg">
      <Text as="h1" size="h2">
        <Span>Discover</Span> Your Next Favorite Song:
      </Text>
      <Text color="faded" css={{ mt: '$lg' }} as="h4" size="h4">
        Create a personalised music experience by searching for your favorite
        artist...
      </Text>
    </Container>
  );
};

export default Heading;
