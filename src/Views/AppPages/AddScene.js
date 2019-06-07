import React, { Component } from 'react';

import '../App.css';

import AppScenesPaper from '../AppComponents/AppScenesPaper.js';
import AppEnterPaper from '../AppComponents/AppEnterPaper.js';
import AddModal from '../AppComponents/AddModal.js';

class AddScene extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="App">
        <AppScenesPaper scene_list={this.props.scene_list} />
        <AppEnterPaper addBehav={(textValue, typeValue) => this.props.addBehav(textValue, typeValue)} />
      </div>
    );
  }
}

export default AddScene;
