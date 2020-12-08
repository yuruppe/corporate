import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import ErrorPage from 'next/error'
import { BlogType } from '~/types/Blog'
import { MemberType } from '~/types/Member'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import { BlogDetailInner } from '~/components/blog/BlogDetailInner'
import { Meta } from '~/components/layout/Meta'
import { TopRecType } from '~/types/top'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

type Props = {
  blog: BlogType
  authorData: MemberType
  recommended: BlogType[]
}

const BlogDetail: NextPage<Props> = ({ blog, authorData, recommended }) => {
  if (!blog) {
    return <ErrorPage statusCode={404} />
  }
  gsap.registerPlugin(ScrollTrigger)
  const { appDispatch } = useContext(AppContext)

  useEffect(() => {
    appDispatch({ type: 'SET_DARK_MODE', value: true })
    return (): void => {
      appDispatch({ type: 'SET_DARK_MODE', value: false })
    }
  }, [])

  return (
    <>
      <Meta
        id="urabanashi_id"
        dynamic={{
          title: blog.title,
          description: blog.meta_description,
          ogp: blog.thumbnail.url,
          path: blog.id,
        }}
      />

      <main>
        <BlogDetailInner
          blog={blog}
          authorData={authorData}
          recommended={recommended}
        />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  }
  const res = await axios.get(process.env.END_POINT + 'blog/?limit=9999', key)
  const data: Array<BlogType> = await res.data.contents
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
  const res = await axios.get(process.env.END_POINT + 'blog/?limit=9999', key)
  const data: Array<BlogType> = await res.data.contents
  // プレビュー時は draft のコンテンツを追加
  if (preview) {
    const draftUrl =
      process.env.END_POINT +
      'blog/' +
      previewData.id +
      `?draftKey=${previewData.draftKey}`
    const draftRes = await axios.get(draftUrl, key)
    data.unshift(await draftRes.data)
  }
  let content: BlogType | '' = data.find((item) => {
    return item.id === params?.id
  })

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
   * member
   */
  let authorData: MemberType
  if (content !== '') {
    const memberRes = await axios.get(
      process.env.END_POINT + `member/${content.author[0]}`,
      key,
    )
    authorData = await memberRes.data
  }

  /**
   * recommended
   */
  const recommendedRes = await axios.get(
    process.env.END_POINT + 'top/main',
    key,
  )
  const recommendedData = await recommendedRes.data
  const recommended: TopRecType[] = recommendedData.blog_rec

  const BlogData: Array<BlogType> = await res.data.contents
  const recBlogData = BlogData.filter((blog) => {
    return recommended.find((rec) => {
      return rec.blog_rec_id === blog.id
    })
  })
  recBlogData.map((d) => {
    if (typeof d.tags === 'string') {
      if (d.tags.split(',').length > 1) {
        d.tags = d.tags.toString().split(',')
      }
    }
    return d
  })

  return {
    props: {
      blog: content,
      authorData,
      recommended: recBlogData,
    },
  }
}

export default BlogDetail
