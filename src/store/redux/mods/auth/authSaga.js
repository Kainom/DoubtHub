import { takeLatest, call, put } from 'redux-saga/effects';
import { loginSuccess,loginFailure,loginRequest} from './authSlice';
import { fetchToken } from '../../../../utils/api';
import { showToast } from '../../../../global/toast/ToastCustom';
import { toast } from 'react-toastify';

function* handleLogin(action) {
  try {
    const token = yield call(fetchToken, action.payload);
    yield put(loginSuccess({ token, email: action.payload.username }));
    // Redirect to dashboard or home page
  } catch (error) {
    toast.error(
      "Failed to login",
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    )
    yield put(loginFailure(error.message || 'Login Failed'));

  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
