import { NextPage } from 'next'
import { ErrorInner } from '~/components/error/ErrorInner'
import { Meta } from '~/components/layout/Meta'

const Error: NextPage = () => {
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
