import { NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Contact.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'

const ContactComplete: NextPage = () => {
  const router = useRouter()
  const { appState, appDispatch } = useContext(AppContext)

  useEffectOnce(() => {
    window.scrollTo(0, 0)
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

      <section className={style.main}>
        <div className={style.head}>
          <h2 className={style.title}>
            <img src="/img/page/contactTitle.png" alt="お問い合わせ" />
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
          <Link href="/">
            <a>
              <span>トップへもどる</span>
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default ContactComplete
