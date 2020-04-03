import React from 'react'
import ReactDOM from 'react-dom'
import LibzyRoot from './libzy'
import LibzyConfig from '../libzy.config'
import './assets/css/styles.css'
import './assets/css/custom.css'

ReactDOM.render(
    <LibzyRoot config={LibzyConfig} />,
    document.getElementById('root')
)
