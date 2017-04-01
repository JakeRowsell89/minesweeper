import React from 'react'
import Field from './Field'

export default class Grid extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id='grid'>
        {this.props.grid.map((field, i) => <Field key={i} />)}
      </div>
    )
  }
}
