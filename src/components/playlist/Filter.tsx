import { Box } from '@components/ui/Box';
import { Text } from '@components/ui/Text';
import { useState } from 'react';
import FilterSlider from './FilterSlider';

const FilterTracks = () => {
  const [value, setValue] = useState('50');

  return (
    <Box spaceY="lg" flex="column" full css={{ height: '30rem' }}>
      <Text as="h6" size="h6">
        Filter
      </Text>
      <FilterSlider
        category="Tempo"
        start={0}
        end={100}
        low="Slow & Steady"
        high="Fast & Ready"
      />
    </Box>
  );
};

export default FilterTracks;
