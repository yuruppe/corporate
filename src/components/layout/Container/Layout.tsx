import { css } from '@emotion/react'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import cn from 'classnames'
import style from '~/styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { appState } = useContext(AppContext)

  return (
    <div
      css={wrap}
      className={cn({ dark: appState.darkMode })}
      style={{ opacity: 0 }}
      id="root"
    >
      {children}
    </div>
  )
}

const wrap = css`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: ${style.colors.lightBlue};
  padding: 116px 0 0;
  transition: background-color 0.3s ease-in-out 0.5s;
  &.dark {
    background-color: ${style.colors.blogBack};
  }
  ${style.pc(css`
    padding: 162px 0 0;
  `)}
`

export { Layout }
