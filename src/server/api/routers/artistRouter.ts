import { getPlaylist } from './../procedures/artistProcedures/getPlaylist';
import { getByID } from '../procedures/artistProcedures/getByID';
import { search } from '../procedures/artistProcedures/search';
import { createTRPCRouter } from '../trpc';

export const artistRouter = createTRPCRouter({
  search,
  getByID,
  getPlaylist,
});
