import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AppContainer from './AppContainer';
import * as Actions from '../actions/AppActions';

describe('App Container', () => {
  let wrapper;
  const mockStore = configureMockStore([thunk]);
  const AppReducer = {
    imagesData: {
      images: [],
      imagesErr: '',
    },
  };
  let storeData;
  let store;

  beforeAll(() => {
    storeData = {
      AppReducer,
    };

    store = mockStore(storeData);
    wrapper = mount((
      <Provider store={store}>
        <AppContainer />
      </Provider>
    ));
  });

  it('Should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Should call the getImagesAction before component mounts', () => {
    const stub = sinon.stub(Actions, 'getImagesAction').returns(() => { });

    wrapper = mount((
      <Provider
        store={store}
        >
        <AppContainer />
      </Provider>
    ));
    expect(stub.getCalls().length).toBe(1);
  });
});
