/**
 * Created by jean-michel-legrand on 12/03/16.
 */

import React from 'react'
import {render} from 'react-dom'
import App from './app'
// the way to load css with webpack!
import './styles/main.styl'

render(<App url={window.location.pathname} />, document.body.firstChild)
