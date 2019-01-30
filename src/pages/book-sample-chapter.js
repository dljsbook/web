import * as React from 'react';

class RedirectPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.location = `https://dljsbook.com/book-sample-chapter.pdf?no-cache=1`;
    }, 100);
  }

  render() {
    return (
      <div />
    );
  }
}

export default RedirectPage;
