

export const Requerimiento = ({requerimiento, eliminarRequerimiento}) => {

    const {proyecto, tarea, persona, storyPoints, prioridad, fechaCreacion, resumen} = requerimiento
  
    return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rouded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Proyecto {''}
        <span className="font-normal normal-case">{proyecto}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Tarea: {''}
        <span className="font-normal normal-case">{tarea}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Desarrollador: {''}
        <span className="font-normal normal-case">{persona}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">storyPoints: {''}
        <span className="font-normal normal-case">{storyPoints}</span>
    </p>


    <p className="font-bold mb-3 text-gray-700 uppercase">
  Prioridad: {''}
  <span
    className={`font-normal normal-case p-2 rounded-lg ${
      prioridad === 'Alta' ? 'bg-red-500 text-white' : 
      prioridad === 'Media' ? 'bg-yellow-500 text-white' : 
      'bg-green-500 text-white'
    }`}
  >
    {prioridad}
  </span>
</p>


    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
        <span className="font-normal normal-case">{fechaCreacion}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
        <span className="font-normal normal-case">{resumen}</span>
    </p>

    <button 
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
        onClick={() => eliminarRequerimiento(proyecto)}>
        Eliminar
      </button>

    </div>
  )
}
