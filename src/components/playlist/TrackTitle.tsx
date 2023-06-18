import React from "react";
import { Box } from "@components/ui/Box";
import { Text } from "@components/ui/Text";
import { truncateString } from "@utils/index";
import Link from "next/link";

interface Props {
  trackHref: string;
  trackName: string;
  trackExplicit: boolean;
  trackArtists: {
    id: string;
    name: string;
  }[];
}

const TrackTitle = ({
  trackArtists,
  trackExplicit,
  trackHref,
  trackName,
}: Props) => {
  return (
    <Box width="half" flex="column" justify="center" spaceY="xs">
      <a href={trackHref}>
        <Text css={{ cursor: "pointer" }} hover="fade" as="h6" size="h6">
          {truncateString(trackName?.split("(")[0]!, 26)}
        </Text>
      </a>
      <Box flex="row" align="center" gap="sm">
        {trackExplicit && (
          <Box
            flex="row"
            as="span"
            justify="center"
            align="center"
            radius="sm"
            css={{
              width: "8px",
              height: "8px",
              backgroundColor: "$gray9",
              fontSize: "10px",
              padding: "10px",
              color: "$gray1",
            }}
          >
            E
          </Box>
        )}
        {trackArtists.slice(0, 2).map((artist) => (
          <Link href={`/playlist/${artist.id}`} key={artist.id}>
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
              {artist.name}
            </Text>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default TrackTitle;
