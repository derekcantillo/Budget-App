import React from 'react'
interface Props{
    ingresos:string[]
}
export const TableIngresos = ({ingresos}:Props) => {
  return (
    <>
        <table>
            <tr>
                <th>Ingresos</th>
                
            </tr>
                {
                    ingresos.map((ingreso)=>(
                        <tr>

                        <td>{ingreso}</td>
                        
                        </tr>
                    ))
                }

        </table>
    </>
  )
}
