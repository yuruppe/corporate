import { AppContext, useAppReducer } from '~/store/appContext'
import style from '~/styles/components/layout/Layout.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const [appState, appDispatch] = useAppReducer()

  return (
    <>
      <AppContext.Provider value={{ appState, appDispatch }}>
        <div className={style.wrap}>{children}</div>
      </AppContext.Provider>
    </>
  )
}

export { Layout }
