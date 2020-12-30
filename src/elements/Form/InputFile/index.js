import React, {useRef, useState} from 'react'

import propType from 'prop-types';

import './index.scss';
export default function InputFile(props) {

  const [Filename, setFilename] = useState("")

  const {
    accept,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);
  const onChange = (event) => {
    setFilename(event.target.value)
    props.onChange({
      target: {
        name: event.target.name,
        value: event.target.files
      }
    })
  }

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">
              {prepend}
            </span>
          </div>
        )}
        <input 
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={Filename}
          onChange={onChange}
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={Filename}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>

    </div>
  )

  
}

InputFile.defaultProps = {
  placeholder: "Browse a file...",
};

InputFile.propType = {
  name: propType.string.isRequired,
  accept: propType.string.isRequired,
  value: propType.string.isRequired,
  onChange: propType.func.isRequired,
  prepend: propType.oneOfType([propType.number, propType.string]),
  append: propType.oneOfType([propType.number, propType.string]),
  placeholder: propType.string,
  outerClassName: propType.string,
  inputClassName: propType.string,
};