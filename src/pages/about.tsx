import { NextPage } from 'next'
import Head from 'next/head'
import { PageInner } from '~/components/layout/PageInner'
import { AboutInner } from '~/components/about/AboutInner'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | YURUPPE.inc</title>
      </Head>

      <PageInner>
        <AboutInner />
      </PageInner>
    </>
  )
}

export default About
