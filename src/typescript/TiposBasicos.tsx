

export const TiposBasicos = () => {
    const nombre: string = 'LetNombreString|Number';
    const edad: number = 35;
    const estaActivo: boolean = false;

    const poderes: string[] = ['Velocidad', 'Pegar', 'Respirar'];

    


  return (
    <>
    <h3>tipos basicos</h3>
    { nombre }, { edad }, {(estaActivo)?'Activo!':'No Activo!'}, 
    <br/>
    {poderes.join(', ')}
    </>
  )
}
