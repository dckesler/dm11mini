import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child'

var App = React.createClass({
	getInitialState() {
		return ({
			name: '', 
			list: [], 
			display: 'Initial Display'
		})
	},

  	render() {
    		return (
		      <div>
		      	<h1>{this.state.display}</h1>
		      	<input 
		      		style={{border: '1px solid green'}}
		      		value={this.state.name}
		      		onChange={this.handleChange}
		      	/>
		      	<button onClick={this.handleClick}>Add Pokemon</button>
		      	<Child 
					displayChange={this.displayChange}
					list={this.state.list}
		      	/>
		      </div>
		    )
    	},

    	handleChange(ev) {
    		this.setState({
    			name: ev.target.value
    		})
    	},

    	handleClick() {
    		console.log(this.state)
    		this.setState({
    			list: this.state.list.concat([{name: this.state.name}]),
    			name: ''
    		})
    	}, 

    	displayChange(pokemon) {
    		this.setState({
    			display: pokemon.name
    		})
    	}
});

ReactDOM.render(<App />, document.getElementById("app"));
