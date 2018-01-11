import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppComponent from '../components/AppComponent';
import { getImagesAction, deleteImageAction } from '../actions/AppActions';

class AppContainer extends React.Component {
  componentWillMount() {
    this.props.getImagesAction();
    this.onImageDelete = this.onImageDelete.bind(this);
  }

  onImageDelete(image) {
    this.props.deleteImageAction(image);
  }

  render() {
    return (
      <AppComponent
        onImageDelete={this.onImageDelete}
        appData={this.props.appData}
        />
    );
  }
}

AppContainer.propTypes = {
  appData: PropTypes.shape({}).isRequired,
  getImagesAction: PropTypes.func.isRequired,
  deleteImageAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appData: state.AppReducer,
});

const mapDispatchToProps = dispatch => ({
  getImagesAction: () => { dispatch(getImagesAction()); },
  deleteImageAction: (image) => { dispatch(deleteImageAction(image)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
