/**
 * Created by jean-michel-legrand on 12/03/16.
 */
import React from 'react'
import ReactDOM from 'react-dom'

// ch1
const UpRunning = () => {
  return (
    React.DOM.h1(
      {id: "myheading"},
      React.DOM.span(null,
        React.DOM.em(null, "Hell"),
        "o"),
      "World")
  )
}
// ch2
const CompWithProperties = (props) => {
  return (
    React.DOM.span(null, "My name is ", props.name)
  )
}

// ch2 - stateless component
var CompWithPropsTypes = React.createClass ({
  propsTypes: {
    name: React.PropTypes.string.isRequired
  },
  render () {
    return (
      React.DOM.span(null, "My name is ", this.props.name)
    )
  }

})

//ch2 - stateful component
var TextAreaComponent = React.createClass({
  log (methodName, args) {
    console.log(methodName, args)
  },
  componentWillUpdate () {
    this.log('componentWillUpdate', arguments)
  },
  componentDidUpdate () {
    this.log('componentDidUpdate', arguments)
  },
  componentWillMount () {
    this.log('componentWillMount', arguments)
  },
  componentDidMount () {
    this.log('componentDidMount', arguments)
  },
  componentWillUnmount () {
    this.log('componentWillUnmount', arguments)
  },
  propTypes: {
    text: React.PropTypes.string,
  },
  getInitialState(){
    return {
      text: this.props.text
    }
  },
  onTextChange(ev){
    this.setState({
      text: ev.target.value
    })
  },
  render(){
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this.onTextChange
      }),
      React.DOM.h3(null, this.state.text.length))
  }
})


ReactDOM.render(<CompWithProperties name='jm'/>, document.body.firstChild)

//TODO CompWithPropsTypes with no name passed does not display an warning / error
//ReactDOM.render(<CompWithPropsTypes/>, document.body.firstChild)
ReactDOM.render(
  React.createElement(CompWithPropsTypes,
    {}), document.body.firstChild)

// stateless composant (static composant) vs statefull
ReactDOM.render(
  React.createElement(TextAreaComponent, {
    text: 'Foo'
  }),
  document.body.firstChild)


var TextAreaCounterComponent = ReactDOM.render(
  React.createElement(TextAreaComponent, {
    defaultValue: "Jimmy"
  }),
  document.body.firstChild
)
