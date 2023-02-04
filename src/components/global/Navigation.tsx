import { Container } from '@components/ui/Container';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { styled, theme } from '../../../stitches.config';
import { IconMenu } from '@tabler/icons-react';
import { Box } from '@components/ui/Box';
import Link from 'next/link';

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
          <Text as="h4" size="h4">
            sazaana
          </Text>
          <Box>
            <ul style={{ display: 'flex', gap: '8px' }}>
              <li>
                <Link href="/discover">
                  <Text
                    uppercase
                    size="small"
                    fontWeight="700"
                    css={{ cursor: 'pointer' }}
                    hover="fade"
                  >
                    Discover
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/discover">
                  <Text
                    uppercase
                    size="small"
                    fontWeight="700"
                    css={{ cursor: 'pointer' }}
                    hover="fade"
                  >
                    Sign In
                  </Text>
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
    </Nav>
  );
};

export default Navigation;

const Nav = styled('nav', {
  height: '4rem',
});
