import React from 'react';
import PropTypes from 'prop-types';

import './ImageComponent.scss';

const ImageComponent = props => (
  <div className="image-component text-danger">
    <img
      alt={props.data.title}
      src={props.data.thumbnailUrl}
    />
    <br />
    <button className="btn delete-btn" onClick={() => { props.onDelete(props.data); }}>
      Delete Image
    </button>
  </div>
);

ImageComponent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ImageComponent;
