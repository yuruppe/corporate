import cn from 'classnames'
import { useRouter } from 'next/dist/client/router'
import gsap from 'gsap'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import { CustomLink } from '../../common/CustomLink'
import { css, keyframes } from '@emotion/react'
import style from '~/styles'
import { rgba } from 'emotion-rgba'

type MainItemProps = {
  route: '/' | '/tukutta' | '/urabanashi' | '/member' | '/contact'
  text: string
}

const MainItem: React.FC<MainItemProps> = ({ route, text }) => {
  const { appDispatch } = useContext(AppContext)
  const router = useRouter()

  return (
    <CustomLink
      href={route}
      onClick={(): void => {
        appDispatch({ type: 'CLOSE_MENU' })
      }}
    >
      <div css={anchor} className={cn({ current: router.route === route })}>
        <span>{text}</span>
      </div>
    </CustomLink>
  )
}

const Menu: React.FC = () => {
  // const router = useRouter()
  const { appState, appDispatch } = useContext(AppContext)

  const handleClick = (): void => {
    if (!appState.menu.isAnim) {
      appDispatch({ type: 'CLOSE_MENU' })
    }
  }

  const handleMouseOver = (): void => {
    gsap.to(`.css-${anchor.name}`, {
      opacity: 0.2,
      duration: 0.3,
    })
  }
  const handleMouseLeave = (): void => {
    gsap.to(`.css-${anchor.name}`, {
      opacity: 1,
      duration: 0.3,
    })
  }

  const _wageWrap = `.css-${waveWrap.name}`
  const _wrap = `.css-${wrap.name}`
  const _bg = `.css-${bg.name}`
  const _item = `.css-${item.name}`
  const _bottomItem = `.css-${bottomItem.name}`

  const open = (): void => {
    const main = 'main'
    gsap
      .timeline({
        onStart: () => {
          appDispatch({ type: 'MENU_ANIM_ENDED' })
        },
      })
      .addLabel(main)
      .to(
        _wageWrap,
        {
          y: '0%',
          ease: 'circ.out',
        },
        main,
      )
      .to(
        _wrap,
        {
          // opacity: 1,
          visibility: 'visible',
        },
        main,
      )
      .to(
        _bg,
        {
          opacity: 1,
          duration: 0.4,
        },
        main,
      )
      .to(
        _item,
        {
          y: 0,
          ease: 'back.out(1.8)',
          duration: 0.4,
          stagger: 0.1,
          opacity: 1,
        },
        main,
      )
      .to(
        _bottomItem,
        {
          y: 0,
          ease: 'back.out(1.8)',
          duration: 0.4,
          stagger: 0.1,
          opacity: 1,
        },
        main + '+=0.6',
      )
  }
  const close = (): void => {
    const main = 'main'
    gsap
      .timeline({
        onComplete: () => {
          appDispatch({ type: 'MENU_ANIM_ENDED' })
          gsap.set(_wrap, {
            visibility: 'hidden',
          })
        },
      })
      .addLabel(main)
      .to(
        _wageWrap,
        {
          y: '-100%',
          ease: 'back.in(0.8)',
        },
        main,
      )
      .to(
        _bg,
        {
          opacity: 0,
          duration: 0.4,
        },
        main + '+=0.4',
      )
      .to(
        _wrap,
        {
          // opacity: 0,
        },
        main,
      )
      .to(
        _item,
        {
          y: -40,
          ease: 'back.out(1.6)',
          duration: 0.4,
          stagger: 0.03,
          opacity: 0,
        },
        main,
      )
      .to(
        _bottomItem,
        {
          y: -20,
          ease: 'back.out(1.6)',
          duration: 0.4,
          stagger: 0.03,
          opacity: 0,
        },
        main,
      )
  }

  useEffect(() => {
    if (appState.menu.isOpen) {
      open()
    } else {
      close()
    }
  }, [appState.menu.isOpen])

  return (
    <div css={wrap}>
      <div css={bg} className={cn({ dark: appState.darkMode })} />
      <div
        css={waveWrap}
        dangerouslySetInnerHTML={{
          __html: `<svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="menu-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use xlink:href="#menu-wave" x="48" y="0"/>
          </g>
        </svg>`,
        }}
      />
      <ul
        css={list}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <li css={item}>
          <MainItem route="/" text="トップ" />
        </li>
        <li css={item}>
          <MainItem route="/tukutta" text="つくったやつ" />
        </li>
        <li css={item}>
          <MainItem route="/urabanashi" text="ウラ話" />
        </li>
        <li css={item}>
          <a
            css={anchor}
            className={cn('store', {
              current: false,
            })}
            href="https://yuruppe.stores.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            映像屋さんの服
          </a>
        </li>
        <li css={item}>
          <MainItem route="/member" text="メンバー" />
        </li>
        <li css={item}>
          <MainItem route="/contact" text="お問い合わせ" />
        </li>
      </ul>
      <ul css={bottomList}>
        <li css={bottomItem}>
          <a
            href="https://instagram.com/yuruppe.inc?igshid=10cfjlokkxj98"
            target="_blank"
            rel="noopener noreferrer"
            css={bottomAnchor}
            className="sns"
            onClick={handleClick}
          >
            SNS
          </a>
        </li>
        <li css={bottomItem}>
          <CustomLink href="/about" onClick={handleClick}>
            <span>会社情報</span>
          </CustomLink>
        </li>
        <li css={bottomItem}>
          <CustomLink href="/privacy" onClick={handleClick}>
            <span>プライバシーポリシー</span>
          </CustomLink>
        </li>
      </ul>
    </div>
  )
}

