import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { default as Select, ActionMeta } from 'react-select';
import { SelectDropDownProps } from "@/interfaces/form.interface";
import { customSelectStyles } from "../shared/CustomSelectConstants";
import base from "react-select/base";

const FloatingSelect = (props: SelectDropDownProps) => {
  const {
    label,
    options,
    isClearable = false,
    isSearchable = true,
    placeholder,
    errorMsg,
    value,
    changeHandler,
    isDisabled,
    required = false,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (selected: any, _actionMeta: ActionMeta<any>) => {
    return changeHandler(selected);
  };

  return (
    <Form.Group
      className="floating-label custom-react-select"
      controlId={label}
    >
      <Select
        {...props}
        value={value}
        // styles={customSelectStyles}
        className={`react-select react-select-container ${errorMsg ? 'select-error' : ''
          }`}
        classNamePrefix="react-select"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        options={options}
        placeholder={placeholder}
        id="SelectSite"
        tabSelectsValue={false}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isDisabled={isDisabled}
        aria-invalid={errorMsg ? 'true' : 'false'}
        menuPortalTarget={document.body}
        menuPosition="fixed"
        // menuIsOpen
        styles={{
          ...customSelectStyles,
          menuPortal: base => ({ ...base, zIndex: 9999 })
        }}
        noOptionsMessage={() => <p>No result found!</p>}
      />
      <Form.Label
        className={`required react-select-label ${value || isFocused ? 'selected' : ''
          }`}
      >
        {label}
        {required && <em className="required-field">*</em>}
      </Form.Label>
      {errorMsg && (
        <Form.Control.Feedback type="invalid">{errorMsg}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default FloatingSelect;
