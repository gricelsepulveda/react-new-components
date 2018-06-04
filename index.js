import React from 'react'
import { render } from 'react-dom'

//REACTNUBOX STYLES
import './src/assets/scss/components.scss' 

//VIEW STYLES
import './src/assets/scss/nbx-login-pay.scss' 

//FIRST COMPONENT
import LoginPay from './src/js/components/LoginPay'

//RENDER COMPONENT AT DOM
render(<LoginPay/>, document.getElementById('root'))