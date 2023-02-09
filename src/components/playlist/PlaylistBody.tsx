import { Container } from '@components/ui/Container';
import { useEffect } from 'react';
import { useCurrentArtistStore } from '@state/currentArtist';
import { useCurrentPlaylistStore } from '@state/currentPlaylist';
import { api } from '@utils/api';
import Menu from './Menu';
import Tracklist from './Tracklist';

const PlaylistBody = () => {
  const id = useCurrentArtistStore((state) => state.id);
  const { data, isLoading, error } = api.artistRouter.getPlaylist.useQuery(
    { id },
    {
      refetchOnWindowFocus: false,
    }
  );
  const { setData, setIsLoading, setError } = useCurrentPlaylistStore(
    (state) => state
  );

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setError(error);
  }, [error]);

  return (
    <Container flex="row" gap="xl" mt="xl" as="section" size="lg">
      <Menu />
      <Tracklist />
    </Container>
  );
};

export default PlaylistBody;
