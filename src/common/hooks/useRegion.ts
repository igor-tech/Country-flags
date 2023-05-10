import {Region} from 'common/components/Controls';
import {CountryOption} from 'common/components/CustomSelect';
import {useState} from 'react';
import {SingleValue} from 'react-select';

type onSelect = (reg: SingleValue<CountryOption>) => void

export const useRegion = (): [Region | '', onSelect] => {
  const [region, setRegion] = useState<Region | ''>('')

  const handleSelect: onSelect = reg => {
    if (reg) {
      setRegion(reg.value)
    } else {
      setRegion('')
    }
  }

  return [region, handleSelect]
}