import React from "react";
import { Box } from "@components/ui/Box";
import { Text } from "@components/ui/Text";
import Link from "next/link";
import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";

interface Props {
  items: SpotifyApi.ArtistObjectFull[];
  setResultsOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchResults: FC<Props> = ({ items, setResultsOpen }) => {
  return (
    <Box
      as="ul"
      onBlur={() => setResultsOpen(false)}
      css={{
        maxHeight: "12.75rem",
        sy: "$sm",
        overflowY: "scroll",
        position: "relative",
      }}
      padding="md"
      border="full"
      mt="md"
    >
      {items.map((item, i) => (
        <Box as="li" onClick={() => setResultsOpen(false)} key={i}>
          <Link href={`/playlist/${item.id}`}>
            <Box
              css={{
                transition: "background-color 0.2s ease-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "$cyan6",
                },
              }}
              flex="row"
              radius="sm"
              padding="md"
              border="full"
              gap="sm"
              align="center"
            >
              <Box
                css={{
                  position: "relative",
                  width: "$lg",
                  height: "$lg",
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "4px",
                    filter: "grayscale(100%)",
                  }}
                  src={item.images[0]?.url!}
                  alt={item.name}
                  height={50}
                  width={50}
                />
              </Box>
              <Text css={{ fontWeight: "bold" }}>{item.name}</Text>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default SearchResults;
