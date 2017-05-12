import React, { Component } from 'react';
import './App.css';
import CardComponent from './Card.js';
import Axios from 'axios';
import { Card } from 'semantic-ui-react';
import MenuComponent from './Menu.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    Axios.get('https://3ahttr5986.execute-api.eu-central-1.amazonaws.com/prod/status')
    .then(response => response.data.body)
    .then(data => this.setState({data: data}))
    .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.data)
    const results = this.state.data.map((elem, index) => <CardComponent element={elem} key={elem.country}/>);
    return (
      <div className="App">
        <MenuComponent />
        <div id="sidebar"></div>
        <p className="App-intro">
          <Card.Group>{results}</Card.Group>
        </p>
      </div>
    );
  }
}

export default App;
