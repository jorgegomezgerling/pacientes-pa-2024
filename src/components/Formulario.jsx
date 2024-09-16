import { useState } from "react"


export const Formulario = () => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintomas, setSintomas] = useState('')


handleSubmit = (e) => {
  e.preventDefault()
  // Validar
  // Asignar un ID
  // Crear la cita
  //mostrar la cita en CONSOLA
  // Reiniciar el form
}

  return (
    <div className="w-1/2">
    <h2 className="text-3xl text-center">Seguimiento de pacientes</h2>

    <p className="font-black text-lg mt-5 text-center mb-10">Añade pacientes y {''}
    <span className="text-indigo-600 font-bold">Administralos</span></p>

    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="nombre" 
       type="text" 
       placeholder="Nombre del paciente"
       value={nombre}
      onChange={(e) => setNombre(e.target.value)}
       />
  

    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propietario">Propietario</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="propietario" 
       type="text" 
       placeholder="Nombre del propietario"
        onChange={(e) => setPropietario(e.target.value)}
      value={propietario}
       />
     
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="telefono" 
       type="tel" 
       placeholder="Teléfono del propietario"
       onChange={(e) => setTelefono(e.target.value)}
      value={telefono}
       />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="fecha" 
       type="date"
        onChange={(e) => setFecha(e.target.value)}/>
        fecha: {fecha}
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hora">Hora</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="hora" 
       type="time"
      onChange={(e) => setHora(e.target.value)}
      value={hora}
        />

    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sintomas">Síntomas</label>
      <textarea className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="sintomas" 
       placeholder="Describa los síntomas"
        onChange={(e) => setSintomas(e.target.value)}
      value={sintomas}
       />
    </div>

    <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
    type="submit">Agregar cita</button>

    </form>

    </div>
  )
}
