import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.js';

var App = React.createClass({
  getInitialState() {
    return {
      pokeList: [],
      name: "",
      display: {},
    }
  },
  render() {
    return (
      <div>
       <h1>{this.state.display.name}</h1>
        <input
          value={this.state.name}
          onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add Pokemon</button>
        <Child
          changeDisplay={this.changeDisplay}
          pokeList={this.state.pokeList}/>
      </div>
    )
  },
  changeDisplay(poke) {
    this.setState({
      display: poke,
    })
  },
  handleClick() {
    var list = this.state.pokeList;
    console.log(list);
    this.setState({
      pokeList: list.concat([{name: this.state.name}]) 
    });
  },
  handleChange(e) {
    this.setState({
      name: e.target.value,
    })
  }
});

ReactDOM.render(<App />, document.getElementById("app"));
