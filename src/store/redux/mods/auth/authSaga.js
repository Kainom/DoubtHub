import { takeLatest, call, put } from 'redux-saga/effects';
import { loginSuccess,loginFailure,loginRequest} from './authSlice';
import { fetchToken } from '../../../../utils/api';
import { showToast } from '../../../../global/toast/ToastCustom';

function* handleLogin(action) {
  try {
    const token = yield call(fetchToken, action.payload);
    yield put(loginSuccess({ token, email: action.payload.username }));
    // Redirect to dashboard or home page
  } catch (error) {
    showToast("error","Login Failed");
    yield put(loginFailure(error.message || 'Login Failed'));

  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
