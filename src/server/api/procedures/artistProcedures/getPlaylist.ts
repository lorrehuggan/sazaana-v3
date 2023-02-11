import { spotifyApi } from '@utils/spotify';
import z, { ZodError } from 'zod';
import { publicProcedure } from '../../trpc';
import { mockData } from '@utils/mockdata';

export const getPlaylist = publicProcedure
  .input(z.object({ id: z.string() }))
  .query(async ({ input: { id } }) => {
    let relatedArtists: SpotifyApi.ArtistObjectFull[];
    let relatedArtistsTopTracks = [] as SpotifyApi.TrackObjectFull[];

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

      relatedArtistsTopTracks = getTopTracks.flat(1);

      relatedArtistsTopTracks = relatedArtistsTopTracks
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

      relatedArtistsTopTracks = relatedArtistsTopTracks.slice(0, 12);

      const audioFeatures = await Promise.all(
        relatedArtistsTopTracks.map(async (track) => {
          const audioFeatures = await spotifyApi.getAudioFeaturesForTrack(
            track.id
          );
          return audioFeatures.body;
        })
      );

      const data = audioFeatures.map((feature, index) => {
        const track = relatedArtistsTopTracks[index];
        if (!track) throw new Error('No track found');
        return {
          features: feature,
          track: track,
        };
      });

      // let data = JSON.parse(mockData);

      // data = data
      //   .map((a) => ({ sort: Math.random(), value: a }))
      //   .sort((a, b) => a.sort - b.sort)
      //   .map((a) => a.value);

      return data;
    } catch (error: any) {
      if (error instanceof ZodError) {
        throw new Error(error.message);
      }
      console.log(error);
      throw new Error(error.message);
    }
  });
