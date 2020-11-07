import style from '~/styles/components/layout/Menu.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Menu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const router = useRouter()

  return (
    <div className={cn(style.wrap, { [style.active]: isOpen })}>
      <div className={style.bg} />
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
          <Link href="/">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === 'work'
              })}
              onClick={(): void => setIsOpen(false)}
            >
              つくったやつ
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === 'blog'
              })}
              onClick={(): void => setIsOpen(false)}
            >
              ウラ話
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/">
            <a className={cn(style.anchor, { [style.current]: false })}>
              映像屋さんの服
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === 'member'
              })}
              onClick={(): void => setIsOpen(false)}
            >
              メンバー
            </a>
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/">
            <a
              className={cn(style.anchor, {
                [style.current]: router.route === 'contact'
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
          <Link href="/">
            <a
              className={style.bottomAnchor}
              onClick={(): void => setIsOpen(false)}
            >
              SNS
            </a>
          </Link>
        </li>
        <li className={style.bottomItem}>
          <Link href="/">
            <a
              className={style.bottomAnchor}
              onClick={(): void => setIsOpen(false)}
            >
              会社情報
            </a>
          </Link>
        </li>
        <li className={style.bottomItem}>
          <Link href="/">
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
