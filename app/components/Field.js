import React from 'react'

export default class Field extends React.Component {
  constructor () {
    super()
    // types: flag, number, bomb, questionmark
    // concealed tue/flase
  }

  render () {
    return (
  <div className='field'>
    {this.props.content}
  </div>
    )
  }
}
