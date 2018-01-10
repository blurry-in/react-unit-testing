import axios from 'axios';
import { Actions, AppConstants, Message } from '../utils/constants';

export const setImagesAction = imagesArr => ({
  type: Actions.SET_IMAGES,
  payload: imagesArr,
});

export const setImagesErrorAction = imagesErr => ({
  type: Actions.SET_IMAGES_ERROR,
  payload: imagesErr,
});

export const deleteImageAction = image => ({
  type: Actions.DELETE_IMAGE,
  payload: image,
});

export const getImagesAction = () => dispatch => axios.get(AppConstants.IMAGES_API)
  .then((response) => {
    const images = response.data.splice(0, 10);
    dispatch(setImagesAction(images));
  }).catch(() => {
    dispatch(setImagesErrorAction(Message.FETCH_IMAGES_FAILED));
  });

