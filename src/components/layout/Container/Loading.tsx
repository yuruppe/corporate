import { css } from '@emotion/react'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'
import style from '~/styles'
import cn from 'classnames'
import { useRouter } from 'next/router'

const Loading: React.FC = () => {
  const router = useRouter()
  const { appState, appDispatch } = useContext(AppContext)

  useEffect(() => {
    if (!appState.launch) {
      // on launch process
      launchAnim(() => {
        appDispatch({ type: 'SET_LAUNCH' })
        appDispatch({ type: 'SET_IS_LOADING', value: false })
      })
      return
    }
    if (appState.isLoading) {
      // routeing start
      routeAnim(() => {
        appDispatch({ type: 'SET_IS_LOADING', value: false })
      })
    }
  }, [appState.isLoading])

  useEffect(() => {
    if (appState.launch) {
      // 画面遷移時
      appDispatch({ type: 'SET_IS_LOADING', value: true })
    }
  }, [router.route])

  return (
    <div css={loadOverlay}>
      <div css={inner} className={cn({ dark: appState.darkMode })}></div>
    </div>
  )
}

const loadOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
`

const inner = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  background-color: ${style.colors.lightBlue};
  transition: background-color 0.3s ease-in-out;
  &.dark {
    background-color: ${style.colors.blogBack};
  }
`

const target = `.css-${inner.name}`

const launchAnim = (cb: () => void): void => {
  gsap.to(target, {
    y: '100%',
    duration: 0.5,
    delay: 1.0,
    ease: 'expo.out',
    onComplete: cb,
  })
}

const routeAnim = (cb: () => void): void => {
  gsap.to(target, {
    y: '0%',
    duration: 0.5,
    ease: 'expo.out',
    onComplete: () => {
      window.scrollTo(0, 0)
      gsap.to(target, {
        y: '100%',
        duration: 0.5,
        delay: 1.0,
        ease: 'expo.out',
        onComplete: cb,
      })
    },
  })
}

export { Loading }
