import { GetStaticProps, NextPage } from 'next'
import { ContactConfirmInner } from '~/components/contact/ContactConfirmInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

type Props = {
  endPoint: string
  xWriteApiKey: string
}

const ContactConfirm: NextPage<Props> = ({ endPoint, xWriteApiKey }) => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Meta id="contact_confirm" />

      <main>
        <ContactConfirmInner endPoint={endPoint} xWriteApiKey={xWriteApiKey} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      endPoint: process.env.END_POINT,
      xWriteApiKey: process.env.X_WRITE_API_KEY,
    },
  }
}

export default ContactConfirm
