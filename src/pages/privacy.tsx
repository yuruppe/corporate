import { NextPage } from 'next'
import { Meta } from '~/components/layout/Meta'
import { PrivacyInner } from '~/components/privacy/PrivacyInner'

const Home: NextPage = () => {
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
