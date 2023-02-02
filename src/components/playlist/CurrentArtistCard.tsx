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
      <Container as="section" mt="md" size="lg">
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
          <Box gap="sm" css={{ minHeight: '60px' }} flex="column">
            <Text size="h4">{data?.name}</Text>
            <Text textAlign="right" fontWeight="400" color="faded" size="h6">
              <Flex align="center" gap="xs">
                {data && intToString(data?.followers.total)} Followers
              </Flex>
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CurrentArtistCard;
