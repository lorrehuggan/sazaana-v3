import { Box } from '@components/ui/Box';
import { Text } from '@components/ui/Text';
import { useCurrentPlaylistStore } from '@state/currentPlaylist';
import { convertMsToMinutesAndSeconds } from '@utils/index';

const TracklistMetrics = () => {
  const data = useCurrentPlaylistStore((state) => state.data);

  if (!data) return null;

  return (
    <Box flex="row" gap="sm">
      <Text size="small" fontWeight="700">{`${data.length} Tracks`}</Text>
      <Text size="small" fontWeight="700">
        {convertMsToMinutesAndSeconds(
          data.reduce((acc, curr) => acc + curr.track.duration_ms, 0)
        )}
      </Text>
    </Box>
  );
};

export default TracklistMetrics;
