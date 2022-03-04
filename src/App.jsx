import { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { CardsList } from './components/cards-list/cards-list.component';
import { SearchBox } from './components/search-box/search-box';

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

  handleChange = (e) => this.setState({searchField:  e.target.value})
  
  render() {
    let { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monster"
          handler={this.handleChange}
        />
        <CardsList monsters={filteredMonsters} />
        <button onClick={() => this.setState({count: ++this.state.count})}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default App
