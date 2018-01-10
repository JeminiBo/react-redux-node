import React from 'react';

export const MyComponent = () => {
  return (
    <div>
      <h1>Content</h1>
    </div>
  );
};

class Content extends React.PureComponent {
  render() {
    return MyComponent();
  }
}

export default Content;