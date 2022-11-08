import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { COLUMNS } from '../../constants';

const { SearchBar } = Search;

  const BootstrapTableComponent = ({data}) => {
    return (
      <ToolkitProvider
      keyField="id"
      data={ data }
      columns={ COLUMNS }
      pagination={ paginationFactory() }
      search
    >
      {
        props => (
          <div>
            <h3>Search by name:</h3>
            <SearchBar { ...props.searchProps } />
            <BootstrapTable
              { ...props.baseProps }
            />
          </div>
        )
      }
    </ToolkitProvider>
  )}

export default BootstrapTableComponent;

