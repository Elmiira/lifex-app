import config from 'config';

export const AUTH_USER_API = `${config.backendBasURL.concat('/auth/login')}`;

export const FETCH_Supplies_API = (page, pageSize) =>
  `${config.backendBasURL.concat(
    '/supplies/search',
  )}?page=${page}&pageSize=${pageSize}`;

export const ADD_Supplies_API = config.backendBasURL.concat('/supplies');

export const UPDATE_Supplies_API = suppliesId =>
  `${config.backendBasURL.concat('/supplies/')}${suppliesId}`;

export const DELETE_Supplies_API = suppliesId =>
  `${config.backendBasURL.concat('/supplies/')}${suppliesId}`;
