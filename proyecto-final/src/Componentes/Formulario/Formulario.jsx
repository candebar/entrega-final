import React, { useState } from 'react';
import './Formulario.css'; // Importa el archivo CSS

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    dia: '',
    horario: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ nombre: '', dia: '', horario: '' });
  };

  // Función para eliminar un registro específico
  const handleDelete = (index) => {
    setSubmittedData(submittedData.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Día:</label>
          <input
            type="date"
            name="dia"
            value={formData.dia}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Horario:</label>
          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">Reservar</button>
      </form>

      <div className="dataContainer">
        <h3 className="heading">Datos Ingresados</h3>
        {submittedData.map((data, index) => (
          <div key={index} className="dataItem">
            <p className="dataText">Nombre: {data.nombre}</p>
            <p className="dataText">Día: {data.dia}</p>
            <p className="dataText">Horario: {data.horario}</p>
            <button 
              className="deleteButton" 
              onClick={() => handleDelete(index)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formulario;

// import './Formulario.css'
// import React, { useState } from 'react';

// function Formulario()  {
 
//   const [usuario, setUsuario] = useState('');
//   const [turno, setTurno] = useState('');
//   const [dia, setDia] = useState('');
//   const [hora, setHora] = useState('');
//   const [usuarios, setUsuarios] = useState([]);

//   const agregarUsuario = () => {
//     if (usuario && turno && dia && hora) {
//       setUsuarios([...usuarios, { usuario, turno, dia, hora }]);
//       setUsuario('');
//       setTurno('');
//       setDia('');
//       setHora('');
//     } else {
//       alert('Por favor, completa todos los campos.');
//     }
//   };

//   const eliminarUsuario = (index) => {
//     const nuevosUsuarios = usuarios.filter((_, i) => i !== index);
//     setUsuarios(nuevosUsuarios);
//   };

//   return (
//     <div className="form-container">
    
//       <label htmlFor="usuario">Nombre de Usuario:</label>
//       <input
//         type="text"
//         id="usuario"
//         value={usuario}
//         onChange={(e) => setUsuario(e.target.value)}
//         placeholder="Introduce tu nombre"
//       />

//       <label htmlFor="turno">Selecciona tu turno:</label>
//       <select
//         id="turno"
//         value={turno}
//         onChange={(e) => setTurno(e.target.value)}
//       >
//         <option value="">-- Selecciona un turno --</option>
//         <option value="Mañana">Mañana</option>
//         <option value="Tarde">Tarde</option>
//         <option value="Noche">Noche</option>
//       </select>

//       <label htmlFor="dia">Selecciona el día:</label>
//       <select id="dia" value={dia} onChange={(e) => setDia(e.target.value)}>
//         <option value="">-- Selecciona un día --</option>
//         <option value="Lunes">Lunes</option>
//         <option value="Martes">Martes</option>
//         <option value="Miércoles">Miércoles</option>
//         <option value="Jueves">Jueves</option>
//         <option value="Viernes">Viernes</option>
//         <option value="Sábado">Sábado</option>
//         <option value="Domingo">Domingo</option>
//       </select>

//       <label htmlFor="hora">Selecciona la hora:</label>
//       <select id="hora" value={hora} onChange={(e) => setHora(e.target.value)}>
//         <option value="">-- Selecciona una hora --</option>
//         {[...Array(24).keys()].map((hour) => (
//           <option key={hour} value={hour.toString().padStart(2, '0') + ':00'}>
//             {hour.toString().padStart(2, '0') + ':00'}
//           </option>
//         ))}
//       </select>

//       <button onClick={agregarUsuario}>Agregar Usuario</button>

//       <div className="user-list">
//         <h3>Lista de Usuarios:</h3>
//         {usuarios.map((user, index) => (
//           <div key={index} className="user-item">
//             Usuario: {user.usuario}, Turno: {user.turno}, Día: {user.dia}, Hora: {user.hora}
//             <button onClick={() => eliminarUsuario(index)}>Eliminar</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Formulario