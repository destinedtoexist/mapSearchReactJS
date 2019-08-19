import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

console.log(process.env.NODE_ENV)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)