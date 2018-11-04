import * as React from 'react';
import styled from 'react-emotion';
import Container from '../components/Container';
import { colors } from '../styles/variables';

const JumbotronContainer = styled.div`
  background: hsl(210, ${100}%, ${23 + 45}%);
  background: ${colors.strongBrand};
  height: 195px;
  margin-bottom: 20px;
  display: flex;

  h1, h2 {
    color: white;
    font-weight: 300;
    display: block;
  }

  h1 {
    font-size: 3.2rem;
    margin-top: 40px;
  }

  h2 {
    margin-top: 10px;
    font-size: 24px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Right = styled.div`
  max-width: 47%;
  display: flex;
  height: 100%;

  blockquote {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0;
  margin: 0;
  color: rgba(255,255,255,0.7);
  flex: 1;
  justify-content: center;
  font-size: 24px;
  text-align: justify;

  a {
  color: inherit;
  }
  }
`;

const Author = styled.span`
  text-align: right;
  font-size: 18px;
  margin-top: 20px;
`;

interface JumbotronProps {
  title: string;
  description?: string;
}

const Jumbotron: React.SFC<JumbotronProps> = ({
  title,
  description,
}) => (
  <JumbotronContainer>
    <Container>
      <Left>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </Left>
      <Right>
        <blockquote>
          80 percent of data science is cleaning the data and 20 percent is complaining about cleaning the data. <Author>&mdash; <a href="https://www.theverge.com/2017/11/1/16589246/machine-learning-data-science-dirty-data-kaggle-survey-2017">Anthony Goldbloom, CEO of Kaggle</a></Author>
  </blockquote>
      </Right>
    </Container>
  </JumbotronContainer>
);

export default Jumbotron;
