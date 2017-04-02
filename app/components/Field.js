import React from 'react'

export default class Field extends React.Component {
  constructor () {
    super()
  }

  hiddenField () {
    return {
      content: '',
      fieldClass: 'field hidden'
    }
  }

  revealedField () {
    return {
      content: this.props.type === 'bomb' ? '' : this.props.type,
      fieldClass: 'field ' + this.props.type
    }
  }

  flaggedField () {
    return {
      content: '',
      fieldClass: 'field flag'
    }
  }

  createField ({ revealed, flagged }) {
    if (flagged) {
      return this.flaggedField()
    } else {
      return revealed ? this.revealedField() : this.hiddenField()
    }
  }

  render () {
    const { content, fieldClass } = this.createField(this.props)
    return (
      <div className={fieldClass} onClick={() => this.props.reveal(this.props.index)} onContextMenu={(e) => this.props.flag(e, this.props.index)}>
        {content}
      </div>
    )
  }
}
