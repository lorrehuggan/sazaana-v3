import React from "react";
import { Box } from "@components/ui/Box";
import { Button } from "@components/ui/Button";
import { Text } from "@components/ui/Text";
import { IconBrandSpotify } from "@tabler/icons-react";
import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";

import Link from "next/link";
import LoginLayout from "@components/layout/LoginLayout";

interface Props {
  provider: ClientSafeProvider;
}

const Login = ({ provider }: Props) => {
  return (
    <LoginLayout title="login">
      <Box padding="lg" flex="column" align="center" spaceY="sm">
        <Link href="/">
          <Text
            css={{
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
              letterSpacing: "-4px",
              "&:hover": {
                color: "$primary",
              },
            }}
            uppercase
            size="h4"
          >
            Sazaana
          </Text>
        </Link>
        <Button
          css={{
            alignItems: "center",
            display: "flex",
            gap: "$sm",
          }}
          onClick={() =>
            signIn(provider.id, {
              callbackUrl: "/",
            })
          }
          size="sm"
        >
          <IconBrandSpotify size={34} />
          Login
        </Button>
      </Box>
    </LoginLayout>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  if (!providers?.spotify) {
    throw new Error("No Spotify provider found");
  }

  return {
    props: {
      provider: providers.spotify,
    },
  };
};
