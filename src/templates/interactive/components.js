import styled from 'react-emotion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  background: black;
  position: relative;
  flex: 1;

  &:after {
    content: "Loading";
    color: white;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    margin-top: -100px;
    z-index: 1;
  }

  > * {
    flex: 1;
  }

  iframe {
    position: relative;
    z-index: 2;
    width: 100% !important;
    height: 100% !important;
    border: 0 !important;
    border-radius: 0 !important;
    overflow: hidden;
  }
`;

export const Header = styled.div`
  background: hsl(206,100%,68%);
  color: white;
  padding: 10px 20px;
`;
