import './RadioButton.modules.css'

const RadioButton = ({ id, label, handleChange, selectedOption }) => {
    return (
      <div className="radio-button">
        <input
          type="radio"
          className="radio-button__input"
          id={id}
          name="radio-group"
          checked={selectedOption === id}
          onChange={() => handleChange(id)}
        />
        <label className="radio-button__label" htmlFor={id}>
          <span className="radio-button__custom"></span>
          {label}
        </label>
      </div>
    );
  };

export default RadioButton