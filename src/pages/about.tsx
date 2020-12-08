import { NextPage } from 'next'
import { AboutInner } from '~/components/about/AboutInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

const About: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger)
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
