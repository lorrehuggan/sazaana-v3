import { useRouter } from 'next/router';
import { type GetServerSideProps, type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import MainLayout from '@components/layout/HomeLayout';
import Heading from '@components/home/Heading';
import Search from '@components/home/Search';
import { Container } from '@components/ui/Container';
import { api } from '@utils/api';
import { Text } from '@components/ui/Text';
import { intToString } from '@utils/index';
import { Flex } from '@components/ui/Flex';
import { IconHeart } from '@tabler/icons-react';
import { Box } from '@components/ui/Box';
import Image from 'next/image';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  console.log(id);

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
  const { query } = useRouter();
  const { data, isLoading } = api.artistRouter.getArtistById.useQuery({ id });
  return (
    <>
      <NextSeo
        title={`${data?.name} | Sazaana` || 'Sazaana'}
        description={`Sazaana is a music discovery platform that lets you listen to millions of songs from around the world.`}
      />
      <MainLayout>
        <Heading />
        <Search />
        {data && (
          <Container mt="md" size="lg">
            {isLoading && <p>Loading...</p>}
            <Flex align="center" gap="sm">
              <Box>
                <Image
                  style={{
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                  width={60}
                  height={60}
                  src={`${data?.images[2]?.url}`}
                  alt={data?.name}
                />
              </Box>
              <Flex
                css={{ minHeight: '60px' }}
                direction="column"
                justify="between"
              >
                <Text size="h4">{data?.name}</Text>
                <Text fontWeight="400" color="primary" size="h6">
                  <Flex align="center" gap="xs">
                    {data && intToString(data?.followers.total)} Followers
                  </Flex>
                </Text>
              </Flex>
            </Flex>
          </Container>
        )}
      </MainLayout>
    </>
  );
};

export default Playlist;
