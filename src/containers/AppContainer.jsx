import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppComponent from '../components/AppComponent';
import { getImagesAction } from '../actions/AppActions';

class AppContainer extends React.Component {
  componentWillMount() {
    this.props.getImagesAction();
  }

  render() {
    return (
      <AppComponent appData={this.props.appData} />
    );
  }
}

AppContainer.propTypes = {
  appData: PropTypes.shape({}).isRequired,
  getImagesAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appData: state.AppReducer,
});

const mapDispatchToProps = dispatch => ({
  getImagesAction: () => { dispatch(getImagesAction()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
