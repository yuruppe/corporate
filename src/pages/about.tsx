import { NextPage } from 'next'
import Head from 'next/head'
import { AboutInner } from '~/components/about/AboutInner'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | YURUPPE.inc</title>
      </Head>

      <main>
        <AboutInner />
      </main>
    </>
  )
}

export default About
