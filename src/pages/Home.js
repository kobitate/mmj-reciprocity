import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import USAMap from 'react-usa-map'
import mmjData from '../data.json'

import MainTemplate from '../components/MainTemplate'
import StateInfo from '../components/StateInfo'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      selected: false,
      parsedData: this.parseStates(),
      stateData: {
        'name': null,
        'abbreviation': null,
        status: {
          medical: null,
          recreational: null,
          reciprocity: null
        },
        details: {
          links: null,
          info: null
        }
      }
    }
  }

  to (state) {
    this.setState({ stateData: state, selected: true })
  }

  parseStates () {
    const states = {}
    mmjData.states.forEach(state => {
      if (state.status.reciprocity) {
        states[state.abbreviation] = {
          fill: 'limegreen',
          clickHandler: () => this.to(state)
        }
      } else if (state.status.medical) {
        states[state.abbreviation] = {
          fill: 'green',
          clickHandler: () => this.to(state)
        }
      } else {
        states[state.abbreviation] = {
          clickHandler: () => this.to(state)
        }
      }
    })
    return states
  }

  render () {
    return <MainTemplate>
      <Row>
        <Col xl={8} lg={12}>
          <USAMap width='100%' customize={this.state.parsedData} />
        </Col>
        <Col xl={4} lg={6} md={12} className='pt-xl-4'>
          <StateInfo {...this.state} />
        </Col>
      </Row>
    </MainTemplate>
  }
}
