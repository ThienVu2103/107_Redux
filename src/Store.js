import numReducer from './reducers/NumReducer';
import editStatusReducer from './reducers/EditStatusReducer';

var redux = require('redux');

const allReducer = redux.combineReducers({
    num: numReducer, // there are 2 types of reducer separated to 2 files
    editStatus: editStatusReducer // NumReducer.js and EditStatusReducer.js
})


var store1 = redux.createStore(allReducer);
store1.subscribe(() => {
    console.log(store1.getState())
})
// console.log(store1.getState());
store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
// console.log(store1.getState());


store1.dispatch({
    type: "ADD_NEW",
    newItem: "head phone"
})
// console.log(store1.getState());

store1.dispatch({
    type: "DEL",
    index: 2
})
// console.log(store1.getState());


export default store1;