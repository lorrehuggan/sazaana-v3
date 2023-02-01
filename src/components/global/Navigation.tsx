import { Container } from '@components/ui/Container';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { styled, theme } from '../../../stitches.config';
import { IconBrandSpotify, IconMenu } from '@tabler/icons-react';
import { IconButton } from '@components/ui/IconButton';

const Navigation = () => {
  return (
    <Nav>
      <Container
        size="lg"
        css={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Flex align="center" justify="between" full>
          <Text
            color="faded"
            fontWeight="200"
            as="h4"
            size="h5"
            css={{ letterSpacing: '-1px' }}
          >
            sazaana
          </Text>
          <IconMenu color="#00000070" size={24} />
        </Flex>
      </Container>
    </Nav>
  );
};

export default Navigation;

const Nav = styled('nav', {
  height: '4rem',
});
