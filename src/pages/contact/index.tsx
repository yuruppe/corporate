import { NextPage } from 'next'
import { ContactInner } from '~/components/contact/ContactInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

const Contact: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Meta id="contact_index" />

      <main>
        <ContactInner />
      </main>
    </>
  )
}

export default Contact
