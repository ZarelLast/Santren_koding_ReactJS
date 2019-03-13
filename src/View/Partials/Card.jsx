import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap'
import React from 'react'
import style from '../../App.css'

class Cardsantren extends React.Component {
  render () {
    return (
      <div>
      <Col sm='4'>
        <a href='#' className='text-decoration-none text-body'>
          <Card className={style.ribut}>
            <CardImg
              top-width='100%'
              src={this.props.gambar}
              alt='Card image cap'
            />
            <CardBody>
              <CardTitle>
                <h5>{this.props.CardTitle}</h5>
              </CardTitle>
              <CardSubtitle>{this.props.CardSubTitle}</CardSubtitle>
              <CardText>{this.props.CardText}</CardText>
              <CardText>
                <Row>
                  <Col>
                    <small class='text-muted'>by Santren Koding</small>
                  </Col>
                  <Col>
                    <small class='text-danger float-right font-weight-bold'>
                      Kuota Terbatas
                    </small>
                  </Col>
                </Row>
              </CardText>
            </CardBody>
          </Card>
        </a>
      </Col>
      </div>
    )
  }
}
export default Cardsantren
