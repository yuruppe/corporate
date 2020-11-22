import { useRouter } from 'next/router'
import { useContext } from 'react'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { AppContext } from '~/store/appContext'
import { FormPostData } from '~/types/Form'
import { routingStart } from '~/utils/routing'
import { Picture } from '../common/Picture'
import ContactStyles from './ContactStyles'
import axios from 'axios'

type Props = {
  endPoint: string
  xWriteApiKey: string
}

const ContactConfirmInner: React.FC<Props> = ({ endPoint, xWriteApiKey }) => {
  const router = useRouter()
  const { appState, appDispatch } = useContext(AppContext)

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
        // routingStart(() => {
        //   window.scrollTo(0, 0)
        //   appDispatch({ type: 'SET_IS_LOADING', value: true })
        //   router.push('/contact/complete')
        // })
      })
      .catch((err) => {
        console.error(err)

        router.push('/contact/error')

        // routingStart(() => {
        //   window.scrollTo(0, 0)
        //   appDispatch({ type: 'SET_IS_LOADING', value: true })
        //   router.push('/contact/error')
        // })
      })
  }

  const onBack = (): void => {
    router.push('/contact')
  }

  useEffectOnce(() => {
    if (!appState.formTmpData) {
      router.push('/contact')
    }
  })

  if (!appState.formTmpData) {
    return <div></div>
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
          入力内容をご確認の上「送信する」ボタンを押してください。
          <br />
          内容に不備がある場合は、「戻る」ボタンを押して修正してください。
        </p>
        <dl css={ContactStyles.formItem}>
          <dt css={ContactStyles.formLabel}>
            <label htmlFor="company">企業名</label>
          </dt>
          <dd css={ContactStyles.formInput}>
            <span css={ContactStyles.formConfirmText}>
              {appState.formTmpData.company}
            </span>
          </dd>
        </dl>
        <dl css={ContactStyles.formItem}>
          <dt css={ContactStyles.formLabel}>
            <label className="labelRequire" htmlFor="name">
              ご担当者名
            </label>
          </dt>
          <dd css={ContactStyles.formInput}>
            <span css={ContactStyles.formConfirmText}>
              {appState.formTmpData.name}
            </span>
          </dd>
        </dl>
        <dl css={ContactStyles.formItem}>
          <dt css={ContactStyles.formLabel}>
            <label className="labelRequire" htmlFor="mail">
              E-MAIL
            </label>
          </dt>
          <dd css={ContactStyles.formInput}>
            <span css={ContactStyles.formConfirmText}>
              {appState.formTmpData.mail}
            </span>
          </dd>
        </dl>
        <dl css={ContactStyles.formItem}>
          <dt css={ContactStyles.formLabel} className="elective">
            <label htmlFor="tel">TEL</label>
          </dt>
          <dd css={ContactStyles.formInput}>
            <span css={ContactStyles.formConfirmText}>
              {appState.formTmpData.tel === '' ? '-' : appState.formTmpData.tel}
            </span>
          </dd>
        </dl>
        <dl css={ContactStyles.formItem}>
          <dt css={ContactStyles.formLabel}>
            <label htmlFor="detail">お問い合わせ内容</label>
          </dt>
          <dd css={ContactStyles.formInput}>
            <span css={ContactStyles.formConfirmText}>
              {appState.formTmpData.detail}
            </span>
          </dd>
        </dl>
        <dl css={ContactStyles.formItem}>
          <dt css={ContactStyles.formLabel}>
            <label htmlFor="agree">プライバシーポリシー</label>
          </dt>
          <dd css={ContactStyles.formInput}>
            <span css={ContactStyles.formConfirmText}>同意しました</span>
          </dd>
        </dl>
        <div css={ContactStyles.formSubmitWrap}>
          <div css={ContactStyles.formSubmit} className="active">
            <div>
              <input type="submit" value="訂正する" onClick={onBack} />
            </div>
          </div>
          <div css={ContactStyles.formSubmit} className="active">
            <div>
              <input type="submit" value="送信する" onClick={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ContactConfirmInner }
