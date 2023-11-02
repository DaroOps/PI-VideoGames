import './InputField.modules.css'

const InputField = ({ label, type, name, value,error, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>
        <input type={type} name={name} value={value} onChange={onChange} />
            <span>{label}</span>
            <div className="input-error">
                <p>{error}</p>
            </div>
      </label>
        
    </div>
  );
};

export default InputField;