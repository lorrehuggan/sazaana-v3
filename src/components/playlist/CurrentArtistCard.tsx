import Image from 'next/image';
import { Box } from '@components/ui/Box';
import { Container } from '@components/ui/Container';
import { Text } from '@components/ui/Text';
import { intToString } from '@utils/index';
import { api } from '@utils/api';
import { useCurrentArtistStore } from '@state/currentArtist';

const CurrentArtistCard = () => {
  const id = useCurrentArtistStore((state) => state.id);
  const { data, isLoading, error } = api.artistRouter.getByID.useQuery(
    {
      id,
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    }
  );

  if (isLoading) return <PlaceHolder status="Loading" />;

  if (error) return <PlaceHolder status="Error" />;

  return (
    <>
      <Container as="section" mt="xl" size="lg">
        <Box flex="row" gap="sm">
          <Box flex="row">
            <Image
              style={{
                objectFit: 'cover',
                borderRadius: '4px',
                boxShadow: '1px 2px 5px 1px rgba(0,0,0,0.2)',
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
              <Text fontWeight="400" size="h6">
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

interface StatusProps {
  status: 'Loading' | 'Error';
}

const PlaceHolder = ({ status }: StatusProps) => {
  return (
    <Container as="section" mt="xl" size="lg">
      <Box flex="row" gap="sm">
        <Box
          css={{ height: '120px', width: '120px', backgroundColor: '$gray7' }}
          radius="md"
          flex="row"
        ></Box>
        <Box css={{ minHeight: '120px' }} justify="between" flex="column">
          <Box css={{ sy: '$sm' }}>
            <Text size="h4">{status}</Text>
            <Text fontWeight="400" color="faded" size="h6">
              {status}
            </Text>
            <Text color="faded">{status}</Text>
          </Box>
          <Box flex="row" gap="sm">
            {status}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
