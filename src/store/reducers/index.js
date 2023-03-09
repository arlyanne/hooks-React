import numberReducer from './number'
import userReducer from './user'

export default function allReducers(state, action) {
      let newState = numberReducer(state, action)
      return userReducer(newState, action)
}