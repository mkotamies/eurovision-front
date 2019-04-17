import React, { Component } from 'react';
import Axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import { List, Menu } from 'semantic-ui-react';

import AboutComponent from './About';
import Chart from './Chart';
import ListItem from './ListItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      activeItem: 'topFive',
      fetching: true,
      screenWidth: null,
    }
  }

  componentDidMount(){
    Axios.get('https://3ahttr5986.execute-api.eu-central-1.amazonaws.com/prod/status')
    .then(response => response.data.body)
    .then(data => this.setState({data: data, fetching: false, screenWidth: window.innerWidth}))
    .catch(error => console.log(error));
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  changeMenu(param){
    this.setState({menu: param});
  }

  resize() {
    this.setState({ screenWidth: window.innerWidth }); // this might be useless for normal users
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const hasResults = this.state.data && this.state.data.length > 0;
    return (
      <div className="App">
        <Menu className='Menu'>
          <Menu.Item header className='Base-style'>Viisut </Menu.Item >
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} className='Base-style' />
          <Menu.Item name='results' active={activeItem === 'results'} onClick={this.handleItemClick} className='Base-style' />
          <Menu.Item name='topFive' active={activeItem === 'topFive'} onClick={this.handleItemClick} className='Base-style' />
        </Menu>
        <div className="App-intro">
          {this.state.fetching &&
            <div>
              <div style={{ width: '80px', margin: '0 auto', height: '80px' }}>
                <PacmanLoader loading={this.state.fetching} color={'#747397'} />
              </div>
            </div>
          }
          {activeItem === 'results' && hasResults &&
            <List>
                {this.state.data.map((elem, index) => (
                  <ListItem key={index} data={elem} index={index} />
                ))}
            </List>
          }
          {activeItem === 'about' && <div className='Card-main'><AboutComponent /></div>}
          {activeItem === 'topFive' && hasResults &&
            <div className='Card-main'>
              <div style={{ color: 'white', padding: '16px' }}>Chart provides information about top five contestants and their view counts.</div>
              <Chart data={this.state.data} screenWidth={this.state.screenWidth} />
            </div>}
        </div>
      </div>
    );
  }
}

export default App;
