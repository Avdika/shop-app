import { useState } from 'react';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { SliderItems } from '../data';
import { Container, Arrow, Wrapper, Slide, ImgContainer, Img, InfoContainer, Title, Descripion, Button } from './Styles/slider';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {

    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
    }
   }

  return (<Container>
    <Arrow dirrection='left' onClick={() => handleClick('left')}>
      <ArrowBackIosSharpIcon />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
      {SliderItems.map((item) => {
        return (
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Img src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Descripion>{item.desc}</Descripion>
            <Button>Buy now</Button>
          </InfoContainer>
        </Slide>
        )}
      )}
    </Wrapper>
    <Arrow dirrection='right' onClick={() => handleClick('right')}>
      <ArrowForwardIosSharpIcon />
    </Arrow>
  </Container>);
};

export default Slider;
