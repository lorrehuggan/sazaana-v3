import React from "react";
import { Box } from "@components/ui/Box";
import { Text } from "@components/ui/Text";
import TracklistMetrics from "./TracklistMetrics";

const TracklistMenu = () => {
  return (
    <Box full flex="row" justify="between">
      <Text color="faded">Sazaana Playlist</Text>
      <TracklistMetrics />
    </Box>
  );
};

export default TracklistMenu;
