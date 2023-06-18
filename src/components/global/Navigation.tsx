import React from "react";
import { Container } from "@components/ui/Container";
import { Text } from "@components/ui/Text";
import { styled } from "../../../stitches.config";
import { Box } from "@components/ui/Box";
import Link from "next/link";
import { Button } from "@components/ui/Button";
import { signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";

const Navigation = () => {
  const { data: session } = useSession();
  return (
    <Nav>
      <Container
        size="lg"
        flex="row"
        align="center"
        css={{
          height: "100%",
        }}
      >
        <Box flex="row" align="center" justify="between" full>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              cursor: "pointer",
            }}
            href="/"
          >
            <Box bg="primary" padding="sm" radius="sm" css={{ px: "$md" }}>
              <Text
                fontWeight="700"
                css={{
                  color: "$white",
                }}
              >
                SAZAANA
              </Text>
            </Box>
          </Link>
          <Box>
            <ul style={{ display: "flex", gap: "8px", alignItems: "center" }}>
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

const Nav = styled("nav", {
  height: "4rem",
});
