import { GetServerSideProps, type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import MainLayout from '@components/layout/MainLayout';
import Heading from '@components/home/Heading';
import Search from '@components/home/Search';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/playlist/2h93pZq0e7k5yf4dywlkpM',
    },
  };
};

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Sazaana" description="Sazaana App" />
      <MainLayout>
        <Heading />
        <Search />
      </MainLayout>
    </>
  );
};

export default Home;
