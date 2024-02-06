
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;

}

interface Direccion{
    pais: string;
    casaNo: number;
}



const persona: Persona = {
    nombreCompleto:'Santiago',
    edad: 32,
    direccion:{
        pais:'Argentina',
        casaNo: 615
    }
}

export const ObjetosLiterales = () => {
  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
  )
}
