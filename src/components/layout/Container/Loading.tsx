import { css } from '@emotion/react'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'
import style from '~/styles'
import cn from 'classnames'
import Lottie, { AnimationItem } from 'lottie-web'
import landingGreen from '~/json/landing_green.json'
import landingGray from '~/json/landing_gray.json'
import transitionGreen from '~/json/transition_green.json'
import transitionGray from '~/json/transition_gray.json'
import chara00 from '~/json/chara00.json'
import chara01 from '~/json/chara01.json'
import chara02 from '~/json/chara02.json'
import chara03 from '~/json/chara03.json'
import chara04 from '~/json/chara04.json'
import chara05 from '~/json/chara05.json'
import chara06 from '~/json/chara06.json'
import chara07 from '~/json/chara07.json'
import chara08 from '~/json/chara08.json'
import chara09 from '~/json/chara09.json'
import chara10 from '~/json/chara10.json'

const Loading: React.FC = () => {
  const { appState, appDispatch } = useContext(AppContext)
  const mounted = useRef<boolean>(false)
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
    if (!mounted.current) {
      mounted.current = true
    } else {
      if (appState.isLoading) {
        // Loading start
        routeingStartAnim(appState.darkMode)
      } else {
        // Loading end
        routingEndAnim(appState.darkMode)
      }
    }
  }, [appState.isLoading])

  return (
    <div css={root}>
      <div css={landing} id="landingAnimWrap">
        <div id="landingAnim" />
      </div>
      <div css={transition}>
        <div id="transitionGreen" />
      </div>
      <div css={transition}>
        <div id="transitionGray" />
      </div>
      <div css={chara}>
        <div id="chara00-landing" />
      </div>
      <div css={chara} className="anim-00">
        <div id="chara00" />
      </div>
      <div css={chara} className="anim-01">
        <div id="chara01" />
      </div>
      <div css={chara} className="anim-02">
        <div id="chara02" />
      </div>
      <div css={chara} className="anim-03">
        <div id="chara03" />
      </div>
      <div css={chara} className="anim-04">
        <div id="chara04" />
      </div>
      <div css={chara} className="anim-05">
        <div id="chara05" />
      </div>
      <div css={chara} className="anim-06">
        <div id="chara06" />
      </div>
      <div css={chara} className="anim-07">
        <div id="chara07" />
      </div>
      <div css={chara} className="anim-08">
        <div id="chara08" />
      </div>
      <div css={chara} className="anim-09">
        <div id="chara09" />
      </div>
      <div css={chara} className="anim-10">
        <div id="chara10" />
      </div>
    </div>
  )
}
const defaultAbsolute = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const root = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10000;
`
const _root = `.css-${root.name}`
const landing = css`
  ${defaultAbsolute}
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    svg {
      width: auto !important;
      height: auto !important;
      min-width: 100%;
      min-height: 100%;
      max-width: inherit;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) !important;
    }
  }
`
const transition = css`
  ${defaultAbsolute}
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    svg {
      width: auto !important;
      height: auto !important;
      min-width: 100%;
      min-height: 100%;
      max-width: inherit;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) !important;
    }
  }
`
const chara = css`
  ${defaultAbsolute}
  display: flex;
  justify-content: center;
  align-items: center;
`

// JSONをロードしてカウント、15たまったらランディングの関数をたたく
let loadAnimCount = 0
const loadAnim = (id: string, data: any, loop = false): AnimationItem => {
  const anim = Lottie.loadAnimation({
    container: document.getElementById(id),
    renderer: 'svg',
    loop,
    autoplay: false,
    animationData: data,
  })

  anim.addEventListener('DOMLoaded', () => {
    loadAnimCount++
    if (loadAnimCount === 15) {
      open()
    }
  })

  return anim
}
/**
 * アニメーションデータ全部
 */
const allCharaArray: AnimationItem[] = []
let landingAnim: AnimationItem
let landingChara: AnimationItem
const allCharaLoad = (): void => {
  allCharaArray.push(loadAnim('chara00', chara00))
  allCharaArray.push(loadAnim('chara01', chara01))
  allCharaArray.push(loadAnim('chara02', chara02))
  allCharaArray.push(loadAnim('chara03', chara03))
  allCharaArray.push(loadAnim('chara04', chara04))
  allCharaArray.push(loadAnim('chara05', chara05))
  allCharaArray.push(loadAnim('chara06', chara06))
  allCharaArray.push(loadAnim('chara07', chara07))
  allCharaArray.push(loadAnim('chara08', chara08))
  allCharaArray.push(loadAnim('chara09', chara09))
  allCharaArray.push(loadAnim('chara10', chara10))
}
let transitionAnimGreen: AnimationItem
let transitionAnimGray: AnimationItem

// コンポーネントからもらってるコールバックを一時保存する変数
let loadCallback: () => void

// 全部のアニメーションを読み込む
const allTransitionAnimLoad = (): void => {
  const isBlog = location.href.includes('urabanashi')
  landingAnim = loadAnim('landingAnim', isBlog ? landingGray : landingGreen)
  landingChara = loadAnim('chara00-landing', chara00)
  allCharaLoad()
  transitionAnimGreen = loadAnim('transitionGreen', transitionGreen)
  transitionAnimGray = loadAnim('transitionGray', transitionGray)
  nowChara = allCharaArray[0]
}

// 実際にコンポーネント側から叩かれて、最初に動く関数
const launchAnim = (cb: () => void): void => {
  loadCallback = cb
  allTransitionAnimLoad()
}

/**
 * もろもろアニメーションがおわってサイトを見せる時の最後の関数
 */
const open = (): void => {
  setTimeout(() => {
    landingChara.play()
    setTimeout(() => {
      landingAnim.play()
    }, 300)
  }, 500)
  setTimeout(() => {
    loadCallback()
  }, 1200)
  landingAnim.addEventListener('complete', () => {
    gsap.set(_root, {
      display: 'none',
    })
    gsap.set('#landingAnimWrap', {
      display: 'none',
    })
  })
}

let start = false
let nowChara: AnimationItem

const routeingStartAnim = (isDark: boolean): void => {
  if (!transitionAnimGreen) return

  gsap.set(_root, {
    display: 'block',
  })
  const min = 1
  const max = 11
  nowChara =
    allCharaArray[Math.floor(Math.random() * (max + 1 - min)) + min - 1]
  const anim = isDark ? transitionAnimGray : transitionAnimGreen
  anim.play()
  nowChara.play()
  start = true
  setTimeout(() => {
    if (start) {
      anim.pause()
    }
  }, 1300)
}

const routingEndAnim = (isDark: boolean): void => {
  if (!transitionAnimGreen) return
  if (!nowChara) return

  const anim = isDark ? transitionAnimGray : transitionAnimGreen
  anim.addEventListener('complete', () => {
    gsap.set(_root, {
      display: 'none',
    })
    nowChara.goToAndStop(0)
    anim.goToAndStop(0)
  })
  setTimeout(() => {
    start = false
    anim.play()
  }, 500)
}

export { Loading }
