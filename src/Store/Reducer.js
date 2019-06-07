import * as Actions from './Actions.js';

export const Reducer = (state = {test: 0, list: [], date_list: []}, action) => {
  console.log("test")
  console.log(action)
  if(action.type === Actions.ADD_TEST){
    return Object.assign({}, state, {
      test: state.test+1,
    });
  }

  if (action.type === Actions.LOADING_DATAS){
    return Object.assign({}, state, {
      list: action.list,
    });
  }

  if (action.type === Actions.LOADED_DATAS){
    console.log(action.list)
    console.log(action.date_list)
    return Object.assign({}, state, {
      list: action.list,
      date_list: action.date_list
    });
  }

  if (action.type === Actions.ADDED_LIST){
    let cp_list = state.list.slice();
    cp_list.push(action.add_list);
    return Object.assign({}, state, {
      list: cp_list,
    });
  }


  return state;
}

export default Reducer;
