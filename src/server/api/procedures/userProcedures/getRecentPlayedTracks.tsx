import { create } from 'zustand';
import { spotifyApi } from '@utils/spotify';
import z, { ZodError } from 'zod';
import { protectedProcedure } from '../../trpc';

export const getRecentPlayedTracks = protectedProcedure
  .query(async ({ input, ctx }) => {
  })

