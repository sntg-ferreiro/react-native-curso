import { useState } from "react"

export const useForm = <T extends Object>(formulario: T) => {
  
    const [state, setstate] = useState(formulario)
    
      const onChange = (value: string, campo: keyof T) =>{
        setstate({
            ...state,
            [campo]:value
        })
      }

      return {...state, formulario: state, onChange}
}
