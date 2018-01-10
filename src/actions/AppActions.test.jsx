import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Actions } from '../utils/constants';
import { setImagesErrorAction, getImagesAction } from './AppActions';

describe('AppActions', () => {
  const errorMessage = 'Some error';
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  const expectedImageErrAction = {
    type: Actions.SET_IMAGES_ERROR,
    payload: errorMessage,
  };

  it('setImagesErrAction() should create the expected action objest', () => {
    expect(setImagesErrorAction(errorMessage)).toEqual(expectedImageErrAction);
  });

  it('getImagesAction() should create the expected action objest', () => {
    const store = mockStore({});
    return store.dispatch(getImagesAction())
      .then(() => {
        const expectedActions = store.getActions();
        console.log(expectedActions);
      });
  });
});
