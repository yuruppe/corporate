import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import ErrorPage from 'next/error'
import { WorksType } from '~/types/Works'
import { WorksDetailInner } from '~/components/works/WorksDetailInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'
import { TopWorkRecType } from '~/types/top'

type Props = {
  work: WorksType
  description: string
  recommended: WorksType[]
}

const WorksDetail: NextPage<Props> = ({ work, description, recommended }) => {
  if (!work) {
    return <ErrorPage statusCode={404} />
  }
  gsap.registerPlugin(ScrollTrigger)

  return (
    <>
      <Meta
        id="tsukutta_id"
        dynamic={{
          title: work.title,
          description: description,
          ogp: work.thumbnail.url,
          path: work.id,
        }}
      />
      <main>
        <WorksDetailInner work={work} recommended={recommended} />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  }
  const res = await axios.get(process.env.END_POINT + 'works/?limit=9999', key)
  const data: Array<WorksType> = await res.data.contents
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData,
}) => {
  const key = {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  }
  const res = await axios.get(process.env.END_POINT + 'works/?limit=9999', key)
  const data: Array<WorksType> = await res.data.contents

  let content: WorksType | '' = data.find((item) => {
    return item.id === params?.id
  })

  const rawDetail = content.detail

  if (!content) {
    content = ''
  } else {
    if (typeof content.tags === 'string') {
      content.tags = content.tags.split(',')
    }
    if (typeof content.detail === 'string') {
      content.detail = content.detail.split('\n')
    }
  }

  /**
   * recommended
   */
  const recommendedRes = await axios.get(
    process.env.END_POINT + 'top/main',
    key,
  )
  const recommendedData = await recommendedRes.data
  const recommended: TopWorkRecType[] = recommendedData.work_rec

  const WorkData: Array<WorksType> = await res.data.contents
  const recWorkData = WorkData.filter((work) => {
    return recommended.find((rec) => {
      return rec.work_rec_id === work.id
    })
  })
  recWorkData.map((d) => {
    if (typeof d.tags === 'string') {
      if (d.tags.split(',').length > 1) {
        d.tags = d.tags.toString().split(',')
      }
    }
    return d
  })

  return {
    props: {
      work: content,
      description: rawDetail,
      recommended: recWorkData,
    },
  }
}

export default WorksDetail
