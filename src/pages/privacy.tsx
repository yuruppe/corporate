import { NextPage } from 'next'
import Head from 'next/head'
import { PrivacyInner } from '~/components/privacy/PrivacyInner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | YURUPPE.inc</title>
      </Head>

      <main>
        <PrivacyInner />
      </main>
    </>
  )
}

export default Home
