import {
    FETCH_USERS,
    GET_USER,
    UPDATE_USER
  } from '../constants';
  import { camelizeKeys, decamelizeKeys } from 'humps';
  import { get, patch } from '../libs/http';
  import { alert } from '../components/alert'

  export const fecthUsers = () => {
    return {
      type: FETCH_USERS,
      payload: get(`/users`)
        .then(res => camelizeKeys(res))
        .catch(err => { alert(err); })
    };
  };

  export const getUser = (id) => {
    return {
      type: GET_USER,
      payload: get(`/user/${id}`)
        .then(res => camelizeKeys(res))
        .catch(err => { alert(err); })
    };
  };

  export const updateUser = (obj) => {
    const data = decamelizeKeys(obj);

    return {
      type: UPDATE_USER,
      payload: patch(`/user/${id}`, { data })
        .then(res => camelizeKeys(res))
        .catch(err => { alert(err); })
    };
  };