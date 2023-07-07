import { SET_USER_NAME, SET_USER_ROLE } from "./actionTypes"

const userInitialState = { name: '', role: '' }

const user = function (state = userInitialState, action) {
  switch (action.type) {
    case SET_USER_ROLE:
      return { ...state, role: action.payload }
    case SET_USER_NAME:
      return { ...state, name: action.payload }
    default:
      return state
  }
}

export default user