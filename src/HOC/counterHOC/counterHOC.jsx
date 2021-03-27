import React, { Component } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import { HocContainerStyled, ButtonStyled } from './styled';

function counterHOC(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        counter: 0,
        showSpinner: false,
      };

      this.increase = this.increase.bind(this);
      this.showMeSpinner = this.showMeSpinner.bind(this);
    }

    increase() {
      this.setState(({ counter }) => ({ counter: counter + 1 }));
    }

    showMeSpinner() {
      this.setState(({ showSpinner }) => ({ showSpinner: !showSpinner }));
    }

    render() {
      const { counter, showSpinner } = this.state;
      return (
        <HocContainerStyled>
          {showSpinner ? (
            <HocContainerStyled>
              <ClimbingBoxLoader />
              <ButtonStyled onClick={this.showMeSpinner}>
                Back to counter
              </ButtonStyled>
            </HocContainerStyled>
          ) : (
            <div onClick={this.increase}>
              <WrappedComponent />
              <p>{`You click ${counter} times`}</p>
              <ButtonStyled onClick={this.showMeSpinner}>
                Show me Spinner
              </ButtonStyled>
            </div>
          )}
        </HocContainerStyled>
      );
    }
  };
}

export default counterHOC;
