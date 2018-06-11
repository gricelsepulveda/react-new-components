import React,{Fragment} from 'react'
import Total from './total/Total'
import Navbar from './navbar/Navbar'
import Breadcrumb from './breadcrumb/Breadcrumb'

class Test extends React.Component {


  render() {
    
    const addData = [
      { field: 'Monto recaudado', value: 250000 },
      { field: '(-) A excedente', value: -50000 }
    ]
  
    return (
      <Fragment>
        <div className="ejemplo">
          <Total price="50000000000" width="width-200p" data={addData} validation={false}/>
        </div>
        {/*<Navbar system="Botón de Pago Nubox" user="Gricel Sepúlveda" type="alternative" />
        <Breadcrumb screenId="26"/>*/}
      </Fragment>
    )
  }
}

export default Test
