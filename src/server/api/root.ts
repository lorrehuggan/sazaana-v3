import { createTRPCRouter } from './trpc';
import { artistRouter } from './routers/artistRouter';
import { userRouter } from './routers/userRouter';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  artistRouter,
  userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
