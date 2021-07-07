import firebase from 'firebase/app';
import { firebaseClient } from '../../auth/firebaseClient';
import 'firebase/auth';
import {
  GET_USER,
  LOG_IN,
  LOG_OUT,
  ERROR,
} from './actionTypes';

export const getUser = () => async (dispatch) => {
  firebaseClient();
  const auth = await firebase.auth();
  const { currentUser } = await auth;
  if (currentUser) {
    return dispatch({
      type: GET_USER,
      payload: {
        displayName: currentUser.displayName,
        email: currentUser.email,
        uid: currentUser.uid,
      },
    });
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return dispatch({
        type: GET_USER,
        payload: {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        },
      });
    }
    return dispatch({
      type: GET_USER,
      payload: null,
    });
  });
  return dispatch({
    type: GET_USER,
    payload: null,
  });
};

export const logOut = () => async (dispatch) => {
  firebaseClient();
  try {
    await firebase.auth().signOut();
    return dispatch({
      type: LOG_OUT,
      payload: null,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const logIn = (email, password) => async (dispatch) => {
  firebaseClient();
  try {
    const result = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .catch((error) => error);
    return dispatch({
      type: LOG_IN,
      payload: {
        email: result.user.email,
        uid: result.user.uid,
        displayName: result.user.displayName,
      },
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
