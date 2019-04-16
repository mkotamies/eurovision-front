import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const AboutComponent = () => (
  <Container text className='Base-style'>
    <Header as='h2' className='Base-style'>About Viisut.fi</Header>
    <p>
        Viisut provides analysis of Eurovision 2019. Analysis is based on Youtube views.
    </p>
    <h2>Why?</h2>
    <p>
        One of the authors got this idea on tuesday night 2017.
        The next day he spoke with co-worker and they decided to implement this page just for fun.
    </p>
  </Container>
)

export default AboutComponent;