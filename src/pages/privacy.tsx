import { NextPage } from 'next'
import Head from 'next/head'
import { PageInner } from '~/components/layout/PageInner'
import { PrivacyInner } from '~/components/privacy/PrivacyInner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | YURUPPE.inc</title>
      </Head>

      <PageInner>
        <PrivacyInner />
      </PageInner>
    </>
  )
}

export default Home
