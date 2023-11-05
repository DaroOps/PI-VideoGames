import './InputArea.modules.css';

const InputArea = ({ label, type, name, value, error, onChange }) => {
  const validValue = !value ? 'empty' : error ? 'invalid' : 'valid';

  
  return (
    <div className="input-area">
      <label htmlFor={name}>
        <textarea className={`input-area-cc ${validValue}`} type={type} name={name} value={value} onChange={onChange}/>
          <span>{label}</span>
      </label>
    </div>
  );
};

export default InputArea;
