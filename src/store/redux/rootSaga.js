import { all } from 'redux-saga/effects';
import authSaga from '../redux/mods/auth/authSaga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
