import React from 'react';

var Child = React.createClass({
  render() {
    return (
      <div>
        {this.props.pokeList.map(pokemon => {
          return (
            <div
              onClick={this.props.changeDisplay.bind(null, pokemon)}
              key={pokemon.name}>
              {pokemon.name}
            </div>
          )
        })}
      </div>
    )
  }
})

export default Child;
