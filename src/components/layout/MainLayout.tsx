import Footer from '@components/global/Footer';
import Navigation from '@components/global/Navigation';
import { type FC, type ReactNode } from 'react';
import { styled } from '../../../stitches.config';

interface Props {
  children: ReactNode;
}

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default HomeLayout;

const Main = styled('main', {
  minHeight: 'calc(100vh - 8rem)',
});
