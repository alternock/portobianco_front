import {Routes, Route} from "react-router-dom";
//components
import  Main  from "./containers/Main"
import CuentaCorriente from "./Pages/CuentaCorriente";


function App() {

  return (
    <div>
     <Routes>
       <Route path="/" element={<Main />}/> 
       <Route path="/facturas" element={<Main />}/> 
       <Route path="/cuenta/corriente" element={<Main />}/> 
       <Route path="/buscar/cliente" element={<Main />}/> 
     </Routes>
    </div>
  )
}

export default App