const wrap = css`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: ${style.vwSp(80)} 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  pointer-events: auto;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
  ${style.pc(css`
    padding: 163px 0 0;
    padding: 100px 0 0;
  `)}
`
const bg = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${style.colors.lightBlue};
  z-index: -1;
  &.dark {
    background-color: ${style.colors.blogBack};
  }
`

const moveForever = keyframes`
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
`
const waveHeight = 600
const waveHeightSp = 80
const waveWrap = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  padding-top: ${waveHeight}px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${waveHeight + 1}px;
    background-color: white;
  }
  &::after {
    content: '';
    position: absolute;
    top: -900px;
    left: 0;
    width: 100%;
    height: 900px;
    background-color: white;
  }
  ${style.sp(css`
    padding-top: ${waveHeightSp}vh;
    &::before {
      height: ${waveHeightSp + 0.1}vh;
    }
  `)}
  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
    transform: rotate(180deg);
    ${style.sp(css`
      height: 90px;
      min-height: 40px;
    `)}
  }
  .parallax {
    use {
      animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
      fill: ${rgba('#fff', 1.0)};
      &:nth-of-type(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }
      &:nth-of-type(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }
      &:nth-of-type(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }
      &:nth-of-type(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }
    }
  }
`
const list = css`
  max-width: 400px;
  margin: 0 auto;
`
const item = css`
  padding: ${style.vwSp(32)} 0 0;
  text-align: center;
  ${style.pc(css`
    padding: 32px 0 0;
  `)}
`
const anchor = css`
  position: relative;
  display: inline-block;
  font-size: ${style.vwSp(24)};
  line-height: 1;
  font-weight: ${style.config.weight.extraBold};
  letter-spacing: 0.1em;
  color: ${style.colors.midBlue};
  transition: opacity 0.2s ease;
  &.current {
    color: black;
  }
  &.store {
    padding-right: ${style.vwSp(29.49)};
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: ${style.vwSp(16)};
      height: ${style.vwSp(16)};
      background-image: url('/img/common/blank_mid.svg');
      background-size: contain;
      background-repeat: no-repeat;
      transform: translateY(-60%);
    }
  }
  ${style.pc(css`
    font-size: 32px;
    line-height: 48px;
    &.store {
      padding-right: 56px;
      &::before {
        width: 32px;
        height: 32px;
        transform: translateY(-50%);
      }
    }
    &:hover {
      opacity: 1 !important;
    }
  `)}
`

const bottomList = css`
  position: relative;
  padding-left: ${style.vwSp(64)};
  /* padding-bottom: ${style.vwSp(29)}; */
  padding-top: ${style.vwSp(40)};
  ${style.pc(css`
    display: none;
  `)}
`
const bottomItem = css`
  padding-top: ${style.vwSp(24)};
  &:first-of-type {
    padding-bottom: ${style.vwSp(24)};
  }
`
const bottomAnchor = css`
  position: relative;
  display: inline-block;
  font-size: ${style.vwSp(16)};
  line-height: 1;
  letter-spacing: 0.16em;
  &.sns {
    padding-right: ${style.vwSp(40)};
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: ${style.vwSp(20)};
      height: ${style.vwSp(20)};
      background-image: url('/img/common/instagram.svg');
      background-size: contain;
      background-repeat: no-repeat;
      transform: translateY(-52%);
    }
  }
`

export { Menu }
