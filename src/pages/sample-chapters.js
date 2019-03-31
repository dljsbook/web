import * as React from 'react';

// const expired = (expireDate) => (new Date()).getTime() - (new Date(expireDate)).getTime() > 0;

class RedirectPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.replace('https://dljsbook.com/book-sample-chapters.pdf');
      // if (expired('2019-02-19')) {
      //   window.location.replace('https://dljsbook.com/');
      // } else {
      //   window.location.replace('https://dljsbook.com/book-sample-chapter.pdf');
      // }
    }, 10);
  }

  render() {
    return (
      <div />
    );
  }
}

export default RedirectPage;
