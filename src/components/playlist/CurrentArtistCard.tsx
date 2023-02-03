import { FC } from 'react';
import Image from 'next/image';
import { type GetServerSideProps } from 'next';
import { Box } from '@components/ui/Box';
import { Container } from '@components/ui/Container';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { intToString } from '@utils/index';
import { api } from '@utils/api';
import { useCurrentArtistStore } from '@state/currentArtist';

const CurrentArtistCard = () => {
  const id = useCurrentArtistStore((state) => state.id);
  const { data, isLoading, error } = api.artistRouter.getByID.useQuery({
    id,
  });

  if (isLoading) {
    return (
      <Container as="section" mt="md" size="lg">
        <Text size="h4" as="h4">
          Loading
        </Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container mt="md" size="lg">
        <Text size="h4" as="h4">
          Error
        </Text>
      </Container>
    );
  }

  return (
    <>
      <Container as="section" mt="xl" size="lg">
        <Box flex="row" gap="sm">
          <Box flex="row">
            <Image
              style={{
                objectFit: 'cover',
                borderRadius: '4px',
              }}
              width={120}
              height={120}
              src={`${data.images[2]?.url}`}
              alt={data?.name}
            />
          </Box>
          <Box css={{ minHeight: '120px' }} justify="between" flex="column">
            <Box css={{ sy: '$sm' }}>
              <Text size="h4">{data?.name}</Text>
              <Text fontWeight="400" color="faded" size="h6">
                {data && intToString(data?.followers.total)} Followers
              </Text>
              <Text color="faded">{`${data.popularity}% Popularity`}</Text>
            </Box>
            <Box flex="row" gap="sm">
              {data.genres.slice(0, 2).map((genre) => (
                <Text size="small" color="faded" capitalize key={genre}>
                  {genre}
                </Text>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CurrentArtistCard;
