import { useForm } from "../hooks/useForm"

export const Formulario = () => {
  
    const {pass, formulario, email, onChange} = useForm({
        email:'test@test.com',
        pass:'123456'
      })

    return (
    <>
        <h3>Formulario</h3>
        <input 
            type="text" 
            className="form-control" 
            placeholder="ESCRIBI ACA TU EMAIL PAPAERCOLAPIO" 
            value={email}
            onChange={({target}) => onChange(target.value, 'email')}
        />
        <input 
            type="text" 
            className="form-control mt-2 mb-2" 
            placeholder="ESCRIBI ACA TU SUPER SECRETA PAPAELDO" 
            value={pass}
            onChange={({target}) => onChange(target.value, 'pass')}
        />

        <code>
            <pre>
                { JSON.stringify(formulario, null, 2)}
            </pre>
        </code>
    </>
  )
}
