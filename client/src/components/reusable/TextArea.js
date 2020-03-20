import React from "react";
import PropTypes from "prop-types";

const TextAreaGroup = ({ name, placeholder, value, info, onChange }) => {
  return (
    <div className="form-group">
      <small className="form-text text-muted text-left small ">{info}</small>
      <textarea
        className={"form-control form-control-lg textarea_common"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

TextAreaGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaGroup;