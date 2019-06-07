import * as Actions from './Actions.js'

import { applyDrag, generateItems } from './utils.js';

export const dragList = (list, e) =>{
  list = applyDrag(list, e)
  return {
    type: Actions.DRAG_LIST,
    list: list,
  }
}

export const addTest = () =>{
  return {
    type: Actions.ADD_TEST
  }
}

export const loadedDatas = (list, date_list) =>{
  return {
    type: Actions.LOADED_DATAS,
    date_list: date_list,
    list: list,
  }
}

export const addedlist = (s) => {
  return {
    type: Actions.ADDED_LIST,
    add_list: s,
  }
}



export const addList = (add_list, num) => {
  return (dispatch) => {
    let addload = async () => {
      await Actions.DB.collection("Senarios").doc(`${num}`).set({
        name: add_list,
        img: "天使",
      })
      dispatch(addedlist(add_list));
    }
    addload();
  }
}

export const deleteList = (add_list) => {
  return (dispatch) => {
    let addload = async () => {
      await Actions.DB.collection("Senarios").add({
        name: add_list,
        img: "天使"
      })
      dispatch(addedlist(add_list));
    }
    addload();
  }
}

export const loadDatas = () => {
  return (dispatch) => {
    let load = async () => {
      let first_scene_list = [];
      let first_date_list = [];
      await Actions.DB.collection("Senarios").get().then((response) => {
        response.forEach((doc) => {
        const document = doc.data();
        first_scene_list.push(document.name);
      })});
      await Actions.DB.collection("SizeImage").get().then((response) => {
        response.forEach((doc) => {
        const document = doc.data();
        first_date_list.push(document);
      })});
      dispatch(loadedDatas(first_scene_list, first_date_list));

    }
    load();
  }
}





















