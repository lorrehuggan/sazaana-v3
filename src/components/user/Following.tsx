import ArtistImage from "@components/playlist/ArtistImage";
import { Box } from "@components/ui/Box";
import { Container } from "@components/ui/Container";
import { Text } from "@components/ui/Text";
import { api } from "@utils/api";
import { useSession } from "next-auth/react";
import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";
import { useState } from "react";

const Following = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const { data, isLoading, isError } =
    api.userRouter.getFollowedArtists.useQuery();

  if (!session) return null;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Container size="lg" mt="md">
        <Text as="h5" size="h5">
          {`${session.user?.name} favorite artist`}
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
        pt="lg"
        pb="lg"
        size="lg"
        gap="sm"
        flex="row"
      >
        {data &&
          data?.map((artist) => {
            return (
              <Link href={`/playlist/${artist.id}`} key={artist.id}>
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
            );
          })}
      </Container>
    </>
  );
};

export default Following;
