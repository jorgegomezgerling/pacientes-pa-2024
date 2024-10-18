import { useState } from "react"

export const Formulario = ({ requerimientos, setRequerimientos }) => {

  const [proyecto, setProyecto] = useState('')
  const [tarea, setTarea] = useState('')
  const [persona, setPersona] = useState('')
  const [storyPoints, setStoryPoints] = useState('')
  const [prioridad, setPrioridad] = useState('')
  const [fechaCreacion, setFechaCreacion] = useState('')
  const [resumen, setResumen] = useState('')

  const [error, setError] = useState(false) // ver si tengo que dejar o no esto.


  const handleSubmit = (e) => {
    e.preventDefault()
    
    //validar que los campos esten llenos
    if([proyecto, tarea, persona, storyPoints, fechaCreacion, resumen].includes('')) {
      console.log('Hay al menos un campo vacío');

      setError(true)
      return
    }
      
      setError(false)

        //objeto con los datos del paciente
        const objetoRequerimiento = {
          proyecto,
          tarea,
          persona,
          prioridad,
          storyPoints,
          fechaCreacion, 
          resumen,
        }
        console.log(objetoRequerimiento);
      
        setRequerimientos([
          ...requerimientos,
          objetoRequerimiento
        ])

        //reiniciar el formulario
        setProyecto('')
        setTarea('')
        setPersona('')
        setPrioridad('')
        setStoryPoints('')
        setFechaCreacion('')
        setResumen('')
      } 
  
    
  return (
    <div className="w-1/2">
    <h2 className="text-3xl text-center">Requerimientos</h2>

    <p className="font-black text-lg mt-5 text-center mb-10">Añade requerimientos y {''}
    <span className="text-indigo-600 font-bold">Administralos</span></p>

    <form 
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
    {error ? <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">Todos los campos son obligatorios</p> : null}
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">Proyecto</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="proyecto" 
       type="text" 
       placeholder="Nombre del proyecto"
       value={proyecto}
       onChange={(e) => setProyecto(e.target.value)}
       />
  

    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tarea">Tarea</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="tarea" 
       type="text" 
       placeholder="Nombre de la tarea"
        onChange={(e) => setTarea(e.target.value)}
      value={tarea}
       />
     
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="persona">Desarrollador</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="persona" 
       type="text" 
       placeholder="Nombre del desarrollador"
       onChange={(e) => setPersona(e.target.value)}
      value={persona}
       />
    </div>


    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="StoryPoints">Story Points</label>
      <textarea className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="storyPoints" 
       placeholder="Story Points"
       type="number"
        onChange={(e) => setStoryPoints(e.target.value)}
      value={storyPoints}
       />
    </div>

        <div className="mb-5">
      <label htmlFor="prioridad" className="block text-gray-700 uppercase font-bold">
        Prioridad
      </label>
      <select
        id="prioridad"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={prioridad}
        onChange={(e) => setPrioridad(e.target.value)} 
      >
        <option value="">-- Seleccionar --</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
    </div>


    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="fechaCreacion" 
       type="date"
       value={fechaCreacion}
        onChange={(e) => setFechaCreacion(e.target.value)}/>
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">Resumen</label>
      <textarea className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="resumen" 
       placeholder="Establezca un resumen"
        onChange={(e) => setResumen(e.target.value)}
      value={resumen}
       />
    </div>

    <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
    type="submit">Agregar Requerimiento</button>

    </form>

    </div>
  );
}
