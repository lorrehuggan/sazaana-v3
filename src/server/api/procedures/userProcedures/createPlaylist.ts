import { create } from 'zustand';
import { spotifyApi } from '@utils/spotify';
import z, { ZodError } from 'zod';
import { protectedProcedure } from '../../trpc';

export const createPlaylist = protectedProcedure
  .input(
    z.object({
      name: z.string(),
      tracks: z.array(z.string()),
    })
  )
  .mutation(async ({ input, ctx }) => {
    // get account details from prisma

    try {
      const account = await ctx.prisma.account.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
      });
      if (!account?.access_token) throw new Error('Access token not found');
      if (!account?.refresh_token) throw new Error('Refresh token not found');

      spotifyApi.setRefreshToken(account.refresh_token);
      const refreshToken = await spotifyApi.refreshAccessToken();
      spotifyApi.setAccessToken(refreshToken.body.access_token);

      const createPlaylist = await spotifyApi.createPlaylist(input.name, {
        collaborative: false,
        description: 'Playlist created with Sazaana.com',
        public: true,
      });
      const playlistId = createPlaylist.body.id;
      const addTracks = await spotifyApi.addTracksToPlaylist(
        playlistId,
        input.tracks
      );
      return addTracks.body;
    } catch (error: any) {
      if (error instanceof ZodError) {
        throw new Error(error.message);
      }
      throw new Error(error);
    }
  });
