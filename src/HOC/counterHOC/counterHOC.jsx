import React, { Component } from 'react';

function counterHOC(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        counter: 0,
      };
      this.increase = this.increase.bind(this);
    }

    increase() {
      this.setState(({ counter }) => ({ counter: counter + 1 }));
    }

    render() {
      const { counter } = this.state;
      return (
        <div onClick={this.increase}>
          <WrappedComponent />
          <p>{`You click ${counter} times`}</p>
        </div>
      );
    }
  };
}

export default counterHOC;
