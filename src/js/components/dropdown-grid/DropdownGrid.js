import React,{Fragment} from 'react'

class DropdownGrid extends React.Component {

  constructor(props){
    super(props)
  }

  render() {

    let { width, scroll} = this.props

    return (
      <div className={`nbx-dropdown-grid demo ${(scroll) ? 'scroll' : '' } ${`width-${width}`}`}>
        <div className="dg-header-ul">
          <div className="dg-li number"></div>
          <div className="dg-li width-15">No inventariable</div>
          <div className="dg-li width-30">Producto/Servicio</div>
          <div className="dg-li width-10">Cantidad</div>
          <div className="dg-li width-20">$ Precio</div>
          <div className="dg-li width-100">$ Total</div>
        </div>

        <div className="dg-body">

          <div className="dg-register level-1 active">
            <div className="dg-ul">
              <div className="dg-li number">
                <span className="text">1</span>
              </div>
              <div className="dg-li width-15 ">
                <span className="text">Checkbox</span>
              </div>
              <div className="dg-li width-30 left drop">
                <span className="text">Box de Gaseosa  2lt. CocaCola Company Box de Gaseosa  2lt. CocaCola Company</span>
                <button type="button" className="nbx-button transparent sm icon drop"></button>
              </div>
              <div className="dg-li width-10 right">
                <span className="text">2</span>
              </div>
              <div className="dg-li width-20 right">
                <span className="text">12.800</span>
              </div>
              <div className="dg-li width-100 right">
                <span className="text">13.280</span>
              </div>
            </div>

            <div className="dg-register level-2 ">
              <div className="dg-ul">
                <div className="dg-li">
                  <button type="button" className="nbx-button icon transparent delete">
                  </button>
                </div>
                <div className="dg-li width-355p left">
                  <span className="text">Bebida Sprite 2 lt</span>
                </div>
                <div className="dg-li width-120p right">
                  <span className="text">8</span>
                </div>
                <div className="dg-li width-235p right">
                  <span className="text">830</span>
                </div>
                <div className="dg-li width-265p right">
                  <span className="text">6.640</span>
                </div>
              </div>
            </div>

            <div className="dg-register level-2">
              <div className="dg-ul">
                <div className="dg-li">
                  <button type="button" className="nbx-button icon transparent delete">
                  </button>
                </div>
                <div className="dg-li width-355p left">
                  <span className="text">Bebida Sprite 2 lt</span>
                </div>
                <div className="dg-li width-120p right">
                  <span className="text">8</span>
                </div>
                <div className="dg-li width-235p right">
                  <span className="text">830</span>
                </div>
                <div className="dg-li width-265p right">
                  <span className="text">6.640</span>
                </div>
              </div>
            </div>


            <div className="dg-register level-2 placeholder">
              <div className="dg-ul">
                <div className="dg-li">
                  <button type="button" className="nbx-button icon transparent delete">
                  </button>
                </div>
                <div className="dg-li width-355p left">
                  <span className="text">Asociar producto o servicio...</span>
                </div>
                <div className="dg-li width-120p right">
                  <span className="text">Unidades</span>
                </div>
                <div className="dg-li width-235p right">
                  <span className="text">$ Precio Un.</span>
                </div>
                <div className="dg-li width-265p right">
                  <span className="text">$ Total Un.</span>
                </div>
              </div>
            </div>
          
            <div className="dg-register level-1 ">
              <div className="dg-ul">
                <div className="dg-li number">
                  <span className="text">2</span>
                </div>
                <div className="dg-li width-15 ">
                  <span className="text">Checkbox</span>
                </div>
                <div className="dg-li width-30 left drop">
                  <span className="text">Box de Gaseosa  2lt. CocaCola Company</span>
                  <button type="button" className="nbx-button transparent sm icon drop"></button>
                </div>
                <div className="dg-li width-10 right">
                  <span className="text">2</span>
                </div>
                <div className="dg-li width-20 right">
                  <span className="text">12.800</span>
                </div>
                <div className="dg-li width-100 right">
                  <span className="text">13.280</span>
                </div>
              </div>
            </div>

            <div className="dg-register level-1">
              <div className="dg-ul">
                <div className="dg-li number">
                  <span className="text">3</span>
                </div>
                <div className="dg-li width-15 ">
                  <span className="text">Checkbox</span>
                </div>
                <div className="dg-li width-30 left drop">
                  <span className="text">Box de Gaseosa  2lt. CocaCola Company</span>
                  <button type="button" className="nbx-button transparent sm icon drop"></button>
                </div>
                <div className="dg-li width-10 right">
                  <span className="text">2</span>
                </div>
                <div className="dg-li width-20 right">
                  <span className="text">12.800</span>
                </div>
                <div className="dg-li width-100 right">
                  <span className="text">13.280</span>
                </div>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    )
  }
}

export default DropdownGrid