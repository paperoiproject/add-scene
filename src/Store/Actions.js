import firebase from 'firebase/app'; //必須
import 'firebase/firestore'; //必要なモジュールごとにimport

firebase.initializeApp({
  apiKey: "AIzaSyBdolZkWW9E1WADAkBe5PONeDeKmLcie1U",
  authDomain: "add-scene.firebaseapp.com",
  projectId: "add-scene",
});

export const DB = firebase.firestore();


export const ADD_TEST  = Symbol()

export const LOADING_DATAS = Symbol()
export const LOADED_DATAS = Symbol()
export const ADDED_LIST = Symbol()

export const DRAG_LIST = Symbol()
