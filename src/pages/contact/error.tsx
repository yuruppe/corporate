import { NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Contact.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { Picture } from '~/components/common/Picture'

const ContactError: NextPage = () => {
  const router = useRouter()
  const { appState } = useContext(AppContext)

  useEffectOnce(() => {
    window.scrollTo(0, 0)
    if (!appState.formTmpData) {
      router.push('/contact')
    }
  })

  return (
    <>
      <Head>
        <title>エラー | お問い合わせ | YURUPPE.inc</title>
      </Head>

      <section className={style.main}>
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
          <h1>技術的な理由で、問題が発生しました。</h1>
          <p>大変申し訳ございませんが、問題が発生しました。</p>
          <p>お急ぎの場合は下記のメールアドレスまでお願いいたします。</p>
          <a href="mailto:tete@yuruppe.co.jp">tete@yuruppe.co.jp</a>
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

export default ContactError
