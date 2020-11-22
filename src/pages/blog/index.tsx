import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { BlogType } from '~/types/Blog'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import { PageInner } from '~/components/layout/PageInner'
import { BlogIndexInner } from '~/components/blog/BlogIndexInner'

type Props = {
  blogs: BlogType[]
}

const BlogIndex: NextPage<Props> = ({ blogs }) => {
  const { appDispatch } = useContext(AppContext)

  useEffect(() => {
    appDispatch({ type: 'SET_DARK_MODE', value: true })
    return (): void => {
      appDispatch({ type: 'SET_DARK_MODE', value: false })
    }
  }, [])

  return (
    <>
      <Head>
        <title>ウラ話 | YURUPPE.inc</title>
      </Head>

      <PageInner>
        <BlogIndexInner blogs={blogs} />
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
  const res = await axios.get(process.env.END_POINT + 'blog/?limit=9999', key)
  const data: Array<BlogType> = await res.data.contents

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
