import { Actions } from '../utils/constants';

const initialState = {
  imagesData: {
    images: [],
  },
};

const AppReducer = (state = initialState, action) => {
  const tempState = Object.assign({}, state);
  switch (action.type) {
    case Actions.SET_IMAGES:
      tempState.imagesData.images = action.payload;
      break;
    default:
      return tempState;
  }

  return tempState;
};

export default AppReducer;

