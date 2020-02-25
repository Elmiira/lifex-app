import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import MaterialTable from 'material-table';
import { columns, options } from './constants';
import messages from './messages';
import {
  fetchSupplies,
  addSupplies,
  updateSupplies,
  deleteSupplies,
} from 'api/suppliesServices';

export default function Supplies() {
  useEffect(() => {
    getSupplies(page, pageSize, query);
  }, []);

  const [state, setState] = useState({
    supplies: [],
    totalSupplies: 0,
  });
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(options.pageSize);
  const [query, setQuery] = useState({});

  const getSupplies = async (page, pageSize, query) => {
    try {
      const { supplies, totalSupplies } = await fetchSupplies({
        page,
        pageSize,
        query,
      });
      setState({ supplies, totalSupplies });
    } catch (error) { }
  };

  const changePage = newPage => {
    // *** Backend Pagination ***
    // getSupplies(newPage, pageSize, query);
    // setPage(newPage);
  };

  const changeRowPerPage = newPageSize => {
    // *** Backend Pagination ***
    // getSupplies(page, newPageSize, query);
    // setPageSize(newPageSize);
  };

  const searchChange = query => {
    //TODO:
    // *** generate Query for complex DB search ***
    // getSupplies(page, newPageSize, query);
    // setQuery(query);
  };

  //TODO: proper Msg with snackbar
  const validateSupplies = newSupplies => {
    const { inUse, std, stock } = newSupplies;
    if (inUse < 0 || std < 0 || stock < 0) {
      return false;
    }
    return true; 
  };

  return (
    <MaterialTable
      title={<FormattedMessage {...messages.TableTitle} />}
      columns={columns}
      data={state.supplies}
      paginationType={'stepped'}
      options={{
        selection: true,
        pageSize: options.pageSize,
        pageSizeOptions: options.pageSizeOptions,
      }}
      onChangeRowsPerPage={changeRowPerPage}
      onChangePage={changePage}
      onSearchChange={searchChange}
      editable={{
        onRowAdd: async newSupplies => {
          console.log('adding');
          const isSuppliesValid = validateSupplies(newSupplies);
          console.log(isSuppliesValid)
          if (isSuppliesValid){
            // mack to support db operations
            const id = state.totalSupplies + 1;
            const isActive = true;
            const res = await addSupplies({ ...newSupplies, id, isActive });
            if (res) {
              setState(prevState => {
                const supplies = [...prevState.supplies];
                supplies.push({ ...newSupplies, id });
                return { ...prevState, supplies };
              });
            } else {
              //TODO: use snackbar
              console.warn('Try again please!');
            }
          }
          //Otherwise user will be notified about the problem
        },
        onRowUpdate: async (newSupplies, oldSupplies) => {
          const { id } = oldSupplies;
          //TODO: validate the new input
          const res = await updateSupplies(id, newSupplies);
          if (res) {
            setState(prevState => {
              const supplies = [...prevState.supplies];
              const updatedIndex = supplies.findIndex(
                supply => supply.id === id,
              );
              supplies[updatedIndex] = newSupplies;
              return { ...prevState, supplies };
            });
          } else {
            //TODO: use snackbar
            console.warn('Try again please!');
          }
        },
        onRowDelete: async oldSupplies => {
          const { id } = oldSupplies;
          const res = await deleteSupplies(id);
          if (res) {
            setState(prevState => {
              const supplies = [...prevState.supplies];
              const updatedIndex = supplies.findIndex(
                supply => supply.id === id,
              );
              supplies.splice(updatedIndex, 1);
              return { ...prevState, supplies };
            });
          } else {
            //TODO: use snackbar
            console.warn('Try again please!');
          }
        },
      }}
    />
  );
}
