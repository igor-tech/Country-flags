import {Region} from 'common/types';
import styled from 'styled-components'
import Select, {Props} from 'react-select'
import React from 'react';

export type CountryOption =
  | {
  label: Region
  value: Region
}
  | ''


function MySelect(props: Props<CountryOption, false>) {
  return <Select {...props} />
}

export const CustomSelect = styled(MySelect).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--color-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--color-bg)' :  'var(--color-ui-base)',
    }),
  }
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }
  
  & > div[id] {
    background-color: var(--color-ui-base);
  }
`
