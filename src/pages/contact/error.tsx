import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { ContactErrorInner } from '~/components/contact/ContactErrorInner'

const ContactError: NextPage = () => {
  const router = useRouter()
  const { appState } = useContext(AppContext)

  useEffectOnce(() => {
    if (!appState.formTmpData) {
      router.push('/contact')
    }
  })

  return (
    <>
      <Head>
        <title>エラー | お問い合わせ | YURUPPE.inc</title>
      </Head>

      <main>
        <ContactErrorInner />
      </main>
    </>
  )
}

export default ContactError
