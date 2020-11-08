import { createContext, Dispatch, useReducer } from 'react'
import { FormTmpData } from '~/types/Form'

type State = {
  count: number
  formTmpData: FormTmpData
}
const initialState: State = {
  count: 0,
  formTmpData: undefined
}

type Action =
  | { type: 'SET_POST_DATA'; value: FormTmpData }
  | { type: 'REMOVE_POST_DATA' }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_POST_DATA':
      return {
        ...state,
        formTmpData: {
          ...action.value
        }
      }
    case 'REMOVE_POST_DATA':
      return {
        ...state,
        formTmpData: initialState.formTmpData
      }
    default:
      return state
  }
}

export const AppContext = createContext(
  {} as {
    appState: State
    appDispatch: Dispatch<Action>
  }
)

export const useAppReducer = (): [State, Dispatch<Action>] =>
  useReducer(reducer, initialState)
