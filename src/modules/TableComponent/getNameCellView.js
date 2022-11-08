import * as Styled from './styles';

const getNameCellView = (cell, row) => {
    return (
      <Styled.CellContainer>
        <Styled.CellField>{ cell }</Styled.CellField>
          <Styled.GenreContainer>
            {row.genre.map((item) => {
              return <Styled.GenreField>{item}</Styled.GenreField>
            })}
          </Styled.GenreContainer>
        </Styled.CellContainer>
    );
  }

  export default getNameCellView;