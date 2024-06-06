import { StylesConfig } from "react-select";
import chroma from 'chroma-js'

export const customSelectStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      border: '1.5px solid black',
      fontFamily: '"articulat-cf", sans-serif',
      fontWeight: 600,
      fontSize: '20px',
      transitionDuration: '0.3s',
      color: 'black',
      borderRadius: '0',
      minWidth: '250px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      border: '1.5px solid black',
      borderRadius: '0',
      zIndex: 19,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'black' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      },
      fontFamily: '"articulat-cf", sans-serif',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    menuList: (provided) => ({
      ...provided,
      fontFamily: '"articulat-cf", sans-serif',
    }),
};

export const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 15,
    width: 15,
  },
});

export const colourStyles: StylesConfig = {
  control: (styles) => ({ 
    ...styles, 
    backgroundColor: 'white',
    borderRadius: '0',
    border: '1.5px solid black',
    fontFamily: '"articulat-cf", sans-serif',
    fontWeight: 600,
    fontSize: '20px',
    transitionDuration: '0.3s',
    maxWidth: '70px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    border: '1.5px solid black',
    borderRadius: '0',
    maxWidth: '70px',
    zIndex: 20,
    overflowX: 'hidden'
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      ...dot(data.color),
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? color.alpha(0.3).css()
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: 'transparent',
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  singleValue: (styles, { data }) => {
    return { 
      ...styles, 
      ...dot(data.color),
      color: 'transparent',
    }
  },
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  input: (provided) => ({
    ...provided,
    color: 'transparent',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'transparent',
  })
};

export const colourOptions = [
  { value: 'black', label: 'bl', color: '#000000' },
  { value: 'light-blue', label: 'lb', color: '#58B4EE' },
  { value: 'dark-blue', label: 'bu', color: '#0E8BC4' },
  { value: 'green', label: 'pu', color: '#ABCE30' },
  { value: 'yellow', label: 'ye', color: '#F7ED37' },
  { value: 'orange', label: 'or', color: '#FD8D04' },
  { value: 'red', label: 're', color: '#FA1A0D' },
];