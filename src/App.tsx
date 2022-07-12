import { Gastos } from "./components/Forms/Gastos"
import { Ingresos } from "./components/Forms/Ingresos"
import { Table } from "./components/Table/Table"
import { TableIngresos } from "./components/Table/TableIngresos"


function App() {
  

  return (
    <div>
      Control de dinero mensual
      <Ingresos/>
      <hr/>
      <Gastos/>
    </div>
  )
}

export default App
