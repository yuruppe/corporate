import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Blog.module.scss'
import Link from 'next/link'
import axios from 'axios'
import { BlogType } from '~/types/Blog'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'

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

      <section className={style.main}>
        <div className={style.head}>
          <h1 className={style.title}>
            <img src="/img/page/blogTitle.png" alt="ウラ話" />
          </h1>
        </div>
        <div className={style.body}>
          <ul className={style.list}>
            {blogs.map((blog, index) => (
              <li className={style.item} key={index}>
                <Link href={`/blog/${blog.id}`}>
                  <a>
                    <div className={style.itemInner}>
                      <div className={style.img}>
                        <img src={blog.thumbnail.url} alt="" />
                      </div>
                      <ul className={style.tagList}>
                        {Array.isArray(blog.tags) ? (
                          <>
                            {blog.tags.map((tag, index) => (
                              <li className={style.tagItem} key={index}>
                                <span>{tag}</span>
                              </li>
                            ))}
                          </>
                        ) : (
                          <li className={style.tagItem}>
                            <span>{blog.tags}</span>
                          </li>
                        )}
                      </ul>
                      <h2 className={style.itemTitle}>{blog.title}</h2>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={style.backWrap}>
          <div className={style.back}>
            <Link href="/">
              <span>もどる</span>
            </Link>
          </div>
        </div> */}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props
}> => {
  const key = {
    headers: { 'X-API-KEY': process.env.X_API_KEY }
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
      blogs: data
    }
  }
}

export default BlogIndex
