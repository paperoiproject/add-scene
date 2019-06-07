import React, { Component } from 'react';
import firebase from 'firebase/app'; //必須
import 'firebase/firestore'; //必要なモジュールごとにimport
import { connect } from 'react-redux';
import { addTest, loadDatas, addList} from '../Store/ActionsCreater.js';

import './App.css';

import AddScene from './AppPages/AddScene.js'
/*
firebase.initializeApp({
  apiKey: "AIzaSyBdolZkWW9E1WADAkBe5PONeDeKmLcie1U",
  authDomain: "add-scene.firebaseapp.com",
  projectId: "add-scene",
});

const db = firebase.firestore();
*/

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      scene_list: [],
    }
  }
  /*
  async loadDatas(){
    let first_scene_list = [];
    await db.collection("Senarios").get().then((response) => {
        response.forEach((doc) => {
        const document = doc.data();
        first_scene_list.push(document.name);
      });
    });
    this.setState({
      scene_list: first_scene_list,
    });
  }
  */

  async addBehav(textValue, typeValue, num){
    let add_scene = typeValue + ": " + textValue;
    console.log(add_scene)
    this.props.addList(add_scene, num + 1);
    /*
    await db.collection("Senarios").add({
      name: add_scene,
      img: "天使"
    })
    */
  }

  componentDidMount(){
    this.props.loadDatas()
  }

  render(){
    const { test, list, date_list} = this.props;
    console.log(list)
    console.log(date_list)
    date_list.sort((a, b) => {
      let date1 = new Date(a.date);
      let date2 = new Date(b.date);
      console.log(date1);
      console.log(date2);
      console.log(date1 - date2);
      return date1 - date2;
    })
    console.log(date_list)
    return (
      <div className="App">
        <AddScene
          addBehav={(textValue, typeValue) => {this.addBehav(textValue, typeValue, list.length)}}
          scene_list={list} />
      </div>
    );
  }
}

export default connect(
    state => ({ test: state.test, list: state.list, date_list: state.date_list}),
    { addTest, loadDatas, addList}
)(App)










