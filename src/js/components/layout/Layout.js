import React, { Fragment } from 'react'

//import Screen from '../screen/Screen'

class Layout extends React.Component {

  
  render() {
    
    let { type, designer, title } = this.props

    switch(type) { 
      case "free": { 
        type = (
          <div className={`nbx-layout free ${(designer) ? designer="designer" : '' }`}>
            <div className="nbx-box-screen"></div>
          </div>
        )
        break; 
      }
      
      case "grid": {
        type = (
          <div className={`nbx-layout grid ${(designer) ? designer="designer" : '' }`}>
            <div className="nbx-title">{title}</div>
            <div className="nbx-box-screen"></div>
          </div>
        )
        break; 
      }

      case "filter-grid": {
        type = (
          <div className={`nbx-layout filter-grid ${(designer) ? designer="designer" : '' }`}>
            <div className="nbx-title">{title}</div>
            <div className="nbx-filter"></div>
            <div className="nbx-box-screen"></div>
          </div>
        )
        break; 
      }
    }

    return (
      <Fragment>
        {type}
      </Fragment>
  
    )
  }
}

export default Layout
