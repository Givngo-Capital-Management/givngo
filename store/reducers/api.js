import {FIREBASE_LOADED} from '../actions/api';

const initialState = {
  firebaseLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FIREBASE_LOADED:
      return {
        firebaseLoaded: true,
      };
    default:
      return false;
  }
}

export const getFirebaseLoaded = (state) => state.api.firebaseLoaded;