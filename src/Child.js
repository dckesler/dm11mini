import React from 'react';

export default React.createClass({

	render() {
		return (
		      <div>
		      	{this.props.list.map((pokemon, idx)=> {
		      		return (
		      		      <button 
		      		      	onClick={this.props.displayChange.bind(null, pokemon)}
		      		      	key={idx}
		      		      >{pokemon.name}</button>
		      		)
		      	})}
		     	</div>
		)
	}

	
})