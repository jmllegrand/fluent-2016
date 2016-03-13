/**
 * Created by jean-michel-legrand on 13/03/16.
 */
import React from 'react'
import ReactDOM from 'react-dom'

var header = ["book", "author", "language", "published", "sales"]
var data = [
  ["Book1", "Author2", "FR", 1999, 120000],
  ["Cook2", "Author2", "FR", 1999, 120000],
  ["Dook3", "Author3", "FR", 1999, 120000],
  ["Eook4", "Author4", "FR", 1999, 120000],
  ["Fook5", "Author5", "FR", 1999, 120000],
  ["Gook6", "Author6", "FR", 1999, 120000]
]

var Excel = React.createClass({
  render() {
    return (
      <table>
        <thead>
        <tr>{this.props.map(title => title)}</tr>
        </thead>
      </table>
    )
  }
})