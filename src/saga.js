import { sagaActions } from "./sagaActions";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import {fetchData} from './store'

const getFact = async (url) => {
    return await axios({
      url: "https://catfact.ninja/fact",
    });
  };

export function* apiSaga() {
    console.log(1234);
   const result = yield call(getFact)
    yield put(fetchData(result.data.fact))
   console.log(result)
}

export default function* watchSaga() {
   yield takeEvery(sagaActions.GET_FACT, apiSaga)

}




