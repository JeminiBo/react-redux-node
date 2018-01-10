import React from 'react';

export const MyComponent = () => {
  return (
    <div>
      <h1>Здесь будет информация</h1>
    </div>
  );
};

class Content extends React.PureComponent {
  render() {
    return MyComponent();
  }
}

export default Content;