import { NextPage } from 'next'
import Head from 'next/head'
import { ContactInner } from '~/components/contact/ContactInner'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ | YURUPPE.inc</title>
      </Head>

      <main>
        <ContactInner />
      </main>
    </>
  )
}

export default Contact
