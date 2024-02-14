import { FETCHUSERS, FETCHSUCCESS, FETCHFAILURE } from "./ActionType"

const initialState = {
  loading: true,
  data: [],
  error: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHUSERS:
      return { ...state }
    case FETCHSUCCESS:
      return { loading: false, data: action.payload, error: false }
    case FETCHFAILURE:
      return { loading: false, data: [], error: action.payload }
    default:
      return state
  }
}
