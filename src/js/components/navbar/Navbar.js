import React, {Fragment} from 'react'

class Navbar extends React.Component {

  render() {

    let { system, user} = this.props

    return (
      <Fragment>
        <nav className="nbx-navbar">
          <div className="flex-row nbx-h1-wrapper">
            <h1 className="nbx-system-name">{system}</h1>
          </div>
        </nav>
      </Fragment>
    )

  }

}

export default Navbar