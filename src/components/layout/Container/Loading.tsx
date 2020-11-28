import { css } from '@emotion/react'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'
import style from '~/styles'
import cn from 'classnames'
import Lottie from 'lottie-web'
import lottieLoadingPc from '~/json/loading_pc.json'
import lottieLoadingSp from '~/json/loading.json'

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
    <div css={root}>
      <div css={launchLoadingWrap}>
        <div css={launchLoading} id="loadingAnim" />
      </div>
      <div css={loadOverlay}>
        <div css={inner} className={cn({ dark: appState.darkMode })}></div>
      </div>
    </div>
  )
}
const root = css`
  pointer-events: none;
`

const launchLoadingWrap = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  overflow: hidden;
`
const launchLoading = css`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) scale(2);
  pointer-events: auto;
  svg {
    g > g {
    }
  }
  ${style.sp(css`
    transform: translate(-50%, -50%) scale(2.5);
  `)}
`

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
  const container = document.getElementById('loadingAnim')

  // 遷移ロードを消す
  gsap.to(target, {
    y: '100%',
    duration: 0.5,
    delay: 1.0,
    ease: 'expo.out',
  })

  const anim = Lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: window.innerWidth < 768 ? lottieLoadingSp : lottieLoadingPc,
  })
  anim.addEventListener('DOMLoaded', () => {
    // anim.goToAndStop(2000)
    anim.play()
    setTimeout(() => {
      gsap.set(container, {
        backgroundColor: 'transparent',
      })
    }, 600)
    setTimeout(() => {
      gsap.set(container, {
        display: 'none',
      })
      cb()
    }, 3000)
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
