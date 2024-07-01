import { Navbar } from "./components/Navbar.jsx"
import {ItemListContainer} from "./components/ItemListContainer.jsx"
import "./App.css"

export function App () {
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer saludo="items de e-commerce"/>
        </div>
    )
}