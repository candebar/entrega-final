import './Formulario.css'
import React, { useState } from 'react';

function Formulario()  {
 
  const [usuario, setUsuario] = useState('');
  const [turno, setTurno] = useState('');
  const [dia, setDia] = useState('');
  const [hora, setHora] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const agregarUsuario = () => {
    if (usuario && turno && dia && hora) {
      setUsuarios([...usuarios, { usuario, turno, dia, hora }]);
      setUsuario('');
      setTurno('');
      setDia('');
      setHora('');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const eliminarUsuario = (index) => {
    const nuevosUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(nuevosUsuarios);
  };

  return (
    <div className="form-container">
      <h4>
      ¿Pintó un partidito a último momento?
      ¡Siempre estás a tiempo de reservar!
      </h4>
      <label htmlFor="usuario">Nombre de Usuario:</label>
      <input
        type="text"
        id="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Introduce tu nombre"
      />

      <label htmlFor="turno">Selecciona tu turno:</label>
      <select
        id="turno"
        value={turno}
        onChange={(e) => setTurno(e.target.value)}
      >
        <option value="">-- Selecciona un turno --</option>
        <option value="Mañana">Mañana</option>
        <option value="Tarde">Tarde</option>
        <option value="Noche">Noche</option>
      </select>

      <label htmlFor="dia">Selecciona el día:</label>
      <select id="dia" value={dia} onChange={(e) => setDia(e.target.value)}>
        <option value="">-- Selecciona un día --</option>
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miércoles">Miércoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
        <option value="Sábado">Sábado</option>
        <option value="Domingo">Domingo</option>
      </select>

      <label htmlFor="hora">Selecciona la hora:</label>
      <select id="hora" value={hora} onChange={(e) => setHora(e.target.value)}>
        <option value="">-- Selecciona una hora --</option>
        {[...Array(24).keys()].map((hour) => (
          <option key={hour} value={hour.toString().padStart(2, '0') + ':00'}>
            {hour.toString().padStart(2, '0') + ':00'}
          </option>
        ))}
      </select>

      <button onClick={agregarUsuario}>Agregar Usuario</button>

      <div className="user-list">
        <h3>Lista de Usuarios:</h3>
        {usuarios.map((user, index) => (
          <div key={index} className="user-item">
            Usuario: {user.usuario}, Turno: {user.turno}, Día: {user.dia}, Hora: {user.hora}
            <button onClick={() => eliminarUsuario(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Formulario