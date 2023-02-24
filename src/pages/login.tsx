import { Box } from '@components/ui/Box';
import { Button } from '@components/ui/Button';
import { Text } from '@components/ui/Text';
import { IconBrandSpotify } from '@tabler/icons-react';
import { GetServerSideProps } from 'next';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';
import Link from 'next/link';

interface Props {
  provider: ClientSafeProvider;
}

const Login = ({ provider }: Props) => {
  return (
    <Box
      flex="column"
      justify="center"
      align="center"
      spaceY="lg"
      css={{
        height: '100vh',
      }}
    >
      <Link href="/">
        <Text
          css={{
            cursor: 'pointer',
            transition: 'color 0.3s ease-in-out',
            letterSpacing: '-4px',
            '&:hover': {
              color: '$primary',
            },
          }}
          uppercase
          size="h3"
        >
          Sazaana
        </Text>
      </Link>
      <Button
        css={{
          alignItems: 'center',
          display: 'flex',
          gap: '$sm',
        }}
        onClick={() =>
          signIn(provider.id, {
            callbackUrl: '/',
          })
        }
        size="md"
      >
        <IconBrandSpotify size={34} />
        Login With Spotify
      </Button>
    </Box>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const providers = await getProviders();

  if (!providers?.spotify) {
    throw new Error('No Spotify provider found');
  }

  return {
    props: {
      provider: providers.spotify,
    },
  };
};
