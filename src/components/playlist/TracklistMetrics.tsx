import { Box } from '@components/ui/Box';
import { Text } from '@components/ui/Text';
import { useCurrentArtistStore } from '@state/currentArtist';
import { api } from '@utils/api';
import { convertMsToMinutesAndSeconds } from '@utils/index';

const TracklistMetrics = () => {
  const id = useCurrentArtistStore((state) => state.id);
  const { data, isLoading, error } = api.artistRouter.getPlaylist.useQuery(
    { id },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return null;

  if (error) return null;

  return (
    <Box flex="row" gap="sm">
      <Text size="small" fontWeight="700">{`${data.length} Tracks`}</Text>
      <Text size="small" fontWeight="700">
        {convertMsToMinutesAndSeconds(
          data.reduce((acc, curr) => acc + curr.duration_ms, 0)
        )}
      </Text>
    </Box>
  );
};

export default TracklistMetrics;
