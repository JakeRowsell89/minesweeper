import React from 'react'
import Field from './Field'

export default class Grid extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id='grid'>
        {
          this.props.grid.map(({ index, type, revealed }, i) => {
            return (<Field key={i} reveal={this.props.reveal} index={index} type={type} revealed={revealed} />)
          })
        }
      </div>
    )
  }
}
