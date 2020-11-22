import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { AppContext } from '~/store/appContext'
import { FormTmpData } from '~/types/Form'
import { routingStart } from '~/utils/routing'
import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import cn from 'classnames'
import ContactStyles from './ContactStyles'

const ContactInner: React.FC = () => {
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
    routingStart(() => {
      window.scrollTo(0, 0)
      appDispatch({ type: 'SET_IS_LOADING', value: true })
      router.push('/contact/confirm')
    })
  }
  return (
    <div css={ContactStyles.main}>
      <div>
        <h1 css={ContactStyles.title}>
          <Picture
            webp={require('@public/img/page/contactTitle.png?webp')}
            img={require('@public/img/page/contactTitle.png')}
            alt="お問い合わせ"
          />
        </h1>
      </div>
      <div css={ContactStyles.body}>
        <p css={ContactStyles.intro}>
          お問い合わせありがとうございます。
          <br />
          弊社へのお問い合わせは以下フォームよりお願いいたします。
          <br />
          弊社より折り返しご連絡させていただきます。
        </p>
        <p css={ContactStyles.intro} className="note">
          *印は必須項目です。
        </p>
        <form css={ContactStyles.form} onSubmit={handleSubmit(onSubmit)}>
          <dl css={ContactStyles.formItem}>
            <dt css={ContactStyles.formLabel}>
              <label htmlFor="company">企業名</label>
            </dt>
            <dd
              css={ContactStyles.formInput}
              className={cn({
                error: errors.company,
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
                <p css={ContactStyles.formError}>*印は必須項目です。</p>
              )}
            </dd>
          </dl>
          <dl css={ContactStyles.formItem}>
            <dt css={ContactStyles.formLabel}>
              <label htmlFor="name">ご担当者名</label>
            </dt>
            <dd
              css={ContactStyles.formInput}
              className={cn({
                error: errors.name,
              })}
            >
              <input
                type="text"
                id="name"
                name="name"
                ref={register({ required: true })}
                placeholder="例)ゆる太郎"
              />
              {errors.name && (
                <p css={ContactStyles.formError}>*印は必須項目です。</p>
              )}
            </dd>
          </dl>
          <dl css={ContactStyles.formItem}>
            <dt css={ContactStyles.formLabel}>
              <label htmlFor="mail">E-MAIL</label>
            </dt>
            <dd
              css={ContactStyles.formInput}
              className={cn({ error: errors.mail })}
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
                <p css={ContactStyles.formError}>*印は必須項目です。</p>
              )}
              {errors.mail && errors.mail.type === 'pattern' && (
                <p css={ContactStyles.formError}>不正なアドレスです。</p>
              )}
            </dd>
          </dl>
          <dl css={ContactStyles.formItem}>
            <dt css={ContactStyles.formLabel} className="elective">
              <label htmlFor="tel">TEL</label>
            </dt>
            <dd css={ContactStyles.formInput}>
              <input
                type="tel"
                id="tel"
                name="tel"
                ref={register()}
                placeholder="例)03-1234-5678"
              />
            </dd>
          </dl>
          <dl css={ContactStyles.formItem}>
            <dt css={ContactStyles.formLabel}>
              <label htmlFor="detail">お問い合わせ内容</label>
            </dt>
            <dd
              css={ContactStyles.formInput}
              className={cn({
                error: errors.detail,
              })}
            >
              <textarea
                id="detail"
                name="detail"
                ref={register({ required: true })}
                placeholder="お問い合わせ内容を入力してください"
                className="detailArea"
              />
              {errors.detail && (
                <p css={ContactStyles.formError}>*印は必須項目です。</p>
              )}
            </dd>
          </dl>
          <div css={ContactStyles.formAgree}>
            <label htmlFor="agree">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                ref={register({ required: true })}
              />
              <div className="check" />
              <CustomLink href="/privacy">
                <small>プライバシーポリシー</small>
              </CustomLink>
              <span>に同意しました</span>
              {errors.agree && (
                <p css={ContactStyles.formError} className="agreeError">
                  *印は必須項目です。
                </p>
              )}
            </label>
          </div>
          <div
            css={ContactStyles.formSubmit}
            className={cn({ active: isValid })}
          >
            <div>
              <input type="submit" value="確認画面へ" disabled={!isValid} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export { ContactInner }
