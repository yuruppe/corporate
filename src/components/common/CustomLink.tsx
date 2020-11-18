import { useRouter } from 'next/router'
import { scroller } from 'react-scroll'
import gsap from 'gsap'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'

// import cn from 'classnames'

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
  const { appState, appDispatch } = useContext(AppContext)

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    if (appState.isLoading) return

    if (onClick) {
      onClick()
    }
    if (router.pathname === href) {
      scroller.scrollTo('__next', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutCubic',
        offset: 0,
      })
      return
    }

    // loading : true

    // loading anim start
    // callback :
    // scroll to 0
    // router push
    // - end
    gsap.to('#page_wrap', {
      opacity: 0,
      onComplete: () => {
        window.scrollTo(0, 0)
        appDispatch({ type: 'SET_IS_LOADING', value: true })
        router.push(href)
      },
    })
  }

  return (
    <a className={linkClassName ?? ''} onClick={handleClick} href={href}>
      {children}
    </a>
  )
}

export { CustomLink }
