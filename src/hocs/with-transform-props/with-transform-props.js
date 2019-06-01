import React from 'react';


/**
 * Helper for transform old props to the new
 * @param {Function} transformFunc
 * @return {function(*): function(*=): *}
 */
const withTransformProps = (transformFunc) => (Component) => {
  const WithTransformProps = (props) => {
    const newProps = transformFunc(props);
    return <Component {...newProps} />;
  };

  return WithTransformProps;
};

export default withTransformProps;
