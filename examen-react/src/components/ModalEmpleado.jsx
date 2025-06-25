const ModalEmpleado = ({ empleado, setEmpleado, guardarEmpleado }) => {

  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal fade" id="modalEmpleado" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Agregar Empleado</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <input type="text" className="form-control mb-2" name="nombre" value={empleado.nombre} onChange={handleChange} placeholder="Nombre" />
            <input type="text" className="form-control mb-2" name="dni" value={empleado.dni} onChange={handleChange} placeholder="DNI" />
            <input type="text" className="form-control mb-2" name="direccion" value={empleado.direccion} onChange={handleChange} placeholder="Dirección" />
            <input type="email" className="form-control mb-2" name="email" value={empleado.email} onChange={handleChange} placeholder="Email" />
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" onClick={guardarEmpleado}>Guardar</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalEmpleado;