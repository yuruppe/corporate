import { css } from '@emotion/react'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'
import style from '~/styles'
import cn from 'classnames'

const Loading: React.FC = () => {
  const { appState, appDispatch } = useContext(AppContext)
  useEffect(() => {
    if (!appState.launch) {
      // on launch process
      // window.scrollTo(0, 0)
      launchAnim(() => {
        appDispatch({ type: 'SET_LAUNCH' })
        appDispatch({ type: 'SET_IS_LOADING', value: false })
      })
      return
    }
    if (appState.isLoading) {
      // Loading start
      routeingStartAnim()
    } else {
      // Loading end
      routingEndAnim()
    }
  }, [appState.isLoading])

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

const routeingStartAnim = (): void => {
  gsap.to(target, {
    y: '0%',
    duration: 0.5,
    ease: 'expo.out',
  })
}

const routingEndAnim = (): void => {
  gsap.to(target, {
    y: '100%',
    duration: 0.5,
    delay: 0.5,
    ease: 'expo.out',
  })
}

export { Loading }
