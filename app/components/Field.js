import React from 'react'

export default class Field extends React.Component {
  constructor () {
    super()
    // types: flag, number, bomb, questionmark
  }

  hiddenField () {
    return {
      content: '',
      fieldClass: 'field hidden'
    }
  }

  revealedField () {
    return {
      content: this.props.type,
      fieldClass: 'field ' + this.props.type
    }
  }
  render () {
    const { content, fieldClass} = this.props.revealed ? this.revealedField() : this.hiddenField()
    return (
      <div className={fieldClass} onClick={() => this.props.reveal(this.props.index)} onContextMenu={alert('erk')}>
        {content}
      </div>
    )
  }
}
