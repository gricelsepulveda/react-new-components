import React,{Fragment} from 'react'
import Total from './total/Total'
import Navbar from './navbar/Navbar'
import Breadcrumb from './breadcrumb/Breadcrumb'

class Test extends React.Component {

  render() {
    return (
      <Fragment>
        {/*<div className="ejemplo">
          <Total price="50000000000" width="width-200p"/>
        </div>*/}
        <Navbar system="Botón de Pago Nubox" user="Gricel Sepúlveda" />
        <Breadcrumb screenId="26"/>
      </Fragment>
    )
  }
}

export default Test
