import { CartWidget } from "./CartWidget.jsx"

export function Navbar (){
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img className="navbar-logo-img" alt="Logo eCommerce" src="./src/assets/logo.png"/>
                <span className="navbar-logo-txt">TIENDA</span>
            </div>
            <div className="paginas">
                <a className="paginas-txt" href="">Home</a>
                <a className="paginas-txt" href="">Productos</a>
                <a className="paginas-txt" href="">Contacto</a>
            </div>
            <CartWidget />
        </div>
    )
}