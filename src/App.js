import React, { Component } from 'react'

import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quote: ''
    }
  }
  newQuote = () => {
    axios
      .get(
        'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
      )
      .then(Response => {
        console.log(Response.data)
        console.log('clicked')
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Inspirational Quotes</h1>
        <button onClick={this.newQuote}>Get New Quote</button>
        <p>
          Through meditation and by giving full attention to one thing at a
          time, we can learn to direct attention where we choose.
        </p>
        <a href="http://forismatic.com/en/83102bee09/">
          <p>-Eknath Easwaran</p>
        </a>
      </div>
    )
  }
}

export default App
