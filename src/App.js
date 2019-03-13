import React from 'react'
import Header from './Component/Header'
import Body from './View/layout'
import Footer from './Component/Footer'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default App
