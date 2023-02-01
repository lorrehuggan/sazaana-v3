import { type GetServerSideProps, type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import MainLayout from '@components/layout/HomeLayout';
import Heading from '@components/home/Heading';
import Search from '@components/home/Search';
import { api } from '@utils/api';
import CurrentArtistCard from '@components/playlist/CurrentArtistCard';

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
  const { data: currentArtistData, isLoading: currentArtistLoading } =
    api.artistRouter.getByID.useQuery({ id });
  const { data } = api.artistRouter.getPlaylist.useQuery({ id });
  return (
    <>
      <NextSeo
        title={`${currentArtistData?.name} | Sazaana` || 'Sazaana'}
        description={`Sazaana is a music discovery platform that lets you listen to millions of songs from around the world.`}
      />
      <MainLayout>
        <Heading />
        <Search />
        {currentArtistData && (
          <CurrentArtistCard
            isLoading={currentArtistLoading}
            data={currentArtistData}
          />
        )}
        {/* {data && JSON.stringify(data, null, 2)} */}
      </MainLayout>
    </>
  );
};

export default Playlist;
