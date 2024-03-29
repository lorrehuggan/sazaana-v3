import React from "react";
import { Box } from "@components/ui/Box";
import { CollapsibleRoot } from "@components/ui/Collapsible";
import { Text } from "@components/ui/Text";
import { useEffect, useState } from "react";
import FilterSlider from "./FilterSlider";
import * as Collapsible from "@radix-ui/react-collapsible";
import { IconButton } from "@components/ui/IconButton";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useCurrentPlaylistStore } from "@state/currentPlaylist";
import { useCurrentFilterState } from "@state/currentFilterState";

const filterData = [
  {
    label: "popularity",
    low: "playing at bars",
    high: "playing in stadiums",
    step: 10,
    min: 0,
    max: 100,
  },
  {
    label: "danceability",
    low: "cocktail party",
    high: "summer festival",
    step: 0.1,
    min: 0,
    max: 1,
  },
  {
    label: "energy",
    low: "library visit",
    high: "super bowl halftime show",
    step: 0.1,
    min: 0,
    max: 1,
  },
  {
    label: "mood",
    low: "rainy day",
    high: "dancing in the rain",
    step: 0.1,
    min: 0,
    max: 1,
  },
  {
    label: "tempo",
    low: "slow and steady",
    high: "fast and furious",
    min: 0,
    max: 200,
    step: 10,
  },
  {
    label: "acousticness",
    low: "made with a computer",
    high: "made with a guitar",
    min: 0,
    max: 1,
    step: 0.1,
  },
];

const FilterTracks = () => {
  const [open, setOpen] = useState(false);
  const { filter, setFilter } = useCurrentFilterState((state) => state);

  useEffect(() => {
    setFilter(filterData);
  }, []);

  return (
    <Box spaceY="lg" flex="column" full css={{}}>
      <CollapsibleRoot
        css={{ width: "100%" }}
        open={open}
        onOpenChange={setOpen}
      >
        <Box align="center" flex="row" justify="between">
          <Text as="h6" size="h6">
            Filter
          </Text>
          <Collapsible.Trigger asChild>
            <IconButton size="sm" variant="black">
              {open ? (
                <IconMinus color="#00000080" size={20} />
              ) : (
                <IconPlus color="#00000080" size={20} />
              )}
            </IconButton>
          </Collapsible.Trigger>
        </Box>
        <Collapsible.Content>
          <Box mt="md" spaceY="lg">
            {filter.map((filter) => (
              <FilterSlider
                key={filter.label}
                step={filter.step}
                min={filter.min}
                max={filter.max}
                label={filter.label}
                low={filter.low}
                high={filter.high}
                setFilter={setFilter}
              />
            ))}
          </Box>
        </Collapsible.Content>
      </CollapsibleRoot>
    </Box>
  );
};

export default FilterTracks;
