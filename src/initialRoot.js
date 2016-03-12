/* react hello world with ES6 declaration */

import React, {Component} from 'react'
import {render} from 'react-dom'

var root = React.createElement('div')

// createClass() syntax
const Hello = React.createClass({
  render () {
    return <div> Hello world with ES6</div>
  }
})

// classes with extending component
class Hello2 extends Component {
  render () {
    return <div> Hello world with ES6 using Component syntax </div>
  }
}

// stateless functionnal component, the default declaration ?
const Hello3 = (props) => {
  return (
    <div> Hello world, SF,  from {props.name}</div>
  )
}

render(<Hello/>, document.body.firstChild)
render(<Hello2/>, document.body.firstChild)
render(<Hello3 name='jm' />, root)
