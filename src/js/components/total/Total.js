import React,{Fragment} from 'react' 

class Total extends React.Component {

  render() {

    let { width, valueFull} = this.props
    let price 

    if ( isNaN(valueFull) ) {
      console.warn("¡We're expecting a number! Keep Trying")
    }
    else {
      //OK
      if ( valueFull < 5000000){
        price = valueFull.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      }
      else {
        console.warn("Business Rule: Khipu doesn't accept ammounts over 5 million")
      }
    }

    return (
      <Fragment>
        <div className="nbx-total">
          <div className={`nbx-total-cell ${width}`}>
            $ {price}
          </div>
        </div>
      </Fragment>
    ) 
  }
}

export default Total


