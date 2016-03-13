/**
 * Created by jean-michel-legrand on 12/03/16.
 */

import React from 'react'
import LoginPage from './pages/login'
import Nav from './components/nav'
const App = (props) => {
  let page
  console.log(props.url)
  if (props.url === '/') {
    page = <LoginPage/>
  }
  return (
    <div>
      <div className='container'>
        {page}
      </div>
    </div>
  )
}

export default App
