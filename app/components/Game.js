import React from 'react'
import Grid from './Grid'
import {createGrid, reveal} from '../lib'

export default class Game extends React.Component {
  constructor () {
    super()
    this.reveal = this.reveal.bind(this)
    this.state = {
      gameOver: false,
      grid: createGrid()
    }
  }

  reveal (index) {
    const newState = reveal(this.state.grid, index)
    this.setState(newState)
  }

  render () {
    return (
      <div id='game'>
        <Grid grid={this.state.grid} reveal={this.reveal} />
      </div>
    )
  }
}
