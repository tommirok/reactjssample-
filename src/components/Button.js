import React, {Component} from 'react';
import '../App.css';


export default class Button extends Component {

  handleClick = () =>{
  this.props.onClickFunc(this.props.addValue);

  }
  render(){
    return(
      <button className="btn btn-block btn-success" onClick={this.handleClick}>
      {this.props.addValue}
      </button>
    );
  }
}
