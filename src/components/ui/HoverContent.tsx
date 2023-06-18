import React from "react";
import { Text } from "@components/ui/Text";
import { truncateString } from "@utils/index";
import Link from "next/link";
import { useState } from "react";
import { Box } from "@components/ui/Box";
import { intToString } from "@utils/index";
import { Button } from "@components/ui/Button";

interface ContentProps {
  name: string;
  genres: string[];
  url: string | undefined;
  followers: number;
  popularity: number;
  spotifyUrl: string;
  id: string;
}

const HoverContent = ({
  name,
  genres,
  url,
  followers,
  popularity,
  spotifyUrl,
  id,
}: ContentProps) => {
  return (
    <Box spaceY="md">
      <Box flex="row" gap="md" align="center">
        <img
          style={{ borderRadius: "4px", objectFit: "cover" }}
          src={url ? url : ""}
          alt={name}
          width={78}
          height={78}
        />
        <Box spaceY="sm">
          <Link href={spotifyUrl}>
            <Text css={{ cursor: "pointer" }} hover="fade" as="h6" size="h6">
              {truncateString(name, 20)}
            </Text>
          </Link>
          <Text as="p" size="p">
            {intToString(followers)} followers
          </Text>
          <Button>
            <Link href={`/playlist/${id}`}>Discover</Link>
          </Button>
        </Box>
      </Box>
      <Box flex="row" gap="sm">
        {genres.slice(0, 2).map((genre) => (
          <Text color="faded" capitalize as="small" size="small" key={genre}>
            {genre}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default HoverContent;
