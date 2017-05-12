import React, { Component } from 'react';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'

class CardComponent extends Component {
  render() {
    return (
      <Card className='Card-main'>
        <Image src={this.props.element.thumbnail}/>
        <Card.Content>
          <Card.Header className='Base-style'>
            {this.props.element.country}
          </Card.Header>
          <Card.Meta>
            <span className='date Base-style'>
              {this.props.element.info.artist}
            </span>
          </Card.Meta>
          <Card.Description className='Base-style'>
            {this.props.element.info.song}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a className='Base-style'>
            <Icon name='user'/>
            Views {this.props.element.statistics.viewCount}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default CardComponent;
