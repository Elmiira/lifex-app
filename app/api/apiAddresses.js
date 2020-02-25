import config from 'config';

export const AUTH_USER_API = `${config.backendBasURL.concat('/auth/login')}`;

export const FETCH_SUPPLIERS_API = (page, pageSize) =>
  `${config.backendBasURL.concat(
    '/supplies/search',
  )}?page=${page}&pageSize=${pageSize}`;

export const ADD_SUPPLIERS_API = config.backendBasURL.concat('/supplies');

export const UPDATE_SUPPLIERS_API = suppliesId =>
  `${config.backendBasURL.concat('/supplies/')}${suppliesId}`;

export const DELETE_SUPPLIERS_API = suppliesId =>
  `${config.backendBasURL.concat('/supplies/')}${suppliesId}`;
