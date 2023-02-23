import { Box } from '@components/ui/Box';
import { Text } from '@components/ui/Text';
import { intToString } from '@utils/index';
import Image from 'next/image';

interface Props {
  data: SpotifyApi.ArtistObjectFull | undefined;
  isLoading: boolean;
  error: string | undefined;
}

const ArtistCard = ({ data, isLoading, error }: Props) => {
  if (isLoading) return <PlaceHolder status="Loading" />;

  if (error) return <PlaceHolder status="Error" />;

  if (!data) return <PlaceHolder status="Error" />;

  return (
    <Box flex="row" gap="sm">
      <Box
        css={{
          '@md': {
            display: 'none',
          },
        }}
        flex="row"
      >
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
      <Box
        css={{
          display: 'none',
          '@md': {
            display: 'block',
          },
        }}
        flex="row"
      >
        <Image
          style={{
            objectFit: 'cover',
            borderRadius: '4px',
            boxShadow: '1px 2px 5px 1px rgba(0,0,0,0.2)',
          }}
          width={80}
          height={80}
          src={`${data.images[2]?.url}`}
          alt={data?.name}
        />
      </Box>
      <Box css={{ minHeight: 'auto' }} justify="between" flex="column">
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
  );
};

export default ArtistCard;

interface StatusProps {
  status: 'Loading' | 'Error' | null;
}

const PlaceHolder = ({ status }: StatusProps) => {
  return (
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
  );
};
