import React from "react";
import { Box } from "@components/ui/Box";
import { Flex } from "@components/ui/Flex";
import { Text } from "@components/ui/Text";
import { truncateString } from "@utils/index";
import AudioPlayer from "./AudioPlayer";
import { useAudioPlayingState } from "@state/audioPlaying";
import TrackListPlaceHolder from "./TracklistPlaceholder";
import { useCurrentPlaylistStore } from "@state/currentPlaylist";
import TrackArtist from "./TrackArtist";
import { api } from "@utils/api";
import TracklistMenu from "./TracklistMenu";
import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import TrackImage from "./TrackImage";

const Tracklist = () => {
  const parent = useRef(null);
  const { id: trackPlayingId } = useAudioPlayingState((state) => state);
  const { data, isLoading, error, setData } = useCurrentPlaylistStore(
    (state) => state
  );

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, { duration: 500, easing: "ease-in-out" });
  }, [parent]);

  const createPlaylist = api.userRouter.createPlaylist.useMutation({
    onSuccess: (data) => {
      console.log("success");
    },
    onMutate: (s) => {
      console.log("mutate");
    },
    onError: (e) => {
      console.log("error");
    },
  });

  const playSong = api.userRouter.playAudio.useMutation({});

  if (isLoading) return <TrackListPlaceHolder status="Loading" />;

  if (error) return <TrackListPlaceHolder status="Error" />;

  function handleCreatePlaylist() {
    createPlaylist.mutate({
      name: "test",
      tracks: data.map((track) => track.track.uri),
    });
  }

  function handlePlaySong(uri: string) {
    playSong.mutate({
      uri: uri,
    });
  }

  return (
    <Box
      css={{
        "@lg": {
          width: "100%",
        },
      }}
      spaceY="md"
      width="twoThirds"
    >
      <TracklistMenu />
      <Box spaceY="md" ref={parent}>
        {data.map(({ track, features }) => (
          <Box flex="row" gap="md" key={track.id}>
            <TrackImage track={track} trackPlayingId={trackPlayingId} />
            <Box
              css={{
                width: "50%",
                "@md": {
                  flex: 1,
                },
              }}
              flex="column"
              justify="center"
              spaceY="xs"
            >
              <a href={track.external_urls?.spotify}>
                <Text
                  css={{
                    cursor: "pointer",
                    color:
                      trackPlayingId === track.preview_url ? "$primary" : "",
                  }}
                  hover="fade"
                  as="h6"
                  size="h6"
                >
                  {truncateString(track.name?.split("(")[0]!, 26)}
                </Text>
              </a>
              <Flex align="center" gap="sm">
                {track.explicit && (
                  <Flex
                    as="span"
                    justify="center"
                    align="center"
                    css={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "4px",
                      backgroundColor: "$gray9",
                      fontSize: "10px",
                      padding: "10px",
                      color: "$gray1",
                    }}
                  >
                    E
                  </Flex>
                )}
                {track.artists &&
                  track.artists
                    .slice(0, 1)
                    .map((artist) => (
                      <TrackArtist
                        key={artist.id}
                        name={artist.name}
                        id={artist.id}
                      />
                    ))}
              </Flex>
            </Box>
            <Box
              css={{ "@md": { display: "none" } }}
              width="quarter"
              flex="column"
              justify="center"
            >
              <Text color="faded" as="small" size="small">
                {truncateString(track?.album?.name, 20)}
              </Text>
            </Box>
            <AudioPlayer audio={track.preview_url} tempo={features.tempo} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Tracklist;

interface StatusProps {
  status: "Loading" | "Error";
}
