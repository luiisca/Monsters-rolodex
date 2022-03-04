import React, { Component } from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css'

export class CardsList extends Component {
  constructor () {
    super();
    // this.state = {
    //   testing: 'testing',
    // }
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
      </div>
    )
  }
}

// export const CardsList = props => (
//   <div className="card-list">
//     {props.monsters.map(
//       monster => <Card content={monster} key={monster.id} />
//     )}
//   </div>
// )
