import { fetchusers, fetchsuccess, fetchfailure } from "./Action"

const initialState = {
  loading: true,
  data: [],
  error: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchusers: {
      return {
        ...state,
      }
    }
    case fetchsuccess: {
      return {
        loading: false,
        data: action.paylod,
        error: false,
      }
    }
    case fetchfailure: {
      return {
        loading: false,
        data: [],
        err: action.payload,
      }
    }
  }
}
