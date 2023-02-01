import { spotifyApi } from '@utils/spotify';
import z, { ZodError } from 'zod';
import { publicProcedure } from '../../trpc';

export const getPlaylist = publicProcedure
  .input(z.object({ id: z.string() }))
  .query(async ({ input: { id } }) => {
    let relatedArtists: SpotifyApi.ArtistObjectFull[];
    let relatedArtistsTopTracks = [] as SpotifyApi.ArtistsTopTracksResponse[];
    try {
      const client = await spotifyApi.clientCredentialsGrant();
      spotifyApi.setAccessToken(client.body.access_token);

      relatedArtists = await spotifyApi
        .getArtistRelatedArtists(id)
        .then((data) => data.body.artists);

      if (relatedArtists.length === 0) {
        throw new Error('No related artists found');
      }

      const relatedArtistsIDs = relatedArtists.map((artist) => artist.id);

      const getTopTracks = await Promise.all(
        relatedArtistsIDs.map(async (id) => {
          const topTracks = await spotifyApi.getArtistTopTracks(id, 'US');
          return topTracks.body.tracks;
        })
      );

      getTopTracks.forEach((tracks) => {
        relatedArtistsTopTracks.push(
          {
            ...tracks[1],
          },
          {
            ...tracks[2],
          },
          {
            ...tracks[3],
          }
        );
      });

      const audioFeatures = await Promise.all(
        relatedArtistsTopTracks.map(async (track) => {
          const audioFeatures = await spotifyApi.getAudioFeaturesForTrack(
            track.id
          );
          return audioFeatures.body;
        })
      );

      return relatedArtistsTopTracks;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(error.message);
      }
      console.log(error);
      throw new Error('Something went wrong');
    }
  });
