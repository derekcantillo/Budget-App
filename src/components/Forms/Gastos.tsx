import React from 'react'

export const Gastos = () => {
    const categories = ['Casa', 'Créditos', 'Servicios', 'Gimnasio', 'Comida', 'Transporte', 'Ocio']
  return (
    <div>
        <form>
            <select>
                {
                    categories.map((category)=>(
                        <option>
                            {category}
                        </option>

                    ))
                }
            </select>
            <input
                placeholder='Ingrese monto'
            />
        </form>
    </div>
  )
}
