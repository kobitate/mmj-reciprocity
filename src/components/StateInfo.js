import React from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStarOfLife,
  faCannabis,
  faHandHoldingSeedling,
  faCircle,
  faCheck,
  faTimes } from '@fortawesome/pro-solid-svg-icons'

const SourceLink = props => {
  return (
    <React.Fragment>
      <small>
        <a href={props.link} target='_blank' rel='noopener noreferrer'>{props.link}</a>
      </small>
      <br />
    </React.Fragment>)
}

const StateInfo = props => {
  return (
    <Card>
      <CardHeader tag='h3'>{props.stateData.name || 'Select a State'}</CardHeader>
      {props.selected &&
      <React.Fragment>
        <CardBody className='mt-3'>
          <Row>
            <Col>
              <div className='d-flex mb-3'>
                <span class='fa-layers fa-fw mt-1' style={{ flex: 1 }}>
                  <FontAwesomeIcon
                    icon={faStarOfLife} size='3x' />
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={props.stateData.status.medical ? 'text-success' : 'text-danger'}
                    transform='grow-7 right-30 up-15' />
                  <FontAwesomeIcon
                    icon={props.stateData.status.medical ? faCheck : faTimes}
                    transform='right-30 up-15'
                    inverse />
                </span>
              </div>
              <div className='text-center'>Medical</div>
            </Col>
            <Col>
              <div className='d-flex mb-3'>
                <span class='fa-layers fa-fw mt-1' style={{ flex: 1 }}>
                  <FontAwesomeIcon
                    icon={faHandHoldingSeedling} size='3x' />
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={props.stateData.status.reciprocity ? 'text-success' : 'text-danger'}
                    transform='grow-7 right-30 up-15' />
                  <FontAwesomeIcon
                    icon={props.stateData.status.reciprocity ? faCheck : faTimes}
                    transform='right-30 up-15'
                    inverse />
                </span>
              </div>
              <div className='text-center'>Reciprocity</div>
            </Col>
            <Col>
              <div className='d-flex mb-3'>
                <span class='fa-layers fa-fw mt-1' style={{ flex: 1 }}>
                  <FontAwesomeIcon
                    icon={faCannabis} size='3x' />
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={props.stateData.status.recreational ? 'text-success' : 'text-danger'}
                    transform='grow-7 right-30 up-15' />
                  <FontAwesomeIcon
                    icon={props.stateData.status.recreational ? faCheck : faTimes}
                    transform='right-30 up-15'
                    inverse />
                </span>
              </div>
              <div className='text-center'>Recreational</div>
            </Col>
          </Row>
        </CardBody>
        {
          (props.stateData.details.links && props.stateData.details.info) &&
          (props.stateData.details.links.length > 0 || props.stateData.details.info.length > 0) &&
          <React.Fragment>
            <CardHeader tag='h4'>Reciprocity Details</CardHeader>
            <CardBody>
              {(props.stateData.details.info && props.stateData.details.info.length > 0) &&
              <CardText>
                {props.stateData.details.info &&
                  props.stateData.details.info.map(i => <p>{i}</p>)}
              </CardText>}
              {(props.stateData.details.links && props.stateData.details.links.length > 0) &&
              <CardText>
                {props.stateData.details.links &&
                  props.stateData.details.links.map(l => <SourceLink link={l} />)}
              </CardText>
              }
            </CardBody>
          </React.Fragment>
        }

      </React.Fragment>}
    </Card>
  )
}

export default StateInfo
