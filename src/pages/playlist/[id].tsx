import { type GetServerSideProps, type NextPage } from "next";
import { NextSeo } from "next-seo";
import MainLayout from "@components/layout/MainLayout";
import Heading from "@components/home/Heading";
import Search from "@components/home/Search";
import { api } from "@utils/api";
import CurrentArtistCard from "@components/playlist/CurrentArtistCard";
import PlaylistBody from "@components/playlist/PlaylistBody";
import { useCurrentArtistStore } from "@state/currentArtist";
import { useEffect } from "react";
import Following from "@components/user/Following";

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
      <MainLayout title={`${currentArtistData?.name} | Sazaana`}>
        <Heading />
        <Search />
        <CurrentArtistCard />
        <Following />
        <PlaylistBody />
      </MainLayout>
    </>
  );
};

export default Playlist;
