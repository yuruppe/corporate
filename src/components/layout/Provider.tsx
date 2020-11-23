import { AppContext, useAppReducer } from '~/store/appContext'
import { ContextDevTool } from 'react-context-devtool'

import { useContext } from 'react'
import cn from 'classnames'
import { css } from '@emotion/react'
import style from '~/styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { appState } = useContext(AppContext)

  return (
    <>
      <div css={wrap} className={cn({ dark: appState.darkMode })}>
        {children}
      </div>
    </>
  )
}

const wrap = css`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: ${style.colors.lightBlue};
  padding: 116px 0 0;
  transition: background-color 0.3s ease-in-out;
  &.dark {
    background-color: ${style.colors.blogBack};
  }
  ${style.pc(css`
    padding: 162px 0 0;
  `)}
`

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
