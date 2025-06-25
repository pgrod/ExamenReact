import { useState, useEffect } from 'react';
import axios from 'axios';
import ListaEmpleado from './components/ListaEmpleado';
import ModalEmpleado from './components/ModalEmpleado';
import Swal from 'sweetalert2';

const App = () => {
  const [empleados, setEmpleados] = useState([]);
  const [empleado, setEmpleado] = useState({
    nombre: '',
    dni: '',
    direccion: '',
    email: ''
  });

  const API_URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';

  const obtenerEmpleados = async () => {
    try {
      const res = await axios.get(API_URL);
      setEmpleados(res.data);
    } catch (error) {
      Swal.fire('Error', 'No se pudo obtener la lista de empleados', 'error');
    }
  };

  const guardarEmpleado = async () => {
    if (!empleado.nombre || !empleado.dni || !empleado.direccion || !empleado.email) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return;
    }

    try {
      await axios.post(API_URL, empleado);
      Swal.fire('Éxito', 'Empleado guardado correctamente', 'success');
      
      limpiarFormulario();
      obtenerEmpleados();
      cerrarModal();
    } catch (error) {
      Swal.fire('Error', 'No se pudo guardar el empleado', 'error');
    }
  };

  const limpiarFormulario = () => {
    setEmpleado({ nombre: '', dni: '', direccion: '', email: '' });
  };

  const cerrarModal = () => {
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalEmpleado'));
    if (modal) {
      modal.hide();
    }
  };

  const abrirModalAgregar = () => {
    limpiarFormulario();
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mb-4">
            <i className="fas fa-users"></i> Gestión de Empleados
          </h1>
          
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Lista de Empleados ({empleados.length})</h3>
            <button 
              className="btn btn-success" 
              data-bs-toggle="modal" 
              data-bs-target="#modalEmpleado"
              onClick={abrirModalAgregar}
            >
              <i className="fas fa-plus"></i> Agregar Empleado
            </button>
          </div>

          <ListaEmpleado empleados={empleados} />

          <ModalEmpleado 
            empleado={empleado} 
            setEmpleado={setEmpleado} 
            guardarEmpleado={guardarEmpleado}
          />
        </div>
      </div>
    </div>
  );
};

export default App;