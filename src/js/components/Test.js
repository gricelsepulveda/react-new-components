import React,{Fragment} from 'react'
import Total from './total/Total'
import Navbar from './navbar/Navbar'
import Breadcrumb from './breadcrumb/Breadcrumb'

class Test extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     totales:{
  //       "impuesto":1000,
  //       "descuento":2000
  //     },
        
  //   }
    
  // }

  render() {

    //let totales = this.state.totales
    return (
      <Fragment>
        <div className="ejemplo">
          <Total price="50000000000" width="width-200p" /*totales={totales}*/ addEntries="impuesto, retefuente" addValues="100,2000"/>
        </div>
        {/*<Navbar system="Botón de Pago Nubox" user="Gricel Sepúlveda" type="alternative" />
        <Breadcrumb screenId="26"/>*/}
      </Fragment>
    )
  }
}

export default Test
