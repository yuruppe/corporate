import { useEffectOnce } from '~/hooks/useEffectOnce'
import gsap from 'gsap'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'

type Props = {
  children: React.ReactNode
}

const PageInner: React.FC<Props> = ({ children }) => {
  const { appDispatch } = useContext(AppContext)
  useEffectOnce(() => {
    gsap.to('#page_wrap', {
      opacity: 1,
      onComplete: () => {
        appDispatch({ type: 'SET_IS_LOADING', value: false })
      },
    })
  })
  return <main id="page_inner">{children}</main>
}

export { PageInner }
