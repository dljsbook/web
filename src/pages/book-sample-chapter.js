import * as React from 'react';

class RedirectPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.replace('https://dljsbook.com/book-sample-chapter.pdf');
    }, 100);
  }

  render() {
    return (
      <div />
    );
  }
}

export default RedirectPage;
