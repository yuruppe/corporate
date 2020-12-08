import { NextPage } from 'next'
import { ErrorInner } from '~/components/error/ErrorInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

const Error: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Meta id="error" />

      <main>
        <ErrorInner />
      </main>
    </>
  )
}

export default Error
