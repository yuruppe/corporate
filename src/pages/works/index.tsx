import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { WorksType } from '~/types/Works'
import { PageInner } from '~/components/layout/PageInner'
import { WorksIndexInner } from '~/components/works/WorksIndexInner'

type Props = {
  works: WorksType[]
}

const WorksIndex: NextPage<Props> = ({ works }) => {
  return (
    <>
      <Head>
        <title>つくったやつ | YURUPPE.inc</title>
      </Head>

      <PageInner>
        <WorksIndexInner works={works} />
      </PageInner>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props
}> => {
  const key = {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  }
  const res = await axios.get(process.env.END_POINT + 'works/?limit=9999', key)
  const data: Array<WorksType> = await res.data.contents

  // data.reverse()

  data.map((d) => {
    if (typeof d.tags === 'string') {
      if (d.tags.split(',').length > 1) {
        d.tags = d.tags.toString().split(',')
      }
    }
    if (typeof d.detail === 'string') {
      d.detail = d.detail.split('\n')
    }
    return d
  })

  return {
    props: {
      works: data,
    },
  }
}

export default WorksIndex
