import { type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import HomeLayout from '@components/layout/HomeLayout';
import Heading from '@components/home/Heading';
import Search from '@components/home/Search';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Sazaana" description="Sazaana App" />
      <HomeLayout>
        <Heading />
        <Search />
      </HomeLayout>
    </>
  );
};

export default Home;
