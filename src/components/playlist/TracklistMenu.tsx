import { Box } from '@components/ui/Box';
import TracklistMetrics from './TracklistMetrics';

const TracklistMenu = () => {
  return (
    <Box css={{ height: '32px' }} full flex="row" justify="end">
      <TracklistMetrics />
    </Box>
  );
};

export default TracklistMenu;
