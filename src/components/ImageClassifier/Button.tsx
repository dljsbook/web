import * as React from 'react';
import styled from 'react-emotion';

interface IProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element | string;
}

const StyledButton = styled.button`
  background: linear-gradient(hsl(210,100%,78%), hsl(210,100%,68%));
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  margin: 0 10px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: linear-gradient(hsl(210,100%,73%), hsl(210,100%,63%));
  }

  &:active {
    background: linear-gradient(hsl(210,100%,73%), hsl(210,100%,58%));
  }
`;

const Button:React.SFC<IProps> = ({
  children,
  handleClick,
}) => (
  <StyledButton onClick={handleClick}>
    {children}
  </StyledButton>
);

export default Button;
