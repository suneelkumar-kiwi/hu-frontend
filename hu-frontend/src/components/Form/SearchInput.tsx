import React, { memo, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Search } from "@/assets/icons/Icons";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = '',
  value = '',
  onChange,
  className = '',
  readOnly = false,
//   autoFocus = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (autoFocus && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [autoFocus]);

  return (
    <div className={`form-group search-box ${className}`}>
      <Form.Control
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
      />
      <span className="search-icon">
        <Search />
      </span>
    </div>
  );
};
export default memo(SearchInput);
