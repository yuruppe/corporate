import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { AppContext } from '~/store/appContext'

type Props = {
  children: React.ReactNode
}

const ContentWrap: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const { appDispatch } = useContext(AppContext)

  useEffectOnce(() => {
    router.events.on('routeChangeStart', () => {
      appDispatch({ type: 'SET_IS_LOADING', value: true })
    })
  })

  const onComplete = (): void => {
    // 遷移終了時
    window.scrollTo(0, 0)
    appDispatch({ type: 'SET_IS_LOADING', value: false })
  }

  return (
    <div id="page_wrap">
      <AnimatePresence exitBeforeEnter onExitComplete={onComplete}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={router.asPath}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export { ContentWrap }
