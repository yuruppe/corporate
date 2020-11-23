import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { HomeInner } from '~/components/index/HomeInner'

type Props = {
  description: any
}

const Home: NextPage<Props> = ({ description }) => {
  return (
    <>
      <Head>
        <title>YURUPPE.inc</title>
      </Head>

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
