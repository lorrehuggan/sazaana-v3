import { Container } from "@components/ui/Container";
import { Span } from "@components/ui/Span";
import { Text } from "@components/ui/Text";

const Heading = () => {
  return (
    <Container
      css={{
        "@md": {
          pt: "$lg",
        },
      }}
      as="section"
      pt="2xl"
      size="lg"
    >
      <Text data-testid="home-heading" as="h1" size="h2">
        <Span>Discover</Span> Your Next Favorite Song:
      </Text>
      <Text
        data-testid="home-subheading"
        color="faded"
        css={{ mt: "$lg" }}
        as="h4"
        size="h4"
      >
        Create a personalised music experience by searching for your favorite
        artist...
      </Text>
    </Container>
  );
};

export default Heading;
