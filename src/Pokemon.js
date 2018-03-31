import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.getTypes = this.getTypes.bind(this);
    this.getWeaknesses = this.getWeaknesses.bind(this);
  }

  getTypes() {
    return (
      <div>
        Type:{" "}
        {this.props.data.types.map(type => {
          return (
            <p id={type}>{type.charAt(0).toUpperCase() + type.substr(1)}</p>
          );
        })}
      </div>
    );
  }

  getWeaknesses() {
    var quadEffect = [];
    var doubleEffect = [];
    var normalEffect = [];
    var halfEffect = [];
    var quarterEffect = [];
    var noEffect = [];
    var effectivenessChart = {
      normal: 1,
      fire: 1,
      fighting: 1,
      water: 1,
      flying: 1,
      grass: 1,
      poison: 1,
      electric: 1,
      ground: 1,
      psychic: 1,
      rock: 1,
      ice: 1,
      bug: 1,
      dragon: 1,
      ghost: 1,
      dark: 1,
      steel: 1,
      fairy: 1
    };

    this.props.data.types.forEach(type => {
      switch (type) {
        case "normal":
          effectivenessChart.fighting *= 2;
          effectivenessChart.ghost -= 100;
          break;

        case "fire":
          effectivenessChart.bug *= 0.5;
          effectivenessChart.fire *= 0.5;
          effectivenessChart.grass *= 0.5;
          effectivenessChart.ice *= 0.5;
          effectivenessChart.steel *= 0.5;
          effectivenessChart.ground *= 2;
          effectivenessChart.rock *= 2;
          effectivenessChart.water *= 2;
          break;

        case "fighting":
          effectivenessChart.bug *= 0.5;
          effectivenessChart.dark *= 0.5;
          effectivenessChart.rock *= 0.5;
          effectivenessChart.flying *= 2;
          effectivenessChart.psychic *= 2;
          break;

        case "water":
          effectivenessChart.fire *= 0.5;
          effectivenessChart.ice *= 0.5;
          effectivenessChart.steel *= 0.5;
          effectivenessChart.water *= 0.5;
          effectivenessChart.electric *= 2;
          effectivenessChart.grass *= 2;
          break;

        case "flying":
          effectivenessChart.bug *= 0.5;
          effectivenessChart.fighting *= 0.5;
          effectivenessChart.grass *= 0.5;
          effectivenessChart.electric *= 2;
          effectivenessChart.ice *= 2;
          effectivenessChart.rock *= 2;
          effectivenessChart.ground -= 100;
          break;

        case "grass":
          effectivenessChart.electric *= 0.5;
          effectivenessChart.grass *= 0.5;
          effectivenessChart.ground *= 0.5;
          effectivenessChart.water *= 0.5;
          effectivenessChart.bug *= 2;
          effectivenessChart.fire *= 2;
          effectivenessChart.flying *= 2;
          effectivenessChart.ice *= 2;
          effectivenessChart.poison *= 2;
          break;

        case "poison":
          effectivenessChart.fighting *= 0.5;
          effectivenessChart.poison *= 0.5;
          effectivenessChart.bug *= 0.5;
          effectivenessChart.grass *= 0.5;
          effectivenessChart.fairy *= 0.5;
          effectivenessChart.ground *= 2;
          effectivenessChart.psychic *= 2;
          break;

        case "electric":
          effectivenessChart.electric *= 0.5;
          effectivenessChart.flying *= 0.5;
          effectivenessChart.steel *= 0.5;
          effectivenessChart.ground *= 2;
          break;

        case "ground":
          effectivenessChart.poison *= 0.5;
          effectivenessChart.rock *= 0.5;
          effectivenessChart.grass *= 2;
          effectivenessChart.ice *= 2;
          effectivenessChart.water *= 2;
          effectivenessChart.electric -= 100;
          break;

        case "psychic":
          effectivenessChart.fighting *= 0.5;
          effectivenessChart.psychic *= 0.5;
          effectivenessChart.bug *= 2;
          effectivenessChart.dark *= 2;
          effectivenessChart.ghost *= 2;
          break;

        case "rock":
          effectivenessChart.fire *= 0.5;
          effectivenessChart.flying *= 0.5;
          effectivenessChart.normal *= 0.5;
          effectivenessChart.poison *= 0.5;
          effectivenessChart.fighting *= 2;
          effectivenessChart.grass *= 2;
          effectivenessChart.ground *= 2;
          effectivenessChart.steel *= 2;
          effectivenessChart.water *= 2;
          break;

        case "ice":
          effectivenessChart.ice *= 0.5;
          effectivenessChart.fighting *= 2;
          effectivenessChart.fire *= 2;
          effectivenessChart.rock *= 2;
          effectivenessChart.steel *= 2;
          break;

        case "bug":
          effectivenessChart.fighting *= 0.5;
          effectivenessChart.grass *= 0.5;
          effectivenessChart.ground *= 0.5;
          effectivenessChart.fire *= 2;
          effectivenessChart.flying *= 2;
          effectivenessChart.rock *= 2;
          break;

        case "dragon":
          effectivenessChart.electric *= 0.5;
          effectivenessChart.fire *= 0.5;
          effectivenessChart.grass *= 0.5;
          effectivenessChart.water *= 0.5;
          effectivenessChart.dragon *= 2;
          effectivenessChart.fairy *= 2;
          effectivenessChart.ice *= 2;
          break;

        case "ghost":
          effectivenessChart.bug *= 0.5;
          effectivenessChart.poison *= 0.5;
          effectivenessChart.dark *= 2;
          effectivenessChart.ghost *= 2;
          effectivenessChart.normal -= 100;
          effectivenessChart.fighting -= 100;
          break;

        case "dark":
          effectivenessChart.dark *= 0.5;
          effectivenessChart.ghost *= 0.5;
          effectivenessChart.bug *= 2;
          effectivenessChart.fairy *= 2;
          effectivenessChart.fighting *= 2;
          effectivenessChart.psychic -= 100;
          break;

        case "steel":
          effectivenessChart.bug *= 0.5;
          effectivenessChart.dragon *= 0.5;
          effectivenessChart.fairy *= 0.5;
          effectivenessChart.flying *= 0.5;
          effectivenessChart.grass *= 0.5;
          effectivenessChart.ice *= 0.5;
          effectivenessChart.normal *= 0.5;
          effectivenessChart.psychic *= 0.5;
          effectivenessChart.rock *= 0.5;
          effectivenessChart.steel *= 0.5;
          effectivenessChart.fighting *= 2;
          effectivenessChart.fire *= 2;
          effectivenessChart.ground *= 2;
          effectivenessChart.poison -= 100;
          break;

        case "fairy":
          effectivenessChart.bug *= 0.5;
          effectivenessChart.dark *= 0.5;
          effectivenessChart.fighting *= 0.5;
          effectivenessChart.poison *= 2;
          effectivenessChart.steel *= 2;
          effectivenessChart.dragon -= 100;
          break;

        default:
          console.log("didnt find a match");
          break;
      }
    });

    var allTypes = Object.keys(effectivenessChart);
    allTypes.forEach(type => {
      switch (effectivenessChart[type]) {
        case 4:
          quadEffect.push(type);
          break;

        case 2:
          doubleEffect.push(type);
          break;

        case 1:
          normalEffect.push(type);
          break;

        case 0.5:
          halfEffect.push(type);
          break;

        case 0.25:
          quarterEffect.push(type);
          break;

        default:
          noEffect.push(type);
          break;
      }
    });

    if (quadEffect.length === 0) {
      quadEffect.push("None");
    }

    if (doubleEffect.length === 0) {
      doubleEffect.push("None");
    }

    if (normalEffect.length === 0) {
      normalEffect.push("None");
    }

    if (halfEffect.length === 0) {
      halfEffect.push("None");
    }

    if (quarterEffect.length === 0) {
      quarterEffect.push("None");
    }

    if (noEffect.length === 0) {
      noEffect.push("None");
    }

    return (
      <div>
        <h2 className="quadx">4x</h2>
        <ul>
          {quadEffect.map(type => {
            return (
              <li id={type}>{type.charAt(0).toUpperCase() + type.substr(1)}</li>
            );
          })}
        </ul>
        <h2 className="doublex">2x</h2>
        <ul>
          {doubleEffect.map(type => {
            return (
              <li id={type}>{type.charAt(0).toUpperCase() + type.substr(1)}</li>
            );
          })}
        </ul>
        <h2 className="normalx">1x</h2>
        <ul>
          {normalEffect.map(type => {
            return (
              <li id={type}>{type.charAt(0).toUpperCase() + type.substr(1)}</li>
            );
          })}
        </ul>
        <h2 className="halfx">1/2x</h2>
        <ul>
          {halfEffect.map(type => {
            return (
              <li id={type}>{type.charAt(0).toUpperCase() + type.substr(1)}</li>
            );
          })}
        </ul>
        <h2 className="quarterx">1/4x</h2>
        <ul>
          {quarterEffect.map(type => {
            return (
              <li id={type}>{type.charAt(0).toUpperCase() + type.substr(1)}</li>
            );
          })}
        </ul>
        <h2 className="nox">0x</h2>
        <ul>
          {noEffect.map(type => {
            return (
              <li id={type}>{type.charAt(0).toUpperCase() + type.substr(1)}</li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div
        className="panel-group pokeCard"
        id="accordion"
        role="tablist"
        aria-multiselectable="true"
      >
        <div className="panel panel-default">
          <div
            className="panel-heading"
            role="tab"
            id={"heading" + this.props.data.name}
          >
            <h4 className="panel-title">
              <p>{this.props.data.id}</p>
              <p>
                {this.props.data.name.charAt(0).toUpperCase() +
                  this.props.data.name.substr(1)}
              </p>
              <a
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href={"#" + this.props.data.name}
                aria-expanded="false"
                aria-controls={this.props.data.name}
              >
                <img src={this.props.data.image} alt={this.props.data.name} />
              </a>
            </h4>
          </div>
          <div
            id={this.props.data.name}
            className="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby={"heading" + this.props.data.name}
          >
            <div className="panel-body">
              {this.getTypes()}
              {this.getWeaknesses()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
