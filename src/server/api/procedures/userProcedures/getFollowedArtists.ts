import { spotifyApi } from '@utils/spotify';
import z, { ZodError } from 'zod';
import { protectedProcedure } from '../../trpc';

export const getFollowedArtists = protectedProcedure.query(async ({ ctx }) => {
  try {
    if (!ctx.session.user.id) return null;
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

    const followedArtists = await spotifyApi.getFollowedArtists({
      limit: 10,
    });

    return followedArtists.body.artists.items;
  } catch (error: any) {
    if (error instanceof ZodError) {
      throw new Error(error.message);
    }
    throw new Error(error);
  }
});
