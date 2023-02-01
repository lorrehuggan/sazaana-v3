import { Box } from '@components/ui/Box';
import { Flex } from '@components/ui/Flex';
import { Text } from '@components/ui/Text';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
  items: SpotifyApi.ArtistObjectFull[];
  setResultsOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchResults: FC<Props> = ({ items, setResultsOpen }) => {
  return (
    <Box
      css={{
        maxHeight: '12.75rem',
        sy: '$sm',
        overflowY: 'scroll',
        position: 'relative',
      }}
      padding="md"
      border="full"
      mt="md"
    >
      {items.map((item, i) => (
        <div onClick={() => setResultsOpen(false)} key={i}>
          <Link href={`/playlist/${item.id}`}>
            <Flex
              css={{
                border: '1px solid $gray10',
                padding: '$sm',
                borderRadius: '4px',
                transition: 'background-color 0.2s ease-out',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '$cyan6',
                },
              }}
              gap="sm"
              align="center"
            >
              <Box
                css={{
                  position: 'relative',
                  width: '$lg',
                  height: '$lg',
                }}
              >
                <Image
                  style={{
                    objectFit: 'cover',
                    borderRadius: '4px',
                    filter: 'grayscale(100%)',
                  }}
                  src={item.images[0]?.url!}
                  alt={item.name}
                  height={50}
                  width={50}
                />
              </Box>
              <Text css={{ fontWeight: 'bold' }}>{item.name}</Text>
            </Flex>
          </Link>
        </div>
      ))}
    </Box>
  );
};

export default SearchResults;
