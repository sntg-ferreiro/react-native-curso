// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { Usuarios } from "./components/Usuarios";
// import { ContadorConHook } from "./components/ContadorConHook";
// import { Login } from "./components/Login";
// import { Contador } from "./components/Contador";
// import { Funciones } from "./typescript/Funciones";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";

import { Formulario } from "./components/Formulario";


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Intro a TS-react</h1>
      <hr/>
      {
      /* <TiposBasicos /> */
      // <ObjetosLiterales/>
      // < Funciones />
      // <Contador/>
      // <ContadorConHook/>
      // <Login/>
      // <Usuarios/>
      <Formulario/>
      }
      </div>
  )
}

export default App;