import { AppContext } from '~/store/appContext'
import style from '~/styles/components/layout/Layout.module.scss'
import { useContext } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { appState } = useContext(AppContext)

  return (
    <>
      <div className={cn(style.wrap, { [style.dark]: appState.darkMode })}>
        {children}
      </div>
    </>
  )
}

export { Layout }
