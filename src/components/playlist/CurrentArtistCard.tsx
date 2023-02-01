import { FC } from 'react';
import Image from 'next/image';
import { type GetServerSideProps } from 'next';
import { Box } from '@components/ui/Box';
import { Container } from '@components/ui/Container';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import { intToString } from '@utils/index';
import { api } from '@utils/api';

interface Props {
  data: SpotifyApi.SingleArtistResponse;
  isLoading: boolean;
}

const CurrentArtistCard: FC<Props> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <Container mt="md" size="lg">
        <Text size="h4" as="h4">
          Loading
        </Text>
      </Container>
    );
  }
  return (
    <Container mt="md" size="lg">
      <Flex gap="sm">
        <Box>
          <Image
            style={{
              objectFit: 'cover',
              borderRadius: '4px',
            }}
            width={80}
            height={80}
            src={`${data?.images[1]?.url}`}
            alt={data?.name}
          />
        </Box>
        <Flex gap="sm" css={{ minHeight: '60px' }} direction="column">
          <Text size="h4">{data?.name}</Text>
          <Text textAlign="right" fontWeight="400" color="faded" size="h6">
            <Flex align="center" gap="xs">
              {data && intToString(data?.followers.total)} Followers
            </Flex>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CurrentArtistCard;
