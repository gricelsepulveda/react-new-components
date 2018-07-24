import React,{Fragment} from 'react'
import DropdownGrid from './dropdown-grid/DropdownGrid'

class Test extends React.Component {

  render() {  
    /*const addData = [
      { field: 'Monto recaudado', value: 250000 },
      { field: '(-) A excedente', value: -50000 }
    ]*/
    return (
      <Fragment>
        <DropdownGrid width="1200p" scroll>
        </DropdownGrid>
      </Fragment>
    )
  }
}

export default Test
