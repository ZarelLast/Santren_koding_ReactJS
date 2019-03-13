import { Row, Col } from 'reactstrap'
import React from 'react'

class Kegiatan extends React.Component {
  render () {
    return (
      <div class='container rounded border'>
        <Row>
          <Col
            md='6'
            className='rounded-left text-light'
            style={{ backgroundColor: '#0bc72a' }}
          >
            <div class='text-center'>
              <h4 class='my-4 text-light'>Kegiatan</h4>
              <p>
                <i class='anticon anticon-login' />
                Koding
              </p>
              <p>Belajar Agama dan Al Qur'an</p>
              <p>Pendidikan Karakter</p>
            </div>
          </Col>
          <Col md='6' className='rounded-right'>
            <div class='text-center'>
              <div class='my-4'>
                <img src='https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc' />
                <h4>"Memberi Manfaat Untuk Ummat"</h4>
              </div>
              <p class='mb-5'>-Santren Koding-</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

class Footer extends React.Component {
  render () {
    return (
      <div className='mt-4'>
        <div>
          <hr />
          <Kegiatan />
          <div class='text-center my-5'>
            <h3 class='mb-4'>Kontak</h3>
            <p>
              082225111587 <br />
              santrenkoding@gmail.com
            </p>
            <p>
              Titik Ruang Space, <br />
              Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,
              <br />
              Kota Semarang, Jawa Tengah 50269
            </p>
          </div>
          <hr />
          <div class='container my-3'>
            Copyright © Santren Koding 2018. All rights reserved.
          </div>
        </div>
      </div>
    )
  }
}

export default Footer