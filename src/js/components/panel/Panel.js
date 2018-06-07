import React,{Fragment} from 'react' 
import Avatar from '../avatar/Avatar'
import Total from '../total/Total'

class Panel extends React.Component {

  render() {

    let { width, height} = this.props

    return (
      <Fragment>
        <div className={ (width, height) ? `nbx-panel-container ${width} ${height}` : `nbx-panel-container` } >

          <img className="nbx-logo-nubox" src="../../../assets/images/logo-nubox.svg" alt="logo-nubox"/>

          <h1 className="nbx-h1">Portal de pagos<br/>¡Bienvenido!</h1>

          <Avatar size="md" color="color-5" firstname="gricel" lastname="sepulveda"/>

          <p className="nbx-p">Ingresa tus datos para pagar</p>
          

          {/* AQUÍ DEBERÍAN IR LOS INPUTS */}

          {/* AQUI EL CAPTCHA */}

          {/* AQUÍ EL BUTTON */}

        </div>
      </Fragment>
    )
  }
}

export default Panel