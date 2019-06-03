import React from 'react';
import PropTypes from 'prop-types';


/**
 * Helper for authorization
 * @param {Node} Component
 * @return {WithActivePlayer}
 */
const withAuthorization = (Component) => {

  class WithAuthorization extends React.PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        name: `email@email.ru`,
        password: `password`,
      };

      this._logIn = this._logIn.bind(this);
      this._onChange = this._onChange.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        logIn={this._logIn}
        name={this.state.name}
        onChange={this._onChange}
        password={this.state.password}
      />;
    }

    _onChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value,
      });
    }

    _logIn(evt) {
      evt.preventDefault();
      this.props.logIn({
        email: this.state.name,
        password: this.state.password,
      });
    }
  }

  WithAuthorization.propTypes = {
    logIn: PropTypes.func.isRequired,
  };

  return WithAuthorization;
};


export default withAuthorization;
