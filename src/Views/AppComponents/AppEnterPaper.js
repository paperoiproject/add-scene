import React, { Component } from 'react';
import EnterPaper from '../Components/EnterPaper.js';

class AppEnterPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      typeValue: "",
    }
  };
  changeAddText(e){
    this.setState({
      textValue: e.target.value,
    });
  }
  changeSymbol(type){
    this.setState({
      typeValue: type,
    });
  }
  render() {
    console.log(this.state.textValue + this.state.typeValue)
    return (
      <div className="" >
        <EnterPaper
          changeAddText = {e => {this.changeAddText(e)}}
          changeSymbol = {(type) => {this.changeSymbol(type)}}
          typeValue = {this.state.typeValue}
          addBehav = {() => this.props.addBehav(this.state.textValue, this.state.typeValue)}/>
      </div>
    );
  }
}

export default AppEnterPaper;