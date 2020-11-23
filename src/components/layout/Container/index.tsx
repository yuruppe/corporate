import { useAppReducer, AppContext } from '~/store/appContext'
import { ContextDevTool } from 'react-context-devtool'
import { Layout } from './Layout'
import { Loading } from './Loading'

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  const [appState, appDispatch] = useAppReducer()

  return (
    <>
      <AppContext.Provider value={{ appState, appDispatch }}>
        {process.env.NODE_ENV === 'development' ? (
          <ContextDevTool
            context={AppContext}
            id="AppContext"
            displayName="App Context"
          />
        ) : null}
        <Loading />
        <Layout>{children}</Layout>
      </AppContext.Provider>
    </>
  )
}

export { Container }
