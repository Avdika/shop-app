import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none"})}
`

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.dirrection === 'left' && '10px'};
  right: ${props => props.dirrection === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
export const Img = styled.img`
  height: 80%;
`

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

export const Title = styled.h1`
  font-size: 70px;
`

export const Descripion = styled.p`
  margin: 50px 0px;
  font-style: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

export const Button = styled.button`
  padding: 10px;
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
`
