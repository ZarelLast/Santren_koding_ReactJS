import { Jumbotron } from 'reactstrap'
import React from 'react'
class ContohBootstrap extends React.Component {
  render () {
    return (
      <div>
        <div class='mt-5'>
          <Jumbotron className='text-center'>
            <h1 className='display-3'>Hello, world!</h1>
            <p className='lead'>
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className='my-2' />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default contoh
