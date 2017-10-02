import axios from 'axios';

const initialState = {
  todo: []
}

const PENDING = '_PENDING';
const FULFILLED = '_FULFILLED';
const REJECTED = '_REJECTED';

const GETTASKS = 'GETTASKS';
const ADDTASK = 'ADDTASK';
const TOGGLECOMPLETE = 'TOGGLECOMPLETE';
const DELETETASK = 'DELETETASK';
const FILTERTASKS = 'FILTERTASKS';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GETTASKS + FULFILLED:
      console.log('gettasks payload', action.payload);
      return Object.assign({}, state, {todo: action.payload});
    case ADDTASK + FULFILLED:
      console.log('addtask payload', action.payload);
      return Object.assign({}, state, {todo: action.payload}); 
    case TOGGLECOMPLETE + FULFILLED:
      console.log('togglecomplete payload', action.payload);
      return Object.assign({}, state, {todo: action.payload});
    case DELETETASK + FULFILLED:
      console.log('deletetask payload', action.payload);
      return Object.assign({}, state, {todo: action.payload});
    case FILTERTASKS + FULFILLED:
      console.log('filtertasks payload', action.payload);
      return Object.assign({}, state, {todo: action.payload});
    default:
      return state
  }
}

export function getTasks(priority) {
  return priority 
  ?
    {
      type: GETTASKS,
      payload: axios.get(`/api/todo?priority=${priority}`).then(res => res.data)
    }
  :
    {
      type: GETTASKS,
      payload: axios.get('/api/todo').then(res => res.data)
    }
}

export function addTask(text, priority) {
  return {
    type: ADDTASK,
    payload: axios.post('/api/add-task', {name: text, priority}).then(res => res.data)
  }
}

export function toggleComplete(id) {
  return {
    type: TOGGLECOMPLETE,
    payload: axios.put(`/api/toggle-complete/${id}`).then(res => res.data)
  }
}

export function deleteTask(id) {
  return {
    type: DELETETASK,
    payload: axios.delete(`/api/delete-task/${id}`).then(res => res.data)
  }
}
