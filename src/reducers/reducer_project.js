import { FETCH_PROJECT, UPDATE_TODO, FETCH_TODO, CREATE_TODO, DELETE_TODO, UNAUTH_USER, CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_PROJECT:
    return { ...action.payload, activeTodoId: '' }
  case CREATE_PROJECT:
    return { ...action.payload, activeTodoId: '' }
  case UPDATE_PROJECT:
    return { ...action.payload, activeTodoId: state.activeTodoId }
  case DELETE_PROJECT:
    return {}
  case CREATE_TODO:
    return { ...action.payload, activeTodoId: state.activeTodoId }
  case UPDATE_TODO:
    return { ...action.payload, activeTodoId: state.activeTodoId }
  case DELETE_TODO:
    return { ...action.payload, activeTodoId: '' }
  case FETCH_TODO:
    return { ...state, activeTodoId: action.payload }
  case UNAUTH_USER:
    return {}
  default:
    return state;
  }
}
