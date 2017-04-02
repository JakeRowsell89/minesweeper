import Game from './components/Game'
import React from 'react'
import {render} from 'react-dom'

require('less-loader!./css/style.less')

render(<Game />, document.getElementById('app'))
