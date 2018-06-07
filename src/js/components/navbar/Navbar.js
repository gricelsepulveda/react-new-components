import React, {Fragment} from 'react'

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {active: false, openMenu: false};
  }

  showUserOptions = () => {
    let { active } = this.state
    this.setState({ active: !active })
  }


  toggleMenu = () => {
    let { openMenu } = this.state
    this.setState({ openMenu: !openMenu })
  }

  render() {

    let { system, user, type} = this.props

    let other
    let alternative
    let altMenu

    //HERE YOUR LOGOUT METHOD
    const logoutMethod = (e) => {
    }

    switch(type) { 
      
      //FOR FUTURE USES
      case "other": { 
        break; 
      } 
      
      //EXTERNAL USER
      case "alternative": { 
        altMenu = (
          <Fragment>
            <span className="nuboxFont nubox-logo"></span>
            <button className="nbx-sesion" onClick={logoutMethod}>
              <span className="nuboxFont nubox-cerrar-sesion"></span>salir
            </button>
          </Fragment>
        )
        break; 
      } 

      //LOGGED USER
      default: {
        altMenu = (
          <Fragment>
            <div className="flex-row flex-start">
              <button className={(this.state.openMenu !== false) ? `nbx-trigger-menu active` : `nbx-trigger-menu`} onClick={this.toggleMenu}>
                <span className="nuboxFont nubox-menu"></span>
              </button>
              <span className="nuboxFont nubox-logo"></span>
            </div>
            <button className="nbx-sesion" onClick={this.showUserOptions}>
              {user} <span className={(this.state.active !== false) ? `nuboxFont nubox-dropdown active` : `nuboxFont nubox-colapsar`}></span>
            </button>
          </Fragment>
        ) 
        break; 
      }
    }

    return (
      <Fragment> 
        <nav className="nbx-navbar">
          <div className="flex-row nbx-h1-wrapper">
            <h1 className="nbx-system-name">{system}</h1>
          </div>
          <div className="flex-row flex-between">
            {altMenu}
          </div>
        </nav>
      </Fragment>
    )

  }

}

export default Navbar