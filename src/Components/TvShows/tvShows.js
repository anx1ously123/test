import React, { useState } from 'react'
import BootstrapTableComponent from '../../modules/TableComponent/BootStrapTable';
import DropDownFilter from '../../ui-kit/DropDown/dropDown';
import {TV_SHOWS} from '../../constants'
import * as Styled from './styles'

const TvSHows = () => {
  const [tvShows, setTvShows] = useState(TV_SHOWS);

  const selectOptions = (dataField) => {
    const options = TV_SHOWS.map((item) =>  Array.isArray(item[dataField]) ? [...item[dataField]] : item[dataField] );
    const filteredOptions = options.flat().filter((v, i, a) => a.indexOf(v) === i);
    return filteredOptions.map((item) => {return {value: item, label: item }})
  };

  const handleChangePremiere = (item) => {
    if (item === null) return setTvShows(TV_SHOWS);
    setTvShows(TV_SHOWS.filter((elem) => elem['premiere'] === item.value));
  };

  const handleChangeGenre = (item) => {
    if (item === null) return setTvShows(TV_SHOWS);
    setTvShows(TV_SHOWS.filter((elem) => elem['genre'].includes(item.value)));
  };

  return (
    <Styled.Container>
        <Styled.FilterContainer>
            <Styled.FilterDropContainer>
                <h3>Select premiere</h3>
                <DropDownFilter options={selectOptions('premiere')} handleChange={handleChangePremiere} />
            </Styled.FilterDropContainer>
            <Styled.FilterDropContainer> 
                <h3>Select genre</h3>
                <DropDownFilter options={selectOptions('genre')} handleChange={handleChangeGenre} />
            </Styled.FilterDropContainer>
        </Styled.FilterContainer>
        <BootstrapTableComponent data={tvShows} />
    </Styled.Container>
  );
}

export default TvSHows;
