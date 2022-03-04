import React, { Component } from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css'

export class CardsList extends Component {
  constructor () {
    super();
    this.state = {
      testing: 'testing',
    }
  }

  componentDidUpdate() {
    // console.log('CardsList componentDidUpdate')
  }

  render () {
    return (
      <div className="card-list">
        {this.props.monsters.map(
          monster => <Card content={monster} key={monster.id} />
        )}
        <button onClick={() => this.setState({testing: 'clicked'})}>{this.state.testing}</button>
      </div>
    )
  }
}

// const CardsList = props => (
//   <div className="card-list">
//     {this.props.monsters.map(
//       monster => <Card content={monster} key={monster.id} />
//     )}
//   </div>
// )
