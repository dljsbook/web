import * as React from 'react';
import styled from 'react-emotion';
import Category from './Category';

interface IProps {
  children: JSX.Element;
}

const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`;

const SIZE = 350;
const ARROW = 5;
const Categorizer = styled.div`
border-radius: ${SIZE}px;
height: ${SIZE}px;
width: ${SIZE}px;
background: rgba(30,30,30,1);
position: absolute;
box-shadow: 0 -2px 4px rgba(0,0,0,0.5);
bottom: -${(SIZE/2) + (20) + 100}px;

&:after {
  display: block;
  content: "";
  background: rgba(255,255,255,0.9);
  width: calc(50%);
  height: ${ARROW}px;
  position: absolute;
  top: calc(50% - ${ARROW / 2}px - 100px);
  left: calc(50% - ${ARROW / 2}px);
  transform: rotate(-40deg);
  transform-origin: ${ARROW / 2}px;
  transition-duration: 0.1s;
}
`;

const Container = styled.div`
display: flex;
flex: 1;
`;

const UI:React.SFC<IProps> = ({
  children,
}) => (
  <Container>
    <Category title="One" />
    <Center>
      {children}
      <Categorizer />
    </Center>
    <Category title="Two" />
  </Container>
);

export default UI;
