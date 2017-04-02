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
          this.props.grid.map(({ index, type, revealed, flagged }, i) => {
            return (
              <Field key={i} reveal={this.props.reveal} flag={this.props.flag} index={index} type={type} revealed={revealed} flagged={flagged} />
            )
          })
        }
      </div>
    )
  }
}
