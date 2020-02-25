import request from 'utils/request';
import {
  FETCH_Supplies_API,
  UPDATE_Supplies_API,
  ADD_Supplies_API,
  DELETE_Supplies_API,
  DAWA_API,
  DAWA_ADDRESS_API,
} from './apiAddresses';

export function fetchSupplies({ page, pageSize, query }) {
  const url = FETCH_Supplies_API(page, pageSize);
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
    url: ADD_Supplies_API,
    data: {
      ...newSupplies,
    },
  });
}

export function updateSupplies(supplyId, newSupplies) {
  const url = UPDATE_Supplies_API(supplyId);
  return request({
    method: 'PUT',
    url: url,
    data: {
      ...newSupplies,
    },
  });
}

export function deleteSupplies(supplyId) {
  const url = DELETE_Supplies_API(supplyId);
  return request({
    method: 'DELETE',
    url: url,
  });
}
