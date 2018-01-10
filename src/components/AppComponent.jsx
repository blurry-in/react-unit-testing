import React from 'react';
import PropTypes from 'prop-types';
import ImageComponent from './ImageComponent';


const AppComponent = (props) => {
  const { imagesData } = props.appData;
  let renderedImages = null;

  if (!imagesData.imagesErr) {
    renderedImages = imagesData.images.map(value => (
      <ImageComponent
        onDelete={props.onImageDelete}
        key={value.id}
        data={value}
      />
    ));
  }
  return (
    <div className="container">
      {imagesData.imagesErr ? imagesData.imagesErr : renderedImages}
    </div>
  );
};

AppComponent.propTypes = {
  appData: PropTypes.shape({
    imagesData: PropTypes.shape({}),
  }).isRequired,
  onImageDelete: PropTypes.func.isRequired,
};

export default AppComponent;
