import React, { InputHTMLAttributes } from "react";
import { ActionMeta, GetOptionLabel, GetOptionValue, InputActionMeta, Options } from "react-select";
export interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  value?: string;
  error?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  id?: string;
}

export interface SelectDropDownProps {
  label?: string;
  options: Option[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getOptionLabel?: GetOptionLabel<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getOptionValue?: GetOptionValue<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeHandler: (newValue: Option, actionMeta?: ActionMeta<any>) => void;
  inputChangeHandler?: (newValue: string, actionMeta: InputActionMeta) => void;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  errorMsg?: string;
  isMulti?: boolean;
  isOptionDisabled?: (option: Option, selectValue: Options<Option>) => boolean;
  value?: Option | null;
  isSelectAll?: boolean;
  isOptional?: boolean;
  isDisabled?: boolean;
  isLabel?: boolean;
  required?: boolean;
}

export interface Option {
  id: string;
  name: string;
}