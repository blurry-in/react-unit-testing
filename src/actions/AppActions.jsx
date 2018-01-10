import { Actions, AppConstants, Message } from '../utils/constants';

export const setImagesAction = imagesArr => ({
  type: Actions.SET_IMAGES,
  payload: imagesArr,
});

export const setImagesErrorAction = imagesArr => ({
  type: Actions.SET_IMAGES_ERROR,
  payload: imagesArr,
});

export const getImagesAction = () => dispatch => fetch(AppConstants.IMAGES_API)
  .then(response => response.json())
  .then((response) => {
    dispatch(setImagesAction(response));
  })
  .catch(() => {
    dispatch(setImagesAction(Message.FETCH_IMAGES_FAILED));
  });

