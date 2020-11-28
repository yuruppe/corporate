import { NextPage } from 'next'
import { AboutInner } from '~/components/about/AboutInner'
import { Meta } from '~/components/layout/Meta'

const About: NextPage = () => {
  return (
    <>
      <Meta id="about" />

      <main>
        <AboutInner />
      </main>
    </>
  )
}

export default About
