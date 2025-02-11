import React from "react";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  label,
  error
}) => {
  return (
    <div className="form-group">
      <p className="form-text text-left small text-muted">{label}</p>
      <input
        className="form-control form-control-lg input_common"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required
      />
      {error && <small className="form-error-text text-left">{error}</small>}
    </div>
  );
};

InputGroup.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;