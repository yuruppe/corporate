import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Contact.module.scss'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import axios from 'axios'
import { FormPostData } from '~/types/Form'

type Props = {
  endPoint: string
  xWriteApiKey: string
}

const ContactConfirm: NextPage<Props> = ({ endPoint, xWriteApiKey }) => {
  const router = useRouter()
  const { appState } = useContext(AppContext)

  const onSubmit = (): void => {
    const { name, company, mail, tel, detail } = appState.formTmpData
    const today = new Date()
    const date = `${today.getFullYear()}年${today.getMonth() +
      1}月${today.getDate()}日${today.getHours()}時${today.getMinutes()}分`

    const formTmpData: FormPostData = {
      name,
      company,
      mail,
      tel,
      detail,
      date,
    }

    axios
      .post(endPoint + 'contact', formTmpData, {
        headers: {
          'Content-Type': 'application/json',
          'X-WRITE-API-KEY': xWriteApiKey,
        },
      })
      .then(() => {
        router.push('/contact/complete')
      })
      .catch((err) => {
        console.error(err)
        router.push('/contact/error')
      })
  }

  const onBack = (): void => {
    router.push('/contact')
  }

  useEffectOnce(() => {
    window.scrollTo(0, 0)
    if (!appState.formTmpData) {
      router.push('/contact')
    }
  })

  if (!appState.formTmpData) {
    return <div></div>
  }

  return (
    <>
      <Head>
        <title>確認 | お問い合わせ | YURUPPE.inc</title>
      </Head>

      <section className={style.main}>
        <div className={style.head}>
          <h1 className={style.title}>
            <img src="/img/page/contactTitle.png" alt="お問い合わせ" />
          </h1>
        </div>
        <div className={style.body}>
          <p className={style.intro}>
            入力内容をご確認の上「送信する」ボタンを押してください。
            <br />
            内容に不備がある場合は、「戻る」ボタンを押して修正してください。
          </p>
          <dl className={style.form__item}>
            <dt className={style.form__label}>
              <label htmlFor="company">企業名</label>
            </dt>
            <dd className={style.form__input}>
              <span className={style.form__confirmText}>
                {appState.formTmpData.company}
              </span>
            </dd>
          </dl>
          <dl className={style.form__item}>
            <dt className={style.form__label}>
              <label className={style.labelRequire} htmlFor="name">
                ご担当者名
              </label>
            </dt>
            <dd className={style.form__input}>
              <span className={style.form__confirmText}>
                {appState.formTmpData.name}
              </span>
            </dd>
          </dl>
          <dl className={style.form__item}>
            <dt className={style.form__label}>
              <label className={style.labelRequire} htmlFor="mail">
                E-MAIL
              </label>
            </dt>
            <dd className={style.form__input}>
              <span className={style.form__confirmText}>
                {appState.formTmpData.mail}
              </span>
            </dd>
          </dl>
          <dl className={style.form__item}>
            <dt className={cn(style.form__label, style.elective)}>
              <label htmlFor="tel">TEL</label>
            </dt>
            <dd className={style.form__input}>
              <span className={style.form__confirmText}>
                {appState.formTmpData.tel === ''
                  ? '-'
                  : appState.formTmpData.tel}
              </span>
            </dd>
          </dl>
          <dl className={style.form__item}>
            <dt className={style.form__label}>
              <label htmlFor="detail">お問い合わせ内容</label>
            </dt>
            <dd className={style.form__input}>
              <span className={style.form__confirmText}>
                {appState.formTmpData.detail}
              </span>
            </dd>
          </dl>
          <dl className={style.form__item}>
            <dt className={style.form__label}>
              <label htmlFor="agree">プライバシーポリシー</label>
            </dt>
            <dd className={style.form__input}>
              <span className={style.form__confirmText}>同意しました</span>
            </dd>
          </dl>
          <div className={style.form__submitWrap}>
            <div className={cn(style.form__submit, style.active)}>
              <div className={style.form__submitInner}>
                <input type="submit" value="訂正する" onClick={onBack} />
              </div>
            </div>
            <div className={cn(style.form__submit, style.active)}>
              <div className={style.form__submitInner}>
                <input type="submit" value="送信する" onClick={onSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      endPoint: process.env.END_POINT,
      xWriteApiKey: process.env.X_WRITE_API_KEY,
    },
  }
}

export default ContactConfirm
