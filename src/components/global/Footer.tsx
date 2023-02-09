import { Container } from '@components/ui/Container';
import { Text } from '@components/ui/Text';
import { styled } from '../../../stitches.config';

const Footer = () => {
  return (
    <Foot>
      <Container size="lg" flex="row" align="center" css={{ height: '100%' }}>
        <Text>
          © {new Date().getFullYear()} - Built by{' '}
          <a href="https://twitter.com/lorrehuggan">Lorre Huggan</a>
        </Text>
      </Container>
    </Foot>
  );
};

export default Footer;

const Foot = styled('footer', {
  height: '4rem',
});
