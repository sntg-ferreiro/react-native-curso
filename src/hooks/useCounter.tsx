import React, { useState } from 'react'

export const useCounter = (init:number = 10) => {
    const [valor, setvalor] = useState(init)

    const acumular = (numero:number) =>{
        setvalor(valor + numero);
    }

    return {
        valor, 
        acumular
    }
}

