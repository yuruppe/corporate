import { AppContext, useAppReducer } from '~/store/appContext'
import style from '~/styles/components/layout/Layout.module.scss'
import { ContextDevTool } from 'react-context-devtool'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const [appState, appDispatch] = useAppReducer()

  return (
    <>
      <AppContext.Provider value={{ appState, appDispatch }}>
        <ContextDevTool
          context={AppContext}
          id="AppContext"
          displayName="App Context"
        />
        <div className={style.wrap}>{children}</div>
      </AppContext.Provider>
    </>
  )
}

export { Layout }
