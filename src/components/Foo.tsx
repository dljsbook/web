import * as React from 'react';

interface FooProps {
  foo: string;
}

const Foo: React.SFC<FooProps> = ({ foo }) => (
  <div>{foo}</div>
);

export default Foo;
