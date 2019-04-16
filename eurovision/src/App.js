import React, { Component } from 'react';
import Axios from 'axios';
import { List, Menu } from 'semantic-ui-react';
import { PacmanLoader } from 'react-spinners';
import ListItem from './ListItem';
import AboutComponent from './About';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      activeItem: 'results',
      fetching: true,
    }
  }

  componentDidMount(){
    Axios.get('https://3ahttr5986.execute-api.eu-central-1.amazonaws.com/prod/status')
    .then(response => response.data.body)
    .then(data => this.setState({data: data, fetching: false}))
    .catch(error => console.log(error));
  }

  changeMenu(param){
    this.setState({menu: param});
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
        <Menu className='Menu'>
          <Menu.Item header className='Base-style'>Viisut </Menu.Item >
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} className='Base-style' />
          <Menu.Item name='results' active={activeItem === 'results'} onClick={this.handleItemClick} className='Base-style' />
        </Menu>
        <div className="App-intro">
          {this.state.fetching &&
            <div>
              <div style={{ width: '80px', margin: '0 auto', height: '80px' }}>
                <PacmanLoader loading={this.state.fetching} color={'#747397'} />
              </div>
            </div>
          }
          {activeItem === 'results' && this.state.data && this.state.data.length > 0 ?
            <List>
                {this.state.data.map((elem, index) => (
                  <ListItem key={index} data={elem} index={index} />
                ))}
            </List>:
            <div className='Card-main'><AboutComponent /></div>
          }
        </div>
      </div>
    );
  }
}

export default App;
