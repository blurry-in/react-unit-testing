import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import axios from 'axios';
import { Actions } from '../utils/constants';
import { setImagesErrorAction, getImagesAction, setImagesAction } from './AppActions';

describe('AppActions', () => {
  const errorMessage = 'Some error';
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  const imagesResponse = [];

  const expectedImageErrAction = {
    type: Actions.SET_IMAGES_ERROR,
    payload: errorMessage,
  };

  it('setImagesErrAction() should create the expected action objest', () => {
    expect(setImagesErrorAction(errorMessage)).toEqual(expectedImageErrAction);
  });

  it('getImagesAction() should generate setImagesAction() on success', () => {
    const store = mockStore({});

    sinon.stub(axios, 'get').returns(new Promise((res) => {
      res({
        data: imagesResponse,
      });
    }));

    return store.dispatch(getImagesAction())
      .then(() => {
        const expectedActions = store.getActions();
        expect(expectedActions[0]).toEqual(setImagesAction(imagesResponse));
      });
  });
});
