import React,{Fragment} from 'react' 

class Avatar extends React.Component {

  render() {

    let { size, color, firstname, lastname } = this.props

    return (
      <Fragment>
        <div className={`nbx-avatar ${size} ${color}`} >
          { (firstname, lastname)
            ? 
            ( <span className="nbx-initials">{ firstname.split("")[0] + lastname.split("")[0] }</span>)
            : 
            (<span className="nbx-placeholder"></span>)}
        </div>
      </Fragment>
    )
  }
}



export default Avatar