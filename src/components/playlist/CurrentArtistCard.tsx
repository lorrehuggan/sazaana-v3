import React from "react";
import { Container } from "@components/ui/Container";
import { api } from "@utils/api";
import { useCurrentArtistStore } from "@state/currentArtist";
import ArtistCard from "./ArtistCard";

const CurrentArtistCard = () => {
  const id = useCurrentArtistStore((state) => state.id);
  const { data, isLoading, error } = api.artistRouter.getByID.useQuery(
    {
      id,
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    }
  );

  return (
    <>
      <Container
        css={{
          "@md": {
            mt: "$lg",
          },
          gap: "$md",
        }}
        as="section"
        mt="xl"
        size="lg"
        flex="row"
      >
        <ArtistCard data={data} isLoading={isLoading} error={error?.message} />
      </Container>
    </>
  );
};

export default CurrentArtistCard;
