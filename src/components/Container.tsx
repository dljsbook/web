import * as React from 'react'
import styled from 'react-emotion'

import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledContainer = styled.div`
  flex: 1;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.xl)}em;
  display: flex;
  align-items: flex-start;
`;

interface ContainerProps {
  className?: string;
  vertical?: boolean;
}

const Container: React.SFC<ContainerProps> = ({ children, className, vertical }) => (
  <StyledContainer
    style={{ flexDirection: vertical ? 'column' : 'row'}}
    className={className}>{children}</StyledContainer>
);

export default Container;
