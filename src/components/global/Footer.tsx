import { Container } from '@components/ui/Container';
import { styled } from '../../../stitches.config';

const Footer = () => {
  return (
    <Foot>
      <Container
        size="lg"
        css={{ height: '100%', display: 'flex', alignItems: 'center' }}
      >
        footer
      </Container>
    </Foot>
  );
};

export default Footer;

const Foot = styled('footer', {
  height: '4rem',
});
