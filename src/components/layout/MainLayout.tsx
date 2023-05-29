import Footer from '@components/global/Footer';
import Navigation from '@components/global/Navigation';
import { NextSeo } from 'next-seo';
import { type FC, type ReactNode } from 'react';
import { styled } from '../../../stitches.config';

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
  tags?: string[];
}

const defaultDescription =
  'The Sazaana Web App is a simple and easy-to-use web application that allows users to create a personalized Spotify playlist based on their favorite artists.';

const defaultTags = [
  'sazaana',
  'spotify',
  'playlist',
  'music',
  'web app',
  'webapp',
  'web application',
  'webapplication',
  'playlist generator',
  'playlist generator',
];

const HomeLayout: FC<Props> = ({
  children,
  title,
  description = defaultDescription,
  tags = defaultTags,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: tags.join(', '),
          },
        ]}
      />
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
