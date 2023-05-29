import { SearchSchema } from '@utils/schema';
import { spotifyApi } from '@utils/spotify';
import { ZodError } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '../../trpc';

export const search = publicProcedure
  .input(SearchSchema)
  .mutation(async ({ input }) => {
    let artists_id: string[] = [];

    try {
      const client = await spotifyApi.clientCredentialsGrant();
      spotifyApi.setAccessToken(client.body.access_token);

      const response = await spotifyApi.searchTracks(`artist:${input.artist}`, {
        market: 'US',
        limit: 12,
      });

      if (response.statusCode !== 200) {
        throw new Error('Bad response');
      }

      const data = response.body.tracks?.items;

      if (!data) {
        throw new Error('No data found');
      }

      data.forEach((item) => {
        if (item.artists[0]) {
          artists_id = [...artists_id, item.artists[0].id];
        } else {
          throw new Error('No artist found');
        }
      });

      artists_id = [...new Set(artists_id)];

      const items = await Promise.all(
        artists_id.map(async (id) => {
          const artist = await spotifyApi.getArtist(id);
          return artist.body;
        })
      );

      return {
        items,
      };
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(error.message);
      }
      console.log(error);
      throw new Error('Something went wrong');
    }
  });
