import {CustomSelect} from 'common/components/CustomSelect';
import {Search} from 'common/components/Search';
import {useRegion} from 'common/hooks/useRegion';
import React, {useState} from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania'
type RegionOption = {
  [RegKey in Region]: { value: RegKey; label: RegKey }
}


const optionsMap: RegionOption = {
  Africa: {value: 'Africa', label: 'Africa'},
  America: {value: 'America', label: 'America'},
  Asia: {value: 'Asia', label: 'Asia'},
  Europe: {value: 'Europe', label: 'Europe'},
  Oceania: {value: 'Oceania', label: 'Oceania'},
}
const options = Object.values(optionsMap)

export const Controls = () => {
  const [search, setSearch] = useState('')
  const [region, handleSelect] = useRegion()
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch}/>
      <CustomSelect
        options={options}
        placeholder={'Filter by Region'}
        isClearable
        isSearchable={false}
        value={region ? optionsMap[region] : ''}
        onChange={handleSelect}
      />
    </Wrapper>
  );
};

