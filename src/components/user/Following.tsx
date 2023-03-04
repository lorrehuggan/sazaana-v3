import { api } from '@utils/api';

const Following = () => {
  const { data } = api.userRouter.getFollowedArtists.useQuery();

  return <div>{JSON.stringify(data)}</div>;
};

export default Following;
