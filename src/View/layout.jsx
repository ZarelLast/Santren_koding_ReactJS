import { Jumbotron, Button, Row } from 'reactstrap'
import React from 'react'
import Cardsantren from './Partials/Card'
import style from '../App.css'

class JumbBody extends React.Component {
  render () {
    return (
      <div className='text-center mt-5'>
        <br />
        <Jumbotron className='bg_image'>
          <h1 className='display-3 text-light'>Santren Koding</h1>
          <p className='lead text-light'>
            Intensive Coding Bootcamp for Yatim & Dhuafa
          </p>
          <p className='lead text-light'>
            <Button className='btn btn-success btn-lg' color='primary'>
              Mulai Belajar
            </Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

class Body extends React.Component {
  render () {
    return (
      <div>
        <JumbBody />
        <div className='container'>
          <h2 class='text-center my-4'>Daftar Kajian Koding Rutin</h2>
          <div class='mb-5'>
            <Row>
              <Cardsantren
                gambar='https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg'
                CardTitle='Kajian Koding #3'
                CardSubTitle='ReactJS dan Firebase Auth/Hosting'
                CardText=''
                buttonlink='#'
              />
              <Cardsantren
                gambar='https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381'
                CardTitle='Kajian Koding #2'
                CardSubTitle='html, css, boostrap dasar'
                CardText=''
                buttonlink='$'
              />
              <Cardsantren
                gambar='https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572'
                CardTitle='Kajian Koding #1'
                CardSubTitle='Belajar Laravel Dasar'
                CardText=''
                buttonlink='%'
              />
            </Row>
          </div>
          <div class='text-center mt-5'>
            <button class='btn btn-outline-success'>
              Lihat Seluruh Kanjian Koding
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
