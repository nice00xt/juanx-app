import {
    FETCH_MESSAGES,
    GET_MESSAGES,
    UPDATE_MESSAGES
  } from '../constants';
  import { camelizeKeys, decamelizeKeys } from 'humps';
  import { get, patch } from '../libs/http';
  import { alert } from '../components/alert'

  export const fecthUsers = () => {
    return {
      type: FETCH_MESSAGES,
      payload: get(`/messages`)
        .then(res => camelizeKeys(res))
        .catch(err => { alert(err); })
    };
  };

  export const getUser = (id) => {
    return {
      type: GET_MESSAGES,
      payload: get(`/messages/${id}`)
        .then(res => camelizeKeys(res))
        .catch(err => { alert(err); })
    };
  };

  export const updateUser = (obj) => {
    const data = decamelizeKeys(obj);

    return {
      type: UPDATE_MESSAGES,
      payload: patch(`/messages/${id}`, { data })
        .then(res => camelizeKeys(res))
        .catch(err => { alert(err); })
    };
  };