import { GetServerSideProps } from 'next';
import { getProviders } from 'next-auth/react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
