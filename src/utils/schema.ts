import z from 'zod';

export const SearchSchema = z.object({
  artist: z
    .string()
    .min(1, {
      message: 'Please enter a valid artist name',
    })
    .max(55, {
      message: 'Artist name is too long',
    }),
});

export const CreatePlaylistSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Please enter a valid playlist name' })
    .max(55, { message: 'Playlist name is too long' }),
});
