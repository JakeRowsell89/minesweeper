import React from 'react'
import Grid from './Grid'
import createGrid from '../lib/grid'

export default class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      grid: createGrid(),
      bombsFound: 0
    }
  }

  render () {
    return (
      <div id='game'>
        <Grid grid={this.state.grid} />
      </div>
    )
  }
}
