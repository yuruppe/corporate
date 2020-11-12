import { AppContext, useAppReducer } from '~/store/appContext'
import { ContextDevTool } from 'react-context-devtool'

type Props = {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
  const [appState, appDispatch] = useAppReducer()

  return (
    <>
      <AppContext.Provider value={{ appState, appDispatch }}>
        <ContextDevTool
          context={AppContext}
          id="AppContext"
          displayName="App Context"
        />
        {children}
      </AppContext.Provider>
    </>
  )
}

export { Provider }
