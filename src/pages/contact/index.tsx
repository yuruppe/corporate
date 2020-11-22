import { NextPage } from 'next'
import Head from 'next/head'
import { ContactInner } from '~/components/contact/ContactInner'
import { PageInner } from '~/components/layout/PageInner'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ | YURUPPE.inc</title>
      </Head>

      <PageInner>
        <ContactInner />
      </PageInner>
    </>
  )
}

export default Contact
