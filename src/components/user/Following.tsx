import React from "react";
import ArtistImage from "@components/playlist/ArtistImage";
import { Box } from "@components/ui/Box";
import { Container } from "@components/ui/Container";
import { Text } from "@components/ui/Text";
import { api } from "@utils/api";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { truncateString } from "@utils/index";

const Following = () => {
  const { data: session } = useSession();

  const { data, isLoading, isError } =
    api.userRouter.getFollowedArtists.useQuery();

  if (!session) return null;
  if (isLoading)
    return (
      <Container size="lg" mt="lg">
        Loading...
      </Container>
    );
  if (isError)
    return (
      <Container size="lg" mt="lg">
        Opps somthing went wrong...
      </Container>
    );

  return (
    <>
      <Container size="lg" mt="lg">
        <Text color="faded" as="h5" size="h6">
          {`Favorite artist`}
        </Text>
      </Container>
      <Container
        css={{
          overflowX: "scroll",
          overflowY: "hidden",
          "@md": {
            pt: "$sm",
          },
        }}
        as="section"
        pt="sm"
        pb="lg"
        size="lg"
        gap="sm"
        flex="row"
      >
        {data &&
          data?.map((artist) => {
            return (
              <Box flex="column" key={artist.id} spaceY="sm">
                <Link href={`/playlist/${artist.id}`}>
                  <Text
                    hover="dark"
                    css={{
                      cursor: "pointer",
                      transition: "color 0.3s ease-in-out",
                      "&:hover": {
                        color: "$gray12",
                      },
                    }}
                    color="faded"
                    as="p"
                    size="p"
                  >
                    {truncateString(artist.name, 13)}
                  </Text>
                </Link>
                <Link href={`/playlist/${artist.id}`}>
                  <Box
                    css={{
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    {artist.images[2] && (
                      <ArtistImage
                        url={artist.images[2].url}
                        width={100}
                        height={100}
                        name={artist.name}
                      />
                    )}
                  </Box>
                </Link>
              </Box>
            );
          })}
      </Container>
    </>
  );
};

export default Following;
