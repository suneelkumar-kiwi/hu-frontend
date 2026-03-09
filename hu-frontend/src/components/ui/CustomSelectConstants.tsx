
export const customSelectStyles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  option: (_provided: any, { isFocused }: any) => ({
    color: isFocused ? '#061058' : '#8287ab',
    padding: '14px 19px',
    fontSize: '13px',
    cursor: 'pointer',
    margin: 0,
    borderRadius: '2px',
    fontWeight: isFocused ? '500' : '400',
    background: isFocused ? '#f5f6fa' : '#ffffff',
  }),
  menu: () => ({
    border: '0',
    width: '100%',
    borderRadius: '10px',
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  singleValue: (provided: any, { isDisabled }: any) => {
    const opacity = isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};
