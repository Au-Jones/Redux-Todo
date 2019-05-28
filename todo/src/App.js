import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import List from './Components/List'
import {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      New: ''
    };
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      New: e.target.value
    });
  }
  add(e) {
    e.preventDefault();
    this.props.add({
      value: this.state.NewEvent,
      completed: false
    });
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.add}>
      <input onChange={this.update} placeholder='Add To List' value={this.state.New} />
        </form>
        <List events={this.props.events} />
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return{
    events: state.events
  }
}

export default connect(mapStateToProps) (App);
