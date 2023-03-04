import { GetServerSideProps, type NextPage } from 'next';
import MainLayout from '@components/layout/MainLayout';
import Heading from '@components/home/Heading';
import Search from '@components/home/Search';
import Following from '@components/user/Following';

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     redirect: {
//       permanent: false,
//       destination: `/playlist/${process.env.FEATURED_ARTIST_ID}`,
//     },
//   };
// };

const Home: NextPage = () => {
  return (
    <>
      <MainLayout title="Sazaana">
        <Heading />
        <Search />
      </MainLayout>
    </>
  );
};

export default Home;
