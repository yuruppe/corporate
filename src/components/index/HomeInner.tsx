import { css, keyframes } from '@emotion/react'
import Lottie, { AnimationItem } from 'lottie-web'
import style from '~/styles'
import { CustomLink } from '../common/CustomLink'
import chara01 from '~/json/top_chara01.json'
import chara02 from '~/json/top_chara02.json'
import chara03 from '~/json/top_chara03.json'
import chara04 from '~/json/top_chara04.json'
import chara05 from '~/json/top_chara05.json'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'

type Props = {
  description: any
}

const HomeInner: React.FC<Props> = ({ description }) => {
  const { appState } = useContext(AppContext)
  const defaultInitParam: gsap.TweenVars = {
    opacity: 0,
    y: 70,
  }
  useEffectOnce(() => {
    init()
    gsap.set('.top_main', defaultInitParam)
    gsap.set('.top_item', defaultInitParam)
  })

  useEffect(() => {
    if (!appState.isLoading) {
      const main = 'main'
      gsap
        .timeline({
          delay: 1.2,
        })
        .addLabel(main)
        .to(
          '.top_main',
          {
            opacity: 1,
            y: 0,
            ease: 'expo.out',
            duration: 1.9,
          },
          main,
        )
        .to(
          '.top_item',
          {
            opacity: 1,
            y: 0,
            ease: 'expo.out',
            duration: 1.9,
            stagger: 0.1,
          },
          main,
        )
    }
  }, [appState.isLoading])

  return (
    <div css={main} className="top_main">
      <div css={inner}>
        <h1 css={title}>YURUPPE inc.</h1>
        <div css={desc} dangerouslySetInnerHTML={{ __html: description }} />
        <div id="top_chara01" css={topChara01} />
        <div id="top_chara05" css={topChara05} />
      </div>

      <ul css={linkList}>
        <li css={linkItem} className="top_item">
          <CustomLink href="/tsukutta">
            <div css={linkAnchor}>
              <h2 css={linkTitle} className="arrow">
                つくったもの
              </h2>
            </div>
          </CustomLink>
          <div id="top_chara02" css={topChara02} />
        </li>
        <li css={linkItem} className="top_item">
          <CustomLink href="/urabanashi">
            <div css={linkAnchor}>
              <h2 css={linkTitle} className="arrow">
                ウラ話
              </h2>
            </div>
          </CustomLink>
          <div id="top_chara03" css={topChara03} />
        </li>
        <li css={linkItem} className="top_item">
          <a
            css={linkAnchor}
            href="https://yuruppe.stores.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 css={linkTitle} className="blank">
              映像屋さんの服
            </h2>
          </a>
          <div id="top_chara04" css={topChara04} />
        </li>
      </ul>
    </div>
  )
}

