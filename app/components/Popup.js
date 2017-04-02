import React from 'react'

export default class Popup extends React.Component {
  constructor () {
    super()
  }

  gameOverPopup (gameOver, won) {
    const message = won ? 'Awesome, you win!' : 'You lose. Sad.'
    const postFix = gameOver ? '' : 'hidden'

    return {
      className: 'overlay ' + postFix,
      message
    }
  }

  render () {
    const {message, className} = this.gameOverPopup(this.props.gameOver, this.props.won)

    return (
      <div className={className}>
        <div className='popup'>
          <h2>{message}</h2>
          <button onClick={this.props.restart}>restart</button>
        </div>
      </div>
    )
  }
}
