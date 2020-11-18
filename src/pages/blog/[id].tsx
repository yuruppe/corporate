import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import cn from 'classnames'
import axios from 'axios'
import ErrorPage from 'next/error'
import style from '~/styles/components/page/BlogDetail.module.scss'
import { BlogType } from '~/types/Blog'
import { MemberType } from '~/types/Member'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import { Picture } from '~/components/common/Picture'
import { PageInner } from '~/components/layout/PageInner'
import { CustomLink } from '~/components/common/CustomLink'

type Props = {
  blog: BlogType
  authorData: MemberType
}

const BlogDetail: NextPage<Props> = ({ blog, authorData }) => {
  if (!blog) {
    return <ErrorPage statusCode={404} />
  }
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
        <title>{`${blog.title} | ウラ話 | YURUPPE.inc`}</title>
      </Head>
      <PageInner>
        <div className={style.main}>
          <div className={style.head}>
            <h2 className={style.title}>
              <Picture
                webp={require('@public/img/page/blogTitle.png?webp')}
                img={require('@public/img/page/blogTitle.png')}
                alt="ウラ話"
              />
            </h2>
          </div>
          <div className={style.cover}>
            <Picture
              webp={`${blog.thumbnail.url}?fm=webp`}
              img={blog.thumbnail.url}
            />
          </div>
          <div className={style.body}>
            <div className={style.heading}>
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
              <h1 className={style.blogTitle}>{blog.title}</h1>
            </div>
            <div className={style.desc}>
              <div className={style.desc__member}>
                <div className={style.desc__memberImg}>
                  <Picture
                    webp={`${authorData.icon.url}?webp`}
                    img={authorData.icon.url}
                  />
                </div>
                <div className={style.desc__memberText}>
                  <span>{authorData.name}</span>
                  <span>
                    {blog.date
                      .split('T')[0]
                      .replace('-', '/')
                      .replace('-', '/')}
                  </span>
                </div>
              </div>
              <div
                className={style.content}
                dangerouslySetInnerHTML={{ __html: blog.detail }}
              ></div>
            </div>
          </div>
          <div className={style.backWrap}>
            <div className={style.back}>
              <CustomLink href="/blog">
                <span>一覧にもどる</span>
              </CustomLink>
            </div>
          </div>
        </div>
      </PageInner>
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
      'portfolios/' +
      previewData.id +
      `?draftKey=${previewData.draftKey}`
    const draftRes = await axios.get(draftUrl, key)
    data.unshift(await draftRes.data)
  }
  let content: BlogType | '' = data.find((item) => {
    return item.id === params?.id
  })

  const memberRes = await axios.get(
    process.env.END_POINT + `member/${content.author[0]}`,
    key,
  )
  const authorData: MemberType = await memberRes.data

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
      blog: content,
      authorData,
    },
  }
}

export default BlogDetail
