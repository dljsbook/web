import * as React from 'react';
import styled from 'react-emotion';

import { dimensions } from '../styles/variables';

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;

  h1 {
    margin: 3rem 0 0.5rem 0;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin: 3rem 0 0.5rem;
    padding: 0;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    margin: 2rem 0 0.5rem 0;
  }

  pre {
    padding: 20px;
    background: #f6f6f6;
    border-radius: 4px;
  }
`;

interface PageProps {
  className?: string;
}

const Page: React.SFC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
);

export default Page;
