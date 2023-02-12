import { Container } from '@components/ui/Container';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { styled, theme } from '../../../stitches.config';
import { IconMenu } from '@tabler/icons-react';
import { Box } from '@components/ui/Box';
import Link from 'next/link';
import { Button } from '@components/ui/Button';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Avatar from './Avatar';

const Navigation = () => {
  const { data: session } = useSession();
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
            <ul style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <li>
                {session ? (
                  <Button onClick={() => signOut()} variant="black">
                    Sign Out
                  </Button>
                ) : (
                  <Link href="/login">
                    <Button variant="black">Sign In</Button>
                  </Link>
                )}
              </li>
              {session?.user?.image && session.user.name && (
                <li>
                  <Avatar
                    name={session.user.name}
                    src={session.user.image}
                    alt={session.user.name}
                  />
                </li>
              )}
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
