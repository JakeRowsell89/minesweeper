import React from 'react'
import Grid from './Grid'
import Popup from './Popup'
import {createGrid, reveal, flag} from '../lib'

export default class Game extends React.Component {
  constructor () {
    super()
    this.reveal = this.reveal.bind(this)
    this.flag = this.flag.bind(this)
    this.init = this.init.bind(this)

    this.state = {
      gameOver: false,
      grid: createGrid()
    }
  }

  init () {
    this.setState({
      gameOver: false,
      grid: createGrid()
    })
  }

  reveal (index) {
    const newState = reveal(this.state.grid, index)
    this.setState(newState)
  }

  flag (event, index) {
    const newState = flag(this.state.grid, index)
    this.setState(newState)
    event.preventDefault()
  }

  render () {
    return (
      <div id='game'>
        <Grid grid={this.state.grid} reveal={this.reveal} flag={this.flag} />
        <Popup gameOver={this.state.gameOver} won={this.state.win} restart={this.init} />
      </div>
    )
  }
}
