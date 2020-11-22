import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { PageInner } from '~/components/layout/PageInner'
import { ContactConfirmInner } from '~/components/contact/ContactConfirmInner'

type Props = {
  endPoint: string
  xWriteApiKey: string
}

const ContactConfirm: NextPage<Props> = ({ endPoint, xWriteApiKey }) => {
  return (
    <>
      <Head>
        <title>確認 | お問い合わせ | YURUPPE.inc</title>
      </Head>

      <PageInner>
        <ContactConfirmInner endPoint={endPoint} xWriteApiKey={xWriteApiKey} />
      </PageInner>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      endPoint: process.env.END_POINT,
      xWriteApiKey: process.env.X_WRITE_API_KEY,
    },
  }
}

export default ContactConfirm
