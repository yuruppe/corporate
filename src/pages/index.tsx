import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { HomeInner } from '~/components/index/HomeInner'
import { Meta } from '~/components/layout/Meta'

type Props = {
  description: any
}

const Home: NextPage<Props> = ({ description }) => {
  return (
    <>
      <Meta id="index" />

      <main>
        <HomeInner description={description} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props
}> => {
  const key = {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  }
  const res = await axios.get(process.env.END_POINT + 'top/main', key)
  const data: any = await res.data.description

  return {
    props: {
      description: data,
    },
  }
}

export default Home
