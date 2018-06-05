import React,{Fragment} from 'react'
import Total from './total/Total'

class Test extends React.Component {

  render() {
    return (
      <Fragment>
        <div className="ejemplo">
          <Total valueFull="10000"/>
        </div>
      </Fragment>
    )
  }
}

export default Test
