const DefaultInputClassName = {
  select: "form-select",
  checkbox: "form-check-input",
  text: "form-control",
};

const Input = ({
  id,
  input,
  label,
  type,
  meta,
  className,
  isOptional,
  labelClass,
  inputClass,
  placeholder,
  ...props
}) => {
  const { touched, error } = meta || {};
  const inputProps = {
    ...input,
    ...props,
    id,
    className: inputClass || DefaultInputClassName[type] || "form-control",
    type,
    placeholder: placeholder || label,
  };
  const inputElement =
    type === "select" ? <select {...inputProps} /> : <input {...inputProps} />;

  return (
    <div className={className}>
      <label
        {...(labelClass ? { className: labelClass } : {})}
        {...(id ? { htmlFor: id } : [])}
      >
        {label}
        {isOptional && <span className="text-muted"> (Optional)</span>}
      </label>
      {inputElement}
      {touched && error && (
        <span className="text-danger mt-1 d-block">{error}</span>
      )}
    </div>
  );
};

export default Input;
