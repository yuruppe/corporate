import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import { useEffectOnce } from '~/hooks/useEffectOnce'
import { ContactCompleteInner } from '~/components/contact/ContactCompleteInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

const ContactComplete: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  const router = useRouter()
  const { appState, appDispatch } = useContext(AppContext)

  useEffectOnce(() => {
    if (!appState.formTmpData) {
      router.push('/contact')
    } else {
      appDispatch({ type: 'REMOVE_POST_DATA' })
    }
  })

  return (
    <>
      <Meta id="contact_complete" />

      <main>
        <ContactCompleteInner />
      </main>
    </>
  )
}

export default ContactComplete
