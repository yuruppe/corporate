import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import ErrorPage from 'next/error'
import { WorksType } from '~/types/Works'
import { WorksDetailInner } from '~/components/works/WorksDetailInner'
import { Meta } from '~/components/layout/Meta'

type Props = {
  work: WorksType
  description: string
}

const WorksDetail: NextPage<Props> = ({ work, description }) => {
  if (!work) {
    return <ErrorPage statusCode={404} />
  }

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
        <WorksDetailInner work={work} />
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
  // プレビュー時は draft のコンテンツを追加
  // if (preview) {
  //   const draftUrl =
  //     process.env.END_POINT +
  //     'portfolios/' +
  //     previewData.id +
  //     `?draftKey=${previewData.draftKey}`
  //   const draftRes = await axios.get(draftUrl, key)
  //   data.unshift(await draftRes.data)
  // }
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
  return {
    props: {
      work: content,
      description: rawDetail,
    },
  }
}

export default WorksDetail
