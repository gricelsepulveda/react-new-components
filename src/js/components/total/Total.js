import React,{Fragment} from 'react' 

class Total extends React.Component {

  render() {

    let { width, valueFull } = this.props

    if ( isNaN(valueFull) ) {
      console.log('no es un número')
    }
    else {
      console.log('es un número');
      if ( valueFull < 5000000){
        console.log('es menor a 5.000.000');
      }
      else {
        console.log('es mayor a 5.000.000')
      }
    }

    return (
      <Fragment>
        <div className="nbx-total">
          <div className="nbx-total-cell">
            ${valueFull}
          </div>
        </div>
      </Fragment>
    ) 
  }
}

export default Total


