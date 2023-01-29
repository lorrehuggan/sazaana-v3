import { SearchSchema } from '@utils/schema';
import { spotifyApi } from '@utils/spotify';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc';

export const artistRouter = createTRPCRouter({
  search: publicProcedure.input(SearchSchema).mutation(async ({ input }) => {
    const client = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(client.body.access_token);

    const response = await spotifyApi.searchArtists(input.artist, {
      market: 'US',
      limit: 12,
    });

    return {
      artist: response.body.artists,
    };
  }),
});
