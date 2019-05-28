import React from 'react';
import PropTypes from 'prop-types';


// Component for mistakes
class Mistakes extends React.PureComponent {
  render() {
    const {mistakes} = this.props;

    return <div className="game__mistakes">
      {this._getMistakeTemplate(mistakes)}
    </div>;
  }

  _getMistakeTemplate(count) {
    const mistakesTemplate = [];

    for (let i = 0; i < count; i++) {
      mistakesTemplate.push(<div className="wrong" key={i}></div>);
    }
    return mistakesTemplate;
  }
}


Mistakes.propTypes = {
  mistakes: PropTypes.number.isRequired,
};


export default Mistakes;
