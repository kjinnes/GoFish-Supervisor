import axios from 'axios';
import dayjs from 'dayjs';
import { API } from '../../next.config';
import {
  SAVE_VISIT,
  UPDATE_PIN,
  UPDATE_VISIT,
  NEW_VISIT,
} from './actionTypes';

export const newVisit = () => ({
  type: NEW_VISIT,
  payload: {
    creekName: '',
    date: dayjs(new Date()).format('YYYY-MM-DD'),
    flowType: '',
    visibility: '',
    waterCondition: '',
    viewCondition: '',
    comments: '',
    distance: '',
  },
});

export const updatePin = (update) => ({
  type: UPDATE_PIN,
  payload: update,
});

export const updateVisit = (update) => ({
  type: UPDATE_VISIT,
  payload: update,
});

export const saveVisit = (visit) => async (dispatch) => {
  axios.post(`${API}visit`, visit)
    .then(() => dispatch({
      type: SAVE_VISIT,
      payload: null,
    }))
    .catch(() => dispatch({
      type: UPDATE_VISIT,
      payload: visit,
    }));
};
