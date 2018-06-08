import React,{Fragment} from 'react' 
import { timingSafeEqual } from 'crypto';

class Total extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      price : 0
    } 
  }

  render() {

    let { width, valueFull, price, addEntries, addValues} = this.props
    let error
    
    if (width === undefined) {
      console.warn('Please set width (width-200p or width-200 for percentages)')
      width = ''
    }

    price = parseInt(price)

    if ( price > 5000000){
      console.warn("BUSINESS RULE: Khipu doesn't accept ammounts over 5 million")
      error = 'validation-fail'
    }

    const entries = addEntries.split(",")
    console.log(entries)
    const values = addValues.split(",")
    console.log(values)

    //console.log(totales)

    return (
      <Fragment>
        <div className="nbx-total">
          <span>$ Total:</span> 
          <div className={`nbx-total-cell ${(error) ? error : '' } ${width}`}>
            { (price) ? price.toLocaleString('es-Es') : this.state.price.toLocaleString('es-Es') }
          </div>
        </div>
      </Fragment>
    ) 
  }
}

export default Total

