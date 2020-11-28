import { NextPage } from 'next'
import { ContactInner } from '~/components/contact/ContactInner'
import { Meta } from '~/components/layout/Meta'

const Contact: NextPage = () => {
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
