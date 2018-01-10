import React from 'react';
import PropTypes from 'prop-types';

const ImageComponent = props => (
  <div className="text-danger">
    <img
      alt="Logo"
      src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    />
    <button onClick={() => { props.onDelete(props.data); }}>Delete Image</button>
  </div>
);

ImageComponent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default ImageComponent;
