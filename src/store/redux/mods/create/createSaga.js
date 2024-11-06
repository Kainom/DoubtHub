import { takeLatest, call, put } from 'redux-saga/effects';
import { loginSuccess,loginFailure,loginRequest} from './authSlice';
import { fetchToken } from '../../../../utils/api';

function* handleLogin(action) {
  try {
    const token = yield call(fetchToken, action.payload);
    yield put(loginSuccess({ token, email: action.payload.username }));
    // Redirect to dashboard or home page
  } catch (error) {
    yield put(loginFailure(error.message || 'Login Failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
