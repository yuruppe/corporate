import Link from 'next/link'
import { useState } from 'react'
import style from '~/styles/components/layout/Header.module.scss'
import { Menu } from './Menu'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className={style.wrap}>
      <div className={style.logo}>
        <Link href="/">
          <img src="/img/common/logo.svg" alt="yuruppe.inc" />
        </Link>
      </div>
      <div className={style.button}>
        <div className={style.top}>
          <div
            className={style.hamburger}
            onClick={(): void => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={style.middle} />
        <div className={style.bottom} />
      </div>
      <nav className={style.nav}>
        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </nav>
    </header>
  )
}

export { Header }
