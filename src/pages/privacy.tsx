import { NextPage } from 'next'
import { Meta } from '~/components/layout/Meta'
import { PrivacyInner } from '~/components/privacy/PrivacyInner'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Meta id="privacy" />

      <main>
        <PrivacyInner />
      </main>
    </>
  )
}

export default Home
