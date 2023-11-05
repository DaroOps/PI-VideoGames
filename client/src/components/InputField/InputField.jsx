import './InputField.modules.css';

const InputField = ({ label, type, name, value, error, onChange }) => {
  const validValue = !value ? 'empty' : error ? 'invalid' : 'valid';



  const handleFocus = (event) => {
    if (type === 'date') {
      event.target.type = 'date';
    }
  };

  const handleBlur = (event) => {
    if (type === 'date') {
      event.target.type = 'text';
    }
  };

  const handleLoad = (event) => {
    if (type === 'date') {
      event.target.type = 'text';
    }
    event.target.type = 'text';
  }

  return (
    <div className="input-field">
      <label htmlFor={name}>
        <input className={`input-cc ${validValue}`}

          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onLoad={handleLoad}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default InputField;
