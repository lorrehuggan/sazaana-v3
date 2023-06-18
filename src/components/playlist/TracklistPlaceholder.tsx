import React from "react";
import { Box } from "@components/ui/Box";
import { Flex } from "@components/ui/Flex";
import { IconButton } from "@components/ui/IconButton";
import { Text } from "@components/ui/Text";
import { IconPlayerPlay } from "@tabler/icons-react";

interface Props {
  status: string;
}

const TrackListPlaceHolder = ({ status }: Props) => {
  return (
    <Box spaceY="md" padding="md" width="twoThirds">
      {new Array(1).fill(0).map((_, i) => (
        <Flex key={i} gap="md">
          <Box
            css={{ width: "64px", height: "64px", backgroundColor: "$gray6" }}
            radius="md"
          ></Box>

          <Box
            css={{ width: "50%" }}
            flex="column"
            justify="center"
            spaceY="xs"
          >
            <a>
              <Text css={{ cursor: "pointer" }} hover="fade" as="h6" size="h6">
                {status}
              </Text>
            </a>
            <Flex align="center" gap="sm">
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
                L
              </Flex>
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
                {status}
              </Text>
            </Flex>
          </Box>
          <Box width="quarter" flex="column" justify="center">
            <Text color="faded" as="small" size="small">
              {status}
            </Text>
          </Box>
          <Box flex="column" align="end" justify="center" css={{ flex: 1 }}>
            <IconButton disabled variant="black">
              <IconPlayerPlay color="#00000080" size={20} />
            </IconButton>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default TrackListPlaceHolder;
