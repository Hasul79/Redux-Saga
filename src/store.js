import { createSlice , configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import  watchSaga from './saga';

const dataSlice = createSlice({
    name: "Name",
    initialState: { 
        fact: "",
    },
    reducers: {
       fetchData: (state, action) =>  {
        console.log(state, action)
         return {
            ...state,
            fact: action.payload 
        }  
       }
   },
}); 

 export const { fetchData } = dataSlice.actions;
 console.log(dataSlice)

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
     catFact:  dataSlice.reducer,
    },
    middleware: [sagaMiddleware],
});
//console.log(store)

sagaMiddleware.run(watchSaga);

export default store;


