import { spotifyApi } from '@utils/spotify';
import z, { ZodError } from 'zod';
import { protectedProcedure } from '../../trpc';

export const playAudio = protectedProcedure
  .input(
    z.object({
      uri: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
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

      const play = await spotifyApi.play({
        uris: [input.uri],
      });
      return play.body;
    } catch (error: any) {
      if (error instanceof ZodError) {
        throw new Error(error.message);
      }
      throw new Error(error);
    }
  });
