import { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { CardsList } from './components/cards-list/cards-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
      ],
      count: 0,
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }))
  }

  componentDidUpdate() {
    // console.log('App componentDidUpdate')
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search monster" onChange={(e) => this.setState({searchField:  e.target.value})} />
        <CardsList monsters={this.state.monsters} />
        <button onClick={() => this.setState({count: ++this.state.count})}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default App
