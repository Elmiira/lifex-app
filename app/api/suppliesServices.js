import request from 'utils/request';
import {
  FETCH_SUPPLIERS_API,
  UPDATE_SUPPLIERS_API,
  ADD_SUPPLIERS_API,
  DELETE_SUPPLIERS_API,
} from './apiAddresses';

export function fetchSupplies({ page, pageSize, query }) {
  const url = FETCH_SUPPLIERS_API(page, pageSize);
  return request({
    method: 'POST',
    url: url,
    data: {
      query,
    },
  });
}

export function addSupplies(newSupplies) {
  return request({
    method: 'POST',
    url: ADD_SUPPLIERS_API,
    data: {
      ...newSupplies,
    },
  });
}

export function updateSupplies(supplyId, newSupplies) {
  const url = UPDATE_SUPPLIERS_API(supplyId);
  return request({
    method: 'PUT',
    url: url,
    data: {
      ...newSupplies,
    },
  });
}

export function deleteSupplies(supplyId) {
  const url = DELETE_SUPPLIERS_API(supplyId);
  return request({
    method: 'DELETE',
    url: url,
  });
}
