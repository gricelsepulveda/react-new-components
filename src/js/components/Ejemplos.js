import React,{Fragment} from 'react'

class Ejemplos extends React.Component {
  render() {

    const smartPhones = [
      { name:'iphone', price:649 },
      { name:'Galaxy S6', price:576 },
      { name:'Galaxy Note 5', price:489 }
    ]

    const prices = smartPhones.map(smartPhone => smartPhone.price)
    console.log(prices)

    return (
      <Fragment>
        <div className="ejemplo">
        </div>
      </Fragment>
    )
  }
}

export default Ejemplos
