import { spotifyApi } from '@utils/spotify';
import z, { ZodError } from 'zod';
import { publicProcedure } from '../../trpc';
import { mockArtistData } from '@utils/mockdata';

export const getByID = publicProcedure
  .input(z.object({ id: z.string() }))
  .query(async ({ input }) => {
    try {
      const client = await spotifyApi.clientCredentialsGrant();
      spotifyApi.setAccessToken(client.body.access_token);
      const response = await spotifyApi.getArtist(input.id);
      if (response.statusCode !== 200) {
        throw new Error('Bad response');
      }
      // return JSON.parse(mockArtistData);
      const data = response.body;
      return data;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(error.message);
      }
      console.log(error);
      throw new Error('Something went wrong');
    }
  });
