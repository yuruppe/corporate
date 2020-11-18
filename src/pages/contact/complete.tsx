import { NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Contact.module.scss'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { Picture } from '~/components/common/Picture'
import { PageInner } from '~/components/layout/PageInner'
import { CustomLink } from '~/components/common/CustomLink'

const ContactComplete: NextPage = () => {
  const router = useRouter()
  const { appState, appDispatch } = useContext(AppContext)

  useEffectOnce(() => {
    if (!appState.formTmpData) {
      router.push('/contact')
    } else {
      appDispatch({ type: 'REMOVE_POST_DATA' })
    }
  })

  return (
    <>
      <Head>
        <title>完了 | お問い合わせ | YURUPPE.inc</title>
      </Head>

      <PageInner>
        <div className={style.main}>
          <div className={style.head}>
            <h2 className={style.title}>
              <Picture
                webp={require('@public/img/page/contactTitle.png?webp')}
                img={require('@public/img/page/contactTitle.png')}
                alt="お問い合わせ"
              />
            </h2>
          </div>
          <div className={style.result}>
            <h1>お問い合わせが完了しました。</h1>
            <p>
              お問い合わせありがとうございました。
              <br />
              内容を確認し、３営業日以内に返信いたします。
              <br />
              しばらくお待ちください。
            </p>
          </div>
          <div className={style.back}>
            <CustomLink href="/">
              <span>トップへもどる</span>
            </CustomLink>
          </div>
        </div>
      </PageInner>
    </>
  )
}

export default ContactComplete
