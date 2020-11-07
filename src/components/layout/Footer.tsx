import style from '~/styles/components/layout/Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={style.wrap}>
      <div className={style.logo}>
        <img src="img/common/logo_illust.svg" alt="yuruppe" />
      </div>
      <div className={style.copyright}>
        <span>Copyright © YURUPPE.inc. All rights reserved.</span>
      </div>
    </footer>
  )
}

export { Footer }
