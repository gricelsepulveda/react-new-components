import React,{Fragment} from 'react' 



class Avatar extends React.Component {
  render() {

    let {size, color, firstname, lastname} = this.props
    let nameLetter = ''
    let lastnameLetter = ''
    let noUser

    //GET THE FIRST LETTER FROM FIRSTNAME AND LASTNAME
    if (firstname && lastname) {
      nameLetter = firstname.split("")[0]
      lastnameLetter = lastname.split("")[0]
    }
    else {
      noUser = "placeholder"
    }

    return (
      <Fragment>
        <div className={`nbx-avatar ${size} ${color} ${noUser}`} >
          <span className="nbx-initials">{`${nameLetter}${lastnameLetter}`}</span>
        </div>
      </Fragment>
    )
  }
} 

export default Avatar