import * as React from 'react';
import styled from 'react-emotion';
import Button from './Button';
import UI from './UI';
import Picker from './Picker';

interface IProps {
}

interface IState {
  input: string | null;
}

const Container = styled.div`
min-height: 340px;
background: #f9f9f9;
box-shadow: 0 3px 2px rgba(0,0,0,0.15);
border-radius: 5px;
padding: 20px;
margin: 20px 0;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

video {
  width: 300px;
  height: 300px;
  background: black;
  border-radius: 5px;
}
`;

const Chooser = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Or = styled.div`
  &:after {
    display: block;
    content: "Or";
    width: 100%;
  }
`;

class ImageClassifier extends React.Component<IProps, IState> {
  state: IState = {
    input: 'images',
  };

  setInput = (input: string) => this.setState({
    input,
  })

  render() {
    if (this.state.input === null) {
      return (
        <Container>
          <Chooser>
            <p>Choose your input source</p>
            <Button handleClick={() => this.setInput('webcam')}>📷 Webcam</Button>
            <Or />
            <Button handleClick={() => this.setInput('images')}>🖼 Google Images</Button>
          </Chooser>
        </Container>
      );
    }

    return (
      <Container>
        <UI>
          {this.state.input === 'webcam' ? (
            <video />
          ) : (
            <Picker />
          )}
        </UI>
      </Container>
    );
  }
}

export default ImageClassifier;
