const Entrada = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  error,
  name,
  disabled = false 
}) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">
        {label} 
        {required && <span className="text-danger ms-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {error && (
        <div className="invalid-feedback">
          <i className="fas fa-exclamation-circle me-1"></i>
          {error}
        </div>
      )}
    </div>
  );
};

export default Entrada;
