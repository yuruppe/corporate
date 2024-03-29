import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { BlogType } from '~/types/Blog'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import { BlogIndexInner } from '~/components/blog/BlogIndexInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

type Props = {
  blogs: BlogType[]
}

const BlogIndex: NextPage<Props> = ({ blogs }) => {
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
      <Meta id="urabanashi_idnex" />

      <main>
        <BlogIndexInner blogs={blogs} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}): Promise<{
  props: Props
}> => {
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

  // data.reverse()

  data.map((d) => {
    if (typeof d.tags === 'string') {
      if (d.tags.split(',').length > 1) {
        d.tags = d.tags.toString().split(',')
      }
    }
    // if (typeof d.detail === 'string') {
    //   d.detail = d.detail.split('\n')
    // }
    return d
  })

  return {
    props: {
      blogs: data,
    },
  }
}

export default BlogIndex
