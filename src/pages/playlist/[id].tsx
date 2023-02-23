import { type GetServerSideProps, type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import MainLayout from '@components/layout/MainLayout';
import Heading from '@components/home/Heading';
import Search from '@components/home/Search';
import { api } from '@utils/api';
import CurrentArtistCard from '@components/playlist/CurrentArtistCard';
import PlaylistBody from '@components/playlist/PlaylistBody';
import { useCurrentArtistStore } from '@state/currentArtist';
import { useEffect } from 'react';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  return {
    props: {
      id,
    },
  };
};

interface Props {
  id: string;
}

const Playlist: NextPage<Props> = ({ id }) => {
  const setId = useCurrentArtistStore((state) => state.setId);
  const { data: currentArtistData, isLoading: currentArtistLoading } =
    api.artistRouter.getByID.useQuery({ id });

  useEffect(() => {
    setId(id);
  }, [id]);

  return (
    <>
      <NextSeo
        title={`${
          currentArtistLoading
            ? 'Loading...'
            : currentArtistData?.name + ' - ' + 'Sazaana Playlist'
        }`}
        description={`Sazaana is a music discovery platform that lets you listen to millions of songs from around the world.`}
      />
      <MainLayout>
        <Heading />
        <Search />
        {/* <CurrentArtistCard />
        <PlaylistBody /> */}
      </MainLayout>
    </>
  );
};

export default Playlist;
