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

    let { width, price, validation, data } = this.props
    let error
    
    if (width === undefined) {
      console.warn('Please set width (width-200p or width-200 for percentages)')
      width = null
    }

    price = parseInt(price)

    if (validation === false ) {
      error ='validation-fail'
    } 
    else {
      error = undefined
    }

    return (
      <Fragment>
        <div className="nbx-total">
          {
            (data) ? data.map((x, key) => ( <div className="nbx-field" key={key}><span>{x.field}</span><span className={`${width}`}>{x.value.toLocaleString('es-Es') }</span></div>) ) : null
          }
          <div className="nbx-total-space">
            <span className="nbx-span-total">$ Total:</span> 
            <div className={`nbx-total-cell ${(error) ? error : null } ${width}`}>
              { (price) ? price.toLocaleString('es-Es') : this.state.price.toLocaleString('es-Es') }
            </div>
          </div>
        </div>
      </Fragment>
    ) 
  }
}

export default Total

