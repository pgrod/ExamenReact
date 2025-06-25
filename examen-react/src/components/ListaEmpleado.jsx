const ListaEmpleado = ({ empleados }) => {
  
  if (!empleados || empleados.length === 0) {
    return (
      <div className="text-center mt-4">
        <p className="text-muted">No hay empleados registrados</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Dirección</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.nombre}</td>
              <td>{emp.dni}</td>
              <td>{emp.direccion}</td>
              <td>
                <a href={`mailto:${emp.email}`} className="text-decoration-none">
                  {emp.email}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaEmpleado;