import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { ContactErrorInner } from '~/components/contact/ContactErrorInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

const ContactError: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  const router = useRouter()
  const { appState } = useContext(AppContext)

  useEffectOnce(() => {
    if (!appState.formTmpData) {
      router.push('/contact')
    }
  })

  return (
    <>
      <Meta id="contact_error" />

      <main>
        <ContactErrorInner />
      </main>
    </>
  )
}

export default ContactError
