import ErrorMessage from '@components/global/ErrorMessage';
import { Box } from '@components/ui/Box';
import { Button } from '@components/ui/Button';
import { Text } from '@components/ui/Text';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCurrentPlaylistStore } from '@state/currentPlaylist';
import { IconBrandSpotify } from '@tabler/icons-react';
import { api } from '@utils/api';
import { CreatePlaylistSchema } from '@utils/schema';
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { styled } from '../../../stitches.config';
import FilterTracks from './Filter';

type CreatePlaylistType = z.infer<typeof CreatePlaylistSchema>;

const Menu = () => {
  const [isCreatePlaylistSuccess, setIsCreatePlaylistSuccess] = useState(false);
  const { data: session } = useSession();
  const currentPlaylist = useCurrentPlaylistStore((state) => state.data);
  const createPlaylist = api.userRouter.createPlaylist.useMutation({
    onSuccess: (data) => {
      setIsCreatePlaylistSuccess(true);
    },
    onError: (error) => {
      console.log(error);
    },
    onMutate: (data) => {
      console.log(data);
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreatePlaylistType>({
    resolver: zodResolver(CreatePlaylistSchema),
  });

  function onSubmit(data: CreatePlaylistType) {
    createPlaylist.mutate({
      name: data.name,
      tracks: currentPlaylist.map((track) => track.track.uri),
    });
    reset();
  }

  useEffect(() => {
    if (isCreatePlaylistSuccess) {
      setTimeout(() => {
        setIsCreatePlaylistSuccess(false);
      }, 3000);
    }
  }, [isCreatePlaylistSuccess]);

  return (
    <Box
      spaceY="lg"
      css={{
        flex: 1,
        '@lg': {
          display: 'none',
        },
      }}
    >
      <Box onSubmit={handleSubmit(onSubmit)} as="form" spaceY="md" radius="sm">
        <Text as="h6" size="h6">
          Keep This Playlist
        </Text>
        {session ? (
          <Input
            autoComplete="off"
            {...register('name')}
            placeholder="Enter Playlist Name"
          />
        ) : (
          <Text color="faded">
            {' '}
            Sign in with Spotify and save your songs to a playlist
          </Text>
        )}
        {session ? (
          <Button
            disabled={isSubmitting}
            type="submit"
            // onClick={handleCreatePlaylist}
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '$xs',
            }}
            size="md"
            width="full"
            variant="black"
          >
            <IconBrandSpotify
              size={24}
              style={{
                color: '#17D860',
              }}
            />
            Save To Spotify
          </Button>
        ) : (
          <Button
            onClick={() => signIn('spotify')}
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '$xs',
            }}
            size="md"
            width="full"
            variant="black"
          >
            <IconBrandSpotify
              size={24}
              style={{
                color: '#17D860',
              }}
            />
            Sign In To Save
          </Button>
        )}
      </Box>
      {errors.name && <ErrorMessage errors={errors.name.message} />}
      {isCreatePlaylistSuccess && <ErrorMessage errors="Playlist Created" />}
      <FilterTracks />
    </Box>
  );
};

export default Menu;

const Input = styled('input', {
  appearance: 'none',
  all: 'unset',
  py: '$sm',
  borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
  width: '100%',
});
