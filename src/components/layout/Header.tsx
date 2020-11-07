import style from '~/styles/components/layout/Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={style.wrap}>
      <div className={style.logo}>
        <img src="img/common/logo.svg" alt="yuruppe.inc" />
      </div>
      <div className={style.button}>
        <div className={style.top}>
          <div className={style.hamburger}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={style.middle} />
        <div className={style.bottom} />
      </div>
    </header>
  )
}

export { Header }
