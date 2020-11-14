import style from '~/styles/components/layout/Menu.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'

// type MainItemProps = {
//   route: '/' | 'work' | 'blog' | 'member' | 'contact'
//   setIsOpen: (isOpen: boolean) => void
//   text: string
// }

// const MainItem: React.FC<MainItemProps> = ({ route, setIsOpen, text }) => {
//   const router = useRouter()

//   return (
//     <Link href={route}>
//       <a
//         className={cn(style.anchor, {
//           [style.current]: router.route === route
//         })}
//         onClick={(): void => setIsOpen(false)}
//       >
//         {text}
//       </a>
//     </Link>
//   )
// }

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Menu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const router = useRouter()
  const { appState } = useContext(AppContext)

  return (
    <div className={cn(style.wrap, { [style.active]: isOpen })}>
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
        </svg>`
        }}
      />
      <ul className={style.list}>
        <li className={style.item}>
          <Link href="/">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === '/'
              })}
              onClick={(): void => setIsOpen(false)}
            >
              トップ
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/works">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === '/works'
              })}
              onClick={(): void => setIsOpen(false)}
            >
              つくったやつ
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/blog">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === '/blog'
              })}
              onClick={(): void => setIsOpen(false)}
            >
              ウラ話
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/">
            <a
              className={cn(style.anchor, style.store, {
                [style.current]: false
              })}
            >
              映像屋さんの服
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/member">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === '/member'
              })}
              onClick={(): void => setIsOpen(false)}
            >
              メンバー
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/contact">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === '/contact'
              })}
              onClick={(): void => setIsOpen(false)}
            >
              お問い合わせ
            </a>
          </Link>
        </li>
      </ul>
      <ul className={style.bottomList}>
        <li className={style.bottomItem}>
          <a
            href="https://instagram.com/yuruppe.inc?igshid=10cfjlokkxj98"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(style.bottomAnchor, style.sns)}
            onClick={(): void => setIsOpen(false)}
          >
            SNS
          </a>
        </li>
        <li className={style.bottomItem}>
          <Link href="/about">
            <a
              className={style.bottomAnchor}
              onClick={(): void => setIsOpen(false)}
            >
              会社情報
            </a>
          </Link>
        </li>
        <li className={style.bottomItem}>
          <Link href="/privacy">
            <a
              className={style.bottomAnchor}
              onClick={(): void => setIsOpen(false)}
            >
              プライバシーポリシー
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export { Menu }
