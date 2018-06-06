import React,{Fragment} from 'react'
import Total from './total/Total'
import Navbar from './navbar/Navbar'

class Test extends React.Component {

  render() {
    return (
      <Fragment>
        {/*<div className="ejemplo">
          <Total valueFull="242091"/>
        </div>*/}
        <Navbar system="Botón de Pago Nubox" user="Gricel Sepúlveda" />
      </Fragment>
    )
  }
}

export default Test
