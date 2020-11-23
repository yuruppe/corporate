import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { ContactCompleteInner } from '~/components/contact/ContactCompleteInner'

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

      <main>
        <ContactCompleteInner />
      </main>
    </>
  )
}

export default ContactComplete
