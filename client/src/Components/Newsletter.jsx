import { FiSend as Send } from 'react-icons/fi';
import { Container, Title, Desc, InputContainer, Input, Button } from './Styles/newsletter';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
