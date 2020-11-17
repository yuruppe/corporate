import { AppContext, useAppReducer } from '~/store/appContext'
import { ContextDevTool } from 'react-context-devtool'

import style from '~/styles/components/layout/Layout.module.scss'
import { useContext } from 'react'
import cn from 'classnames'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { appState } = useContext(AppContext)

  return (
    <>
      <div className={cn(style.wrap, { [style.dark]: appState.darkMode })}>
        {children}
      </div>
    </>
  )
}

type Props = {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
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
        <Layout>{children}</Layout>
      </AppContext.Provider>
    </>
  )
}

export { Provider }
