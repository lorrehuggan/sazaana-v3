import React from "react";
import { Box } from "@components/ui/Box";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "@components/ui/Slider";
import { Text } from "@components/ui/Text";
import { useCurrentFeaturesStore } from "@state/currentFeatures";
import { Filter } from "@state/currentFilterState";
import { useCurrentPlaylistStore } from "@state/currentPlaylist";
import { useMemo, useState } from "react";

interface Props {
  label: string;
  low: string;
  high: string;
  step: number;
  min: number;
  max: number;
  setFilter: (filter: Filter[]) => void;
}

const FilterSlider = ({
  label,
  low,
  high,
  step,
  min,
  max,
  setFilter,
}: Props) => {
  const {
    popularity,
    tempo,
    valence,
    energy,
    acousticness,
    danceability,
    setPopularity,
    setEnergy,
    setTempo,
    setDanceability,
    setValence,
    setAcousticness,
  } = useCurrentFeaturesStore((state) => state);

  const { setData, shadowData, data } = useCurrentPlaylistStore(
    (state) => state
  );
  const [sliderHovered, setSliderHovered] = useState(false);

  useMemo(() => {
    if (
      popularity[0]! > 0 ||
      popularity[1]! < 100 ||
      danceability[0]! > 0 ||
      danceability[1]! < 1 ||
      energy[0]! > 0 ||
      energy[1]! < 1 ||
      valence[0]! > 0 ||
      valence[1]! < 1 ||
      tempo[0]! > 0 ||
      tempo[1]! < 200 ||
      acousticness[0]! > 0 ||
      acousticness[1]! < 1
    ) {
      let filtered = shadowData.filter((track) => {
        return (
          track.track.popularity >= popularity[0]! &&
          track.track.popularity <= popularity[1]! &&
          track.features.danceability >= danceability[0]! &&
          track.features.danceability <= danceability[1]! &&
          track.features.energy >= energy[0]! &&
          track.features.energy <= energy[1]! &&
          track.features.valence >= valence[0]! &&
          track.features.valence <= valence[1]! &&
          track.features.tempo >= tempo[0]! &&
          track.features.tempo <= tempo[1]! &&
          track.features.acousticness >= acousticness[0]! &&
          track.features.acousticness <= acousticness[1]!
        );
      });
      setData(filtered);
    }
  }, [
    popularity,
    energy,
    tempo,
    danceability,
    acousticness,
    valence,
    setData,
    shadowData,
  ]);

  function update(e: number[]) {
    switch (label) {
      case "popularity":
        setPopularity(e);

        break;
      case "energy":
        setEnergy(e);

        break;
      case "tempo":
        setTempo(e);

        break;
      case "danceability":
        setDanceability(e);

        break;
      case "mood":
        setValence(e);

        break;
      case "acousticness":
        setAcousticness(e);

        break;
    }
  }
  return (
    <Box spaceY="sm">
      <Text fontWeight="700" capitalize as="p" size="h6">
        {label}
      </Text>
      <SliderRoot
        onMouseEnter={() => {
          setSliderHovered(true);
        }}
        onMouseLeave={() => {
          setSliderHovered(false);
        }}
        aria-label={label}
        defaultValue={[min, max]}
        minStepsBetweenThumbs={1}
        step={step}
        onValueChange={(e) => {
          update(e);
        }}
        onValueCommit={(e) => { }}
        min={min}
        max={max}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb
          css={{
            opacity: sliderHovered ? 1 : 0,
            "@lg": {
              opacity: 1,
            },
          }}
          id="slider-thumb"
        />
        <SliderThumb
          css={{
            opacity: sliderHovered ? 1 : 0,
            "@lg": {
              opacity: 1,
            },
          }}
          id="slider-thumb"
        />
      </SliderRoot>
      <Box flex="row" justify="between">
        <Text uppercase as="small" size="small">
          {low}
        </Text>
        <Text uppercase as="small" size="small">
          {high}
        </Text>
      </Box>
    </Box>
  );
};

export default FilterSlider;