const main = css`
  position: relative;
  padding: 0 ${style.vwSp(style.config.project.paddingSpSide)} ${style.vwSp(48)};
  ${style.pc(css`
    ${style.mixin.mainPcStyle()}
  `)}
`
const inner = css`
  position: relative;
  ${style.mixin.borderSquareFrame()}
  padding: ${style.vwSp(40)} ${style.vwSp(48)} ${style.vwSp(48)};
  ${style.pc(css`
    padding: 54px 180px 57px;
  `)}
  z-index: 10;
`
const charaDefault = css`
  width: 120px;
  transform: translateY(-45%);
  ${style.sp(css`
    width: ${style.vwSp(80)};
  `)}
  z-index: -10;
`
const topChara01 = css`
  position: absolute;
  top: 0;
  right: 20%;
  ${charaDefault}
`
const topChara02 = css`
  position: absolute;
  top: 0;
  right: 20%;
  ${charaDefault}
`
const topChara03 = css`
  position: absolute;
  top: 0;
  left: 20%;
  ${charaDefault}
`
const topChara04 = css`
  position: absolute;
  top: 0;
  right: 20%;
  ${charaDefault}
`
const topChara05 = css`
  position: absolute;
  top: 0;
  left: 20%;
  ${charaDefault}
`
const title = css`
  font-size: ${style.vwSp(37)};
  line-height: 1.6;
  font-weight: ${style.config.weight.black};
  white-space: nowrap;
  ${style.pc(css`
    font-size: 64px;
    line-height: 95px;
  `)}
`
const desc = css`
  padding: ${style.vwSp(32)} 0 0;
  font-size: ${style.vwSp(12)};
  line-height: 1.8;
  letter-spacing: 0.32em;
  font-weight: ${style.config.weight.extraBold};
  text-align: justify;
  ${style.pc(css`
    padding: 32px 0 0;
    font-size: 16px;
  `)}
`
const linkList = css`
  position: relative;
  padding: ${style.vwSp(24)} 0 0;
  z-index: 20;
  ${style.pc(css`
    padding: 40px 0 0;
    display: flex;
    justify-content: space-between;
  `)}
`
const linkItem = css`
  position: relative;
  transform: translate3d(0, 0, 1px);
  margin: ${style.vwSp(24)} 0 0;
  ${style.mixin.borderCircleButton()}
  ${style.pc(css`
    margin: 0;
    & + & {
      margin-left: 15px;
    }
    ${style.mixin.animPop()}
  `)}
`
const linkAnchor = css`
  position: relative;
  display: block;
  padding: ${style.vwSp(24)} ${style.vwSp(32)};
  text-align: center;
  ${style.pc(css`
    padding: 26px 32px;
  `)}
`
const linkTitle = css`
  position: relative;
  font-size: ${style.vwSp(20)};
  line-height: 1;
  letter-spacing: 0.08em;
  font-weight: ${style.config.weight.black};
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &.arrow {
    &::before {
      background-image: url('/img/common/arrow.svg');
      width: ${style.vwSp(12)};
      height: ${style.vwSp(17)};
      transform: translateY(-50%);
    }
  }
  &.blank {
    &::before {
      background-image: url('/img/common/blank.svg');
      width: ${style.vwSp(20)};
      height: ${style.vwSp(20)};
      transform: translateY(-60%);
    }
  }
  ${style.pc(css`
    font-size: 20px;
    &.arrow {
      &::before {
        width: 12px;
        height: 17px;
      }
    }
    &.blank {
      &::before {
        width: 20px;
        height: 20px;
      }
    }
  `)}
`
const loadAnim = (id: string, data: any, loop = false): AnimationItem => {
  const anim = Lottie.loadAnimation({
    container: document.getElementById(id),
    renderer: 'svg',
    loop,
    autoplay: false,
    animationData: data,
  })

  anim.addEventListener('DOMLoaded', () => {
    //
  })

  return anim
}

type AnimObject = {
  data: AnimationItem
  isAnim: boolean
}
const charaAnim01: AnimObject = {
  data: undefined,
  isAnim: undefined,
}
const charaAnim02: AnimObject = {
  data: undefined,
  isAnim: undefined,
}
const charaAnim03: AnimObject = {
  data: undefined,
  isAnim: undefined,
}
const charaAnim04: AnimObject = {
  data: undefined,
  isAnim: undefined,
}
const charaAnim05: AnimObject = {
  data: undefined,
  isAnim: undefined,
}

const init = () => {
  charaAnim01.data = loadAnim('top_chara01', chara01)
  charaAnim02.data = loadAnim('top_chara02', chara02)
  charaAnim03.data = loadAnim('top_chara03', chara03)
  charaAnim04.data = loadAnim('top_chara04', chara04)
  charaAnim05.data = loadAnim('top_chara05', chara05)

  register(charaAnim01)
  register(charaAnim02)
  register(charaAnim03)
  register(charaAnim04)
  register(charaAnim05)
}

const register = (anim: AnimObject): void => {
  setTimeout(() => {
    setInterval(() => {
      if (Math.random() > 0.85) {
        if (!anim.isAnim) {
          anim.isAnim = true
          anim.data.addEventListener('complete', () => {
            anim.data.goToAndStop(0)
            anim.isAnim = false
          })
          anim.data.play()
        }
      }
    }, 3000 + Math.random() * 1000)
  }, Math.random() * 300)
}

export { HomeInner }
