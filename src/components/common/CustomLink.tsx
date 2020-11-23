import { useRouter } from 'next/router'
import { scroller } from 'react-scroll'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'

type Props = {
  linkClassName?: string
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const CustomLink: React.FC<Props> = ({
  linkClassName,
  href,
  children,
  onClick,
}) => {
  const router = useRouter()
  const { appState } = useContext(AppContext)

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    if (appState.isLoading) return

    if (onClick) onClick()

    if (router.pathname === href) {
      scroller.scrollTo('__next', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutCubic',
        offset: 0,
      })
      return
    }

    router.push(href)
  }

  return (
    <a className={linkClassName ?? ''} onClick={handleClick} href={href}>
      {children}
    </a>
  )
}

export { CustomLink }
