import { useEffectOnce } from '~/hooks/useEffectOnce'
import gsap from 'gsap'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'

type Props = {
  children: React.ReactNode
}

const PageInner: React.FC<Props> = ({ children }) => {
  const { appDispatch } = useContext(AppContext)
  // useEffectOnce(() => {
  //   gsap.to('#page_wrap', {
  //     opacity: 1,
  //     onComplete: () => {
  //       appDispatch({ type: 'SET_IS_LOADING', value: false })
  //     },
  //   })
  // })
  useEffect(() => {
    window.scrollTo(0, 0)
    appDispatch({ type: 'SET_IS_LOADING', value: false })
    return (): void => {
      appDispatch({ type: 'SET_IS_LOADING', value: true })
    }
  }, [])
  return <main id="page_inner">{children}</main>
}

export { PageInner }
