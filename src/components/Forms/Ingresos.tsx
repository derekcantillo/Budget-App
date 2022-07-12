import React, { FormEvent, useState } from 'react'
import { TableIngresos } from '../Table/TableIngresos'
import { useForm } from '../../hooks/useForm';

export const Ingresos = () => {
    const categories = ['Sueldo', 'Intereses', 'Bonificaciones', 'Otros']

    const [ingresos, setIngresos] = useState<string[]>([])

    const{formData, onChange, resetForm, ingresoText }= useForm({
        ingresoText:''
    })

    const onSubmit=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        setIngresos(ingreso=>[...ingreso, ingresoText])
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
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
                type='text'
                placeholder='Ingrese monto'
                onChange={onChange}
                name='ingresoText'
                value={ingresoText}
            />
            <button type='submit'>
                Ingresar
            </button>
        </form>
        <TableIngresos ingresos={ingresos}/>
    </div>
  )
}
