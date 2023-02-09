import { Box } from '@components/ui/Box';
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from '@components/ui/Slider';
import { Text } from '@components/ui/Text';

interface Props {
  category: string;
  start: number;
  end: number;
  low: string;
  high: string;
}

const FilterSlider = ({ category, start, end, low, high }: Props) => {
  return (
    <Box spaceY="md">
      <Text textAlign="center" as="p" size="p">
        {category}
      </Text>
      <SliderRoot defaultValue={[start, end]} minStepsBetweenThumbs={1}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb />
        <SliderThumb />
      </SliderRoot>
      <Box flex="row" justify="between">
        <Text as="small" size="small">
          {low}
        </Text>
        <Text as="small" size="small">
          {high}
        </Text>
      </Box>
    </Box>
  );
};

export default FilterSlider;
