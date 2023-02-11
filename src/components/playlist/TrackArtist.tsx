import { Text } from '@components/ui/Text';
import { truncateString } from '@utils/index';
import Link from 'next/link';
import * as HoverCard from '@radix-ui/react-hover-card';
import { HoverCardArrow, HoverCardContent } from '@components/ui/HoverCard';
import { api } from '@utils/api';
import { useState } from 'react';
import { Box } from '@components/ui/Box';
import Image from 'next/image';
import { intToString } from '@utils/index';
import { Button } from '@components/ui/Button';
import ToolTipButton from '@components/ui/ToolTip';

interface Props {
  id: string;
  name: string;
}

const TrackArtist = ({ id, name }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = api.artistRouter.getByID.useQuery(
    {
      id,
    },
    {
      refetchOnWindowFocus: false,
      enabled: isOpen,
    }
  );

  return (
    <HoverCard.Root onOpenChange={setIsOpen} open={isOpen}>
      <HoverCard.Trigger asChild>
        <Link href={`/playlist/${id}`} key={id}>
          <Text
            hover="dark"
            css={{
              cursor: 'pointer',
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                color: '$gray12',
              },
            }}
            color="faded"
            as="p"
            size="p"
          >
            {truncateString(name, 20)}
          </Text>
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCardContent sideOffset={5}>
          <>
            {isLoading && (
              <Text as="p" size="p">
                Loading...
              </Text>
            )}
            {data && (
              <Content
                name={data.name}
                genres={data.genres}
                url={data?.images[2]?.url}
                followers={data.followers.total}
                popularity={data.popularity}
                spotifyUrl={data.external_urls.spotify}
                id={data.id}
              />
            )}
          </>
          <HoverCardArrow />
        </HoverCardContent>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default TrackArtist;

interface ContentProps {
  name: string;
  genres: string[];
  url: string | undefined;
  followers: number;
  popularity: number;
  spotifyUrl: string;
  id: string;
}

const Content = ({
  name,
  genres,
  url,
  followers,
  popularity,
  spotifyUrl,
  id,
}: ContentProps) => {
  return (
    <Box spaceY="md">
      <Box flex="row" gap="md" align="center">
        <Image
          style={{ borderRadius: '4px', objectFit: 'cover' }}
          src={url ? url : ''}
          alt={name}
          width={78}
          height={78}
        />
        <Box spaceY="sm">
          <Link href={spotifyUrl}>
            <Text css={{ cursor: 'pointer' }} hover="fade" as="h6" size="h6">
              {truncateString(name, 20)}
            </Text>
          </Link>
          <Text as="p" size="p">
            {intToString(followers)} followers
          </Text>
          <Button>
            <Link href={`/playlist/${id}`}>Discover</Link>
          </Button>
        </Box>
      </Box>
      <Box flex="row" gap="sm">
        {genres.slice(0, 3).map((genre) => (
          <Text color="faded" capitalize as="small" size="small" key={genre}>
            {genre}
          </Text>
        ))}
      </Box>
    </Box>
  );
};
