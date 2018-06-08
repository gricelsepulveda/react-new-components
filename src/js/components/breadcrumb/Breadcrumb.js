import React,{Fragment} from 'react'   

class Breadcrumb extends React.Component {
  render () {

    //EXAMPLE STRUCTURE MENU ARRAY

    let { screenId } = this.props

    let getRoute = () => {
      console.log(screenId)

      fetch('../../../assets/sample-data/menu-example.json')
      .then((res) => res.json())
      .then((data) => {
        const routeString =  data.ListaMenu[screenId]
        const findParent = routeString['ParentId']

        let currentScreen = routeString['Descripcion']
        let levelScreen = routeString['Nivel']
        let screenParents = findParent.routeString
        //let parentName = screenParents['Descripcion']



        console.log(currentScreen)
        console.log(levelScreen)
        console.log(findParent)
        //console.log(parentName)
        console.log(data.ListaMenu)
        
        console.log('data:', data.ListaMenu[screenId])
      })
    }

    getRoute()

    return (
      <Fragment>
        <div className="nbx-breadcrumb">
          <ul className="nbx-route-tracer">
            <li>Pago</li>
            <li className="active">Facturas a pagar</li>
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Breadcrumb
