import React from 'react';

class ErrorLogger extends React.Component {
  componentDidCatch(error, info) {
    // TODO: implement error reporting
    console.error(error, info);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorLogger;
