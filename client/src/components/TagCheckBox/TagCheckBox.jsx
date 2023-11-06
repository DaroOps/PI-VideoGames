import './TagCheckBox.modules.css'

const TagCheckBox = ({name, value, onChange , checked = null}) => {

    return (

        <>
            <input type="checkbox" id={value} className="customCheckBoxInput" value={value} onChange={onChange} name={name} checked={checked}/>
            <label htmlFor={value} className="customCheckBoxWrapper">
                <div className="customCheckBox">
                    <div className="inner-checkbox">  {value}  </div>
                </div>
            </label>
        </>
    );
}

export default TagCheckBox