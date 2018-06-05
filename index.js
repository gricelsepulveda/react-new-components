import React from 'react'
import { render } from 'react-dom'

//REACTNUBOX STYLES
import './src/assets/scss/components.scss' 

//VIEW STYLES
import './src/assets/scss/nbx-login-pay.scss'

//FIRST COMPONENT
import LoginPay from './src/js/components/LoginPay'
//FIRST COMPONENT
import Test from './src/js/components/Test'

//RENDER COMPONENT AT DOM
render(<Test/>, document.getElementById('root'))