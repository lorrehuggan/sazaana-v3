import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { styled } from "../../../stitches.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@components/ui/Container";
import { IconButton } from "@components/ui/IconButton";
import {
  IconSearch,
  IconArrowBadgeRight,
  IconReload,
} from "@tabler/icons-react";
import { SearchSchema } from "@utils/schema";
import { api } from "@utils/api";
import { spinAnimation } from "@utils/keyframes";
import { Box } from "@components/ui/Box";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";
import { useCurrentPlaylistStore } from "@state/currentPlaylist";
import ErrorMessage from "@components/global/ErrorMessage";

type SearchType = z.infer<typeof SearchSchema>;

const Search = () => {
  const [resultsOpen, setResultsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SearchType>({
    resolver: zodResolver(SearchSchema),
  });

  const { mutate, isLoading, data, isError, error } =
    api.artistRouter.search.useMutation({
      onSuccess: () => {
        setResultsOpen(true);
      },
    });

  const { isLoading: followsIsLoading, data: followsData } =
    api.userRouter.getFollowedArtists.useQuery();

  async function onSubmit(data: SearchType) {
    // reset();
    mutate(data);
  }

  useEffect(() => {
    if (!getValues().artist) setResultsOpen(false);
  }, [getValues().artist]);

  return (
    <>
      <Container
        css={{
          "@md": {
            pt: "$lg",
          },
        }}
        as="section"
        pt="2xl"
        size="lg"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            flex="row"
            border="bottom"
            css={{ height: "3.25rem" }}
            align="center"
            gap="sm"
          >
            <div>
              <IconSearch size={20} color="#00000090" />
            </div>
            <Input
              {...register("artist")}
              type="text"
              placeholder="Search by Artist"
              aria-label="Search by Artist"
              autoComplete="off"
              css={{
                h: "100%",
                fontSize: "$md",
              }}
            />
            <SubmitButton isLoading={isLoading} />
          </Box>
          {errors.artist && <ErrorMessage errors={errors.artist.message} />}
          {isError && <ErrorMessage errors={error.message} />}
        </form>
        {resultsOpen && data && (
          <SearchResults setResultsOpen={setResultsOpen} items={data.items} />
        )}
      </Container>
    </>
  );
};

export default Search;

interface SubmitButtonProps {
  isLoading: boolean;
}

function SubmitButton({ isLoading }: SubmitButtonProps) {
  const playlistLoading = useCurrentPlaylistStore((state) => state.isLoading);
  return (
    <>
      {isLoading || playlistLoading ? (
        <IconButton size="sm" type="button" disabled>
          <IconReload
            style={{
              animation: spinAnimation,
            }}
            size={20}
            color="#17171790"
          />
        </IconButton>
      ) : (
        <IconButton outlined variant="black" size="sm" type="submit">
          <IconArrowBadgeRight size={20} color="#17171790" />
        </IconButton>
      )}
    </>
  );
}

const Input = styled("input", {
  // Reset
  appearance: "none",
  border: "none",
  outline: "none",
  background: "none",

  width: "100%",
  color: "$gray11",
});
