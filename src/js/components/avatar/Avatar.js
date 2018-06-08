import React,{Fragment} from 'react' 

class Avatar extends React.Component {

  constructor(props){
    super(props)

    let indicator
    (this.props.firstname && this.props.lastname !== undefined) ? indicator = true : indicator = false

    this.state = { readyUser: indicator }   
  }

  render() {

    let { size, color, firstname, lastname } = this.props

    return (
      <Fragment>
        <div className={`nbx-avatar ${size} ${color}`}>
          { (this.state.readyUser !== false) ? ( <span className="nbx-initials">{firstname.split("")[0] + lastname.split("")[0]}</span>) : (<span className="nbx-placeholder"></span>) }
        </div>
      </Fragment>
    )
  }
}



export default Avatar