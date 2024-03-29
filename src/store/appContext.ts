import { createContext, Dispatch, useReducer } from 'react'
import { FormTmpData } from '~/types/Form'

type State = {
  count: number
  formTmpData: FormTmpData
  darkMode: boolean
  isLoading: boolean
  launch: boolean
  menu: {
    isOpen: boolean
    isAnim: boolean
  }
  worksModal: {
    isOpened: boolean
  }
}
const initialState: State = {
  count: 0,
  formTmpData: undefined,
  darkMode: false,
  isLoading: true,
  launch: false,
  menu: {
    isOpen: false,
    isAnim: false,
  },
  worksModal: {
    isOpened: false,
  },
}

type Action =
  | { type: 'SET_POST_DATA'; value: FormTmpData }
  | { type: 'REMOVE_POST_DATA' }
  | { type: 'SET_DARK_MODE'; value: boolean }
  | { type: 'SET_IS_LOADING'; value: boolean }
  | { type: 'OPEN_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'MENU_ANIM_ENDED' }
  | { type: 'SET_LAUNCH' }
  | { type: 'SET_WORK_MODAL_OPENED' }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_POST_DATA':
      return {
        ...state,
        formTmpData: {
          ...action.value,
        },
      }
    case 'REMOVE_POST_DATA':
      return {
        ...state,
        formTmpData: initialState.formTmpData,
      }
    case 'SET_DARK_MODE':
      return {
        ...state,
        darkMode: action.value,
      }
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.value,
      }
    case 'OPEN_MENU':
      return {
        ...state,
        menu: {
          ...state.menu,
          isAnim: true,
          isOpen: true,
        },
      }
    case 'CLOSE_MENU':
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpen: false,
          isAnim: true,
        },
      }
    case 'MENU_ANIM_ENDED':
      return {
        ...state,
        menu: {
          ...state.menu,
          isAnim: false,
        },
      }
    case 'SET_LAUNCH':
      return {
        ...state,
        launch: true,
      }
    case 'SET_WORK_MODAL_OPENED':
      return {
        ...state,
        worksModal: {
          isOpened: true,
        },
      }
    default:
      return state
  }
}

export const AppContext = createContext(
  {} as {
    appState: State
    appDispatch: Dispatch<Action>
  },
)

export const useAppReducer = (): [State, Dispatch<Action>] =>
  useReducer(reducer, initialState)
