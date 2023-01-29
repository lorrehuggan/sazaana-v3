import { Container } from '@components/ui/Container';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { styled, theme } from '../../../stitches.config';
import { IconBrandSpotify } from '@tabler/icons-react';
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
        <Flex justify="between" align="center" full>
          <Text as="h5" size="h5">
            sazaana
          </Text>
          <IconButton variant="default" size="lg">
            <IconBrandSpotify
              color={theme.colors.primary.toString()}
              size={32}
            />
          </IconButton>
        </Flex>
      </Container>
    </Nav>
  );
};

export default Navigation;

const Nav = styled('nav', {
  height: '4rem',
});
