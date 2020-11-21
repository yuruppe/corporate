import style from '~/styles/components/layout/Menu.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/dist/client/router'
import gsap from 'gsap'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import { CustomLink } from '../common/CustomLink'

type MainItemProps = {
  route: '/' | '/works' | '/blog' | '/member' | '/contact'
  text: string
}

const MainItem: React.FC<MainItemProps> = ({ route, text }) => {
  const { appDispatch } = useContext(AppContext)
  const router = useRouter()

  return (
    <CustomLink
      href={route}
      linkClassName={cn(style.anchor, {
        [style.current]: router.route === route,
      })}
      onClick={(): void => {
        appDispatch({ type: 'CLOSE_MENU' })
      }}
    >
      <span>{text}</span>
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

  const open = (): void => {
    const main = 'main'
    gsap
      .timeline({
        onComplete: () => {
          appDispatch({ type: 'MENU_ANIM_ENDED' })
        },
      })
      .addLabel(main)
      .to(
        `.${style.waveWrap}`,
        {
          y: '0%',
          ease: 'circ.out',
        },
        main,
      )
      .to(
        `.${style.wrap}`,
        {
          // opacity: 1,
          visibility: 'visible',
        },
        main,
      )
  }
  const close = (): void => {
    const main = 'main'
    gsap
      .timeline({
        onComplete: () => {
          appDispatch({ type: 'MENU_ANIM_ENDED' })
          gsap.set(`.${style.wrap}`, {
            visibility: 'hidden',
          })
        },
      })
      .addLabel(main)
      .to(
        `.${style.waveWrap}`,
        {
          y: '-100%',
          ease: 'circ.out',
        },
        main,
      )
      .to(
        `.${style.wrap}`,
        {
          // opacity: 0,
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
    <div className={style.wrap}>
      <div className={cn(style.bg, { [style.dark]: appState.darkMode })} />
      <div
        className={style.waveWrap}
        dangerouslySetInnerHTML={{
          __html: `<svg
          class=${style.waves}
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
          <g class=${style.parallax}>
            <use xlink:href="#menu-wave" x="48" y="0"/>
          </g>
        </svg>`,
        }}
      />
      <ul className={style.list}>
        <li className={style.item}>
          <MainItem route="/" text="トップ" />
        </li>
        <li className={style.item}>
          <MainItem route="/works" text="つくったやつ" />
        </li>
        <li className={style.item}>
          <MainItem route="/blog" text="ウラ話" />
        </li>
        <li className={style.item}>
          <a
            className={cn(style.anchor, style.store, {
              [style.current]: false,
            })}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            映像屋さんの服
          </a>
        </li>
        <li className={style.item}>
          <MainItem route="/member" text="メンバー" />
        </li>
        <li className={style.item}>
          <MainItem route="/contact" text="お問い合わせ" />
        </li>
      </ul>
      <ul className={style.bottomList}>
        <li className={style.bottomItem}>
          <a
            href="https://instagram.com/yuruppe.inc?igshid=10cfjlokkxj98"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(style.bottomAnchor, style.sns)}
            onClick={handleClick}
          >
            SNS
          </a>
        </li>
        <li className={style.bottomItem}>
          <CustomLink href="/about" onClick={handleClick}>
            <span>会社情報</span>
          </CustomLink>
        </li>
        <li className={style.bottomItem}>
          <CustomLink href="/privacy" onClick={handleClick}>
            <span>プライバシーポリシー</span>
          </CustomLink>
        </li>
      </ul>
    </div>
  )
}

export { Menu }
