
import { Requerimiento } from "./Requerimiento"

export const ListadoRequerimientos = ({ requerimientos, setRequerimientos }) => {

  //console.log(requerimiento)

const eliminarRequerimiento = (proyecto) => {
  const nuevosRequerimientos = requerimientos.filter((req => req.proyecto !== proyecto)
);
  setRequerimientos(nuevosRequerimientos);
}
  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Requerimientos</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} 
      <span className="text-indigo-600 font-bold">requerimiento</span> aquí
      </p>

      { requerimientos.map(requerimiento => (
        <Requerimiento 
          key={requerimiento.proyecto}
          requerimiento={requerimiento}
          eliminarRequerimiento={eliminarRequerimiento}
        />
      ))}
    </div>
  )
}
