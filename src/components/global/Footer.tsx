import { Container } from '@components/ui/Container';
import { styled } from '../../../stitches.config';

const Footer = () => {
  return (
    <Foot>
      <Container size="lg" flex="row" align="center" css={{ height: '100%' }}>
        footer
      </Container>
    </Foot>
  );
};

export default Footer;

const Foot = styled('footer', {
  height: '4rem',
});
