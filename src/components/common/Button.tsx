import style from '~/styles/components/common/Button.module.scss'

const Button: React.FC = () => {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.main}>
          <span>テキスト</span>
        </div>
        <div className={style.middle} />
        <div className={style.bottom} />
      </div>
    </>
  )
}

export { Button }
