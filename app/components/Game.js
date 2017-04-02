import React from 'react'
import Grid from './Grid'
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

  gameOverPopup () {
    return (
      <div className='overlay'>
        <div className='popup'>
          <button onClick={this.init}>restart</button>
        </div>
      </div>
    )
  }

  render () {
    const popup = this.state.gameOver ? this.gameOverPopup() : ''
    console.log(popup)
    return (
      <div id='game'>
        <Grid grid={this.state.grid} reveal={this.reveal} flag={this.flag} />
        {popup}
      </div>
    )
  }
}
