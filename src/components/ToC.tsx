import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '../styles/variables';

const Div = styled.div`
  width: 260px;
  margin-left: 15px;
  position: sticky;
  top: 20px;

  p {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    ul {
      margin: 0;
      padding: 0 0 10px 0;

      li {
        a {
          padding: 1px 0;
          font-size: 12px;
          padding-left: 30px;
          font-weight: 400;
        }
      }
    }

    li {
      a {
        display: block;
        padding: 4px 20px;
        font-size: 13px;
        font-weight: 500;
        color: #767676;
        border-left: 1px solid transparent;

        &:hover {
          text-decoration: none;
          color: ${colors.strongBrand};
          border-left: 1px solid ${colors.strongBrand};
        }
      }
    }
  }
`;

interface ToCProps {
  contents: string;
}

const ToC: React.SFC<ToCProps> = ({
  contents
}) => (
  <Div dangerouslySetInnerHTML={{ __html: contents }} />
);

export default ToC;
