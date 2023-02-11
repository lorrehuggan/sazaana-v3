import { Box } from '@components/ui/Box';
import { Button } from '@components/ui/Button';
import { Text } from '@components/ui/Text';
import { GetServerSideProps } from 'next';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';

interface Props {
  provider: ClientSafeProvider;
}

const Login = ({ provider }: Props) => {
  return (
    <Box
      flex="column"
      justify="center"
      align="center"
      css={{
        height: '100vh',
      }}
    >
      <Button
        onClick={() =>
          signIn(provider.id, {
            callbackUrl: '/',
          })
        }
        size="md"
      >
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
