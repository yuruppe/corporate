import { NextPage } from 'next'
import { useForm } from 'react-hook-form/dist/index.ie11'
import Head from 'next/head'
import style from '~/styles/components/page/Contact.module.scss'
import { useRouter } from 'next/router'
import { FormTmpData } from '~/types/Form'
import cn from 'classnames'
import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import Image from 'next/image'

const Contact: NextPage = () => {
  const router = useRouter()
  const { register, handleSubmit, errors, formState, setValue } = useForm<
    FormTmpData
  >({
    mode: 'onChange',
  })
  const { isValid } = formState
  const { appState, appDispatch } = useContext(AppContext)

  useEffectOnce(() => {
    if (appState.formTmpData) {
      setValue('name', appState.formTmpData.name, { shouldValidate: true })
      setValue('company', appState.formTmpData.company, {
        shouldValidate: true,
      })
      setValue('mail', appState.formTmpData.mail, { shouldValidate: true })
      setValue('tel', appState.formTmpData.tel)
      setValue('detail', appState.formTmpData.detail, { shouldValidate: true })
      setValue('agree', appState.formTmpData.agree, { shouldValidate: true })
    }
  })

  const onSubmit = (data: FormTmpData): void => {
    appDispatch({ type: 'SET_POST_DATA', value: data })
    router.push('/contact/confirm')
  }

  return (
    <>
      <Head>
        <title>お問い合わせ | YURUPPE.inc</title>
      </Head>

      <section className={style.main}>
        <div className={style.head}>
          <h1 className={style.title}>
            <Image
              src="/img/page/contactTitle.png"
              alt="お問い合わせ"
              unsized
            />
          </h1>
        </div>
        <div className={style.body}>
          <p className={style.intro}>
            お問い合わせありがとうございます。
            <br />
            弊社へのお問い合わせは以下フォームよりお願いいたします。
            <br />
            弊社より折り返しご連絡させていただきます。
          </p>
          <p className={cn(style.intro, style.note)}>*印は必須項目です。</p>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <dl className={style.form__item}>
              <dt className={style.form__label}>
                <label htmlFor="company">企業名</label>
              </dt>
              <dd
                className={cn(style.form__input, {
                  [style.error]: errors.company,
                })}
              >
                <input
                  type="text"
                  id="company"
                  name="company"
                  ref={register({ required: true })}
                  placeholder="YURUPPE.inc"
                />
                {errors.company && (
                  <p className={style.form__error}>*印は必須項目です。</p>
                )}
              </dd>
            </dl>
            <dl className={style.form__item}>
              <dt className={style.form__label}>
                <label className={style.labelRequire} htmlFor="name">
                  ご担当者名
                </label>
              </dt>
              <dd
                className={cn([
                  style.form__input,
                  {
                    [style.error]: errors.name,
                  },
                ])}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={register({ required: true })}
                  placeholder="例)ゆる太郎"
                />
                {errors.name && (
                  <p className={style.form__error}>*印は必須項目です。</p>
                )}
              </dd>
            </dl>
            <dl className={style.form__item}>
              <dt className={style.form__label}>
                <label className={style.labelRequire} htmlFor="mail">
                  E-MAIL
                </label>
              </dt>
              <dd
                className={cn([
                  style.form__input,
                  { [style.error]: errors.mail },
                ])}
              >
                <input
                  type="text"
                  id="mail"
                  name="mail"
                  ref={register({
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  placeholder="例)xxx@xxx.co.jp"
                />
                {errors.mail && errors.mail.type === 'required' && (
                  <p className={style.form__error}>*印は必須項目です。</p>
                )}
                {errors.mail && errors.mail.type === 'pattern' && (
                  <p className={style.form__error}>不正なアドレスです。</p>
                )}
              </dd>
            </dl>
            <dl className={style.form__item}>
              <dt className={cn(style.form__label, style.elective)}>
                <label htmlFor="tel">TEL</label>
              </dt>
              <dd className={style.form__input}>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  ref={register()}
                  placeholder="例)03-1234-5678"
                />
              </dd>
            </dl>
            <dl className={style.form__item}>
              <dt className={style.form__label}>
                <label htmlFor="detail">お問い合わせ内容</label>
              </dt>
              <dd
                className={cn(style.form__input, {
                  [style.error]: errors.detail,
                })}
              >
                <textarea
                  id="detail"
                  name="detail"
                  ref={register({ required: true })}
                  placeholder="お問い合わせ内容を入力してください"
                  className={style.detailArea}
                />
                {errors.detail && (
                  <p className={style.form__error}>*印は必須項目です。</p>
                )}
              </dd>
            </dl>
            <div className={style.form__agree}>
              <label htmlFor="agree">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  ref={register({ required: true })}
                />
                <Link href="/privacy">
                  <a>プライバシーポリシー</a>
                </Link>
                <span>に同意しました</span>
                {errors.agree && (
                  <p className={cn([style.form__error, style.agreeError])}>
                    *印は必須項目です。
                  </p>
                )}
              </label>
            </div>
            <div
              className={cn(style.form__submit, { [style.active]: isValid })}
            >
              <div className={style.form__submitInner}>
                <input type="submit" value="確認画面へ" disabled={!isValid} />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
