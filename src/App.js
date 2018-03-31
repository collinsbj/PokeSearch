import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Pokemon from "./Pokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      visiblePokemon: []
    };
    this.searchOnChangeHandler = this.searchOnChangeHandler.bind(this);
  }

  componentDidMount() {
    fetch("https://pokesearchbe.herokuapp.com/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          pokemon: response.data,
          visiblePokemon: response.data
        });
      })
      .catch(err => console.log(err));
  }

  searchOnChangeHandler(event) {
    var newVisiblePokemon = this.state.pokemon.filter(pokemon => {
      return pokemon.name.includes(event.target.value.toLowerCase());
    });
    this.setState({
      visiblePokemon: newVisiblePokemon
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>PokéSearch</h1>
          <input placeholder="search" onChange={this.searchOnChangeHandler} />
          <div className="pokeContainer">
            {this.state.visiblePokemon.map(element => {
              return element.hidden === false && <Pokemon data={element} />;
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
