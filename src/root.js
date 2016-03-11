/* react hello world with ES5 declaration */

var React = require('react');
var ReactDom = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return <div> Hello world, Fluent US is done temp really </div>
  }
});


ReactDom.render(<Hello/>, document.body.firstChild);



