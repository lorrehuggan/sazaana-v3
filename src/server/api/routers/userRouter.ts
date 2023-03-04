import { getFollowedArtists } from './../procedures/userProcedures/getFollowedArtists';
import { playAudio } from './../procedures/userProcedures/playAudio';
import { createTRPCRouter } from '../trpc';
import { createPlaylist } from '../procedures/userProcedures/createPlaylist';

export const userRouter = createTRPCRouter({
  createPlaylist,
  playAudio,
  getFollowedArtists,
});
