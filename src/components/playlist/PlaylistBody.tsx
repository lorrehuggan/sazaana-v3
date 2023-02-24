import { Container } from '@components/ui/Container';
import { useEffect } from 'react';
import { useCurrentArtistStore } from '@state/currentArtist';
import { useCurrentPlaylistStore } from '@state/currentPlaylist';
import { api } from '@utils/api';
import Menu from './Menu';
import Tracklist from './Tracklist';
import { Text } from '@components/ui/Text';

const PlaylistBody = () => {
  const id = useCurrentArtistStore((state) => state.id);
  const { data, isLoading, error } = api.artistRouter.getPlaylist.useQuery(
    { id },
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    }
  );
  const { setData, setShadowData, setIsLoading, setError } =
    useCurrentPlaylistStore((state) => state);

  useEffect(() => {
    if (data) {
      setData(data);
      setShadowData(data);
    }
  }, [data]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setError(error);
  }, [error]);

  if (isLoading)
    return (
      <Container height="full" mt="2xl" as="section" pb="2xl" size="lg">
        <Text textAlign="center" size="h4">
          Building Playlist...
        </Text>
      </Container>
    );

  return (
    <>
      <Container
        css={{
          '@lg': {
            flexDirection: 'column',
          },
        }}
        flex="row"
        gap="xl"
        mt="xl"
        as="section"
        pb="2xl"
        size="lg"
      >
        <Menu />
        <Tracklist />
      </Container>
    </>
  );
};

export default PlaylistBody;
