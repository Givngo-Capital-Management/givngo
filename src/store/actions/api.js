import {createAction} from './index';

export const FIREBASE_LOADED = 'FIREBASE_LOADED';
export const firebaseLoaded = createAction.bind(null, FIREBASE_LOADED);