import _ from 'lodash';
import { Actions } from '../utils/constants';

const initialState = {
  imagesData: {
    images: [],
    imagesErr: '',
  },
};

const AppReducer = (state = initialState, action) => {
  const tempState = Object.assign({}, state);
  switch (action.type) {
    case Actions.SET_IMAGES:
      tempState.imagesData.images = action.payload;
      break;
    case Actions.SET_IMAGES_ERROR:
      tempState.imagesData.images = [];
      tempState.imagesData.imagesErr = action.payload;
      break;
    case Actions.DELETE_IMAGE: {
      const { images } = tempState.imagesData;
      tempState.imagesData.images = _.filter(images, value => value.id !== action.payload.id);
      break;
    }
    default:
      return tempState;
  }

  return tempState;
};

export default AppReducer;

