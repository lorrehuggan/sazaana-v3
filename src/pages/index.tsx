import React from "react";
import { GetServerSideProps, type NextPage } from "next";
import MainLayout from "@components/layout/MainLayout";
import Heading from "@components/home/Heading";
import Search from "@components/home/Search";
import Following from "@components/user/Following";
import { useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async () => {
  const artists = [
    "06HL4z0CvFAxyc27GXpf02",
    "1RyvyyTE3xzB2ZywiAwp0i",
    "2wY79sveU1sp5g7SokKOiI",
    "3TVXtAsR1Inumwj472S9r4",
    "6eUKZXaKkcviH0Ku9w2n3V",
    "2WoVwexZuODvclzULjPQtm",
  ];
  const randomArtist = artists[Math.floor(Math.random() * artists.length)];
  return {
    redirect: {
      permanent: false,
      destination: `/playlist/${randomArtist}`,
    },
  };
};

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <MainLayout title="Sazaana">
        <Heading />
        <Search />
        {session && <Following />}
      </MainLayout>
    </>
  );
};

export default Home;
