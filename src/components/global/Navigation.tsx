import { Container } from '@components/ui/Container';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { styled, theme } from '../../../stitches.config';
import { IconMenu } from '@tabler/icons-react';
import { Box } from '@components/ui/Box';

const Navigation = () => {
  return (
    <Nav>
      <Container
        size="lg"
        flex="row"
        align="center"
        css={{
          height: '100%',
        }}
      >
        <Box flex="row" align="center" justify="between" full>
          <Text
            fontWeight="200"
            as="h4"
            size="h5"
            css={{ letterSpacing: '2px' }}
          >
            sazaana
          </Text>
          <IconMenu color="#00000070" size={24} />
        </Box>
      </Container>
    </Nav>
  );
};

export default Navigation;

const Nav = styled('nav', {
  height: '4rem',
});
