import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const AboutComponent = () => (
  <Container text className='Base-style'>
    <Header as='h2' className='Base-style'>About Viisut.fi</Header>
    <p>
        Viisut provides analysis of Eurovision 2017. Analysis is based on Youtube views. In our model highest view count means the highest
        probability to win. 
    </p>
    <h2>Why?</h2>
    <p>
        One of the authors got this idea on tuesday night.
        The next day he spoke with co-worker and they decided to implement this page just for fun. 
        Please note that Viisut was created quickly during the last week of Eurovision 2017. Hopefully next year we can provide more
        comprehensive analysis based on the data we collect this year.
    </p>
  </Container>
)

export default AboutComponent;