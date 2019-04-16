import React from 'react';
import { List } from 'semantic-ui-react';
import './App.css';
// <List.Icon><Image src={data.thumbnail}/></List.Icon>

const ListItem = ({data, index}) => (
    <List.Item className='Card-main'>
      <List.Content>
        <List.Header id='List-header' as='a'>#{index+1} {data.country}</List.Header>
        <List.Description as='a'>Artist: {data.info.artist}</List.Description>
        <List.Description as='a'>Song: {data.info.song}</List.Description>
        <List.Description as='a'>Views: {data.statistics.viewCount/1000000} B</List.Description>
      </List.Content>
    </List.Item>
  );

export default ListItem;
