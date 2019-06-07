import React, { Component } from 'react';
import ScenesPaper from '../Components/ScenesPaper.js';

class AppScenesPaper extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="" >
        <ScenesPaper deleteAction = {() => {console.log("hello")}} listDrop={() => {console.log("hello")}} scene_list = {this.props.scene_list}/>
      </div>
    );
  }
}

export default AppScenesPaper;