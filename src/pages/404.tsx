import { NextPage } from 'next'
import Head from 'next/head'
import { ErrorInner } from '~/components/error/ErrorInner'

const Error: NextPage = () => {
  return (
    <>
      <Head>
        <title>エラー | YURUPPE.inc</title>
      </Head>

      <main>
        <ErrorInner />
      </main>
    </>
  )
}

export default Error
