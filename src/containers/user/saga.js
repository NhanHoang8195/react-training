import {call, takeLatest, put} from 'redux-saga/effects';
import * as EVENT from './events';
import dummyCallApi from '../../services/dummyApi';

function* getEmployees() {
  try {
    const res = yield call(dummyCallApi, 'success');
    yield put({
      type: EVENT.GET_EMPLOYEESS_SUCCESS,
      payload: res.data,
    });
  } catch(error) {
    yield put({
      type: EVENT.GET_EMPLOYEESS_FAILURE,
      payload: error.message || error,
    });
  }
}


export default function *watcher() {
  yield takeLatest(EVENT.GET_EMPLOYEESS_START, getEmployees);
}