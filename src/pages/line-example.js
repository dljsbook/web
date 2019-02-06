import * as React from 'react';

const expired = (expireDate) => (new Date()).getTime() - (new Date(expireDate)).getTime() > 0;

class RedirectPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (expired('2019-02-09')) {
        window.location.replace('https://dljsbook.com/');
      } else {
        window.location.replace('https://dljsbook.com/book-sample-chapter.pdf');
      }
    }, 100);
  }

  render() {
    return (
      <div />
    );
  }
}

export default RedirectPage;
