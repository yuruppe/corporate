import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import cn from 'classnames'
import axios from 'axios'
import ErrorPage from 'next/error'
import ReactPlayer from 'react-player'
import { WorksType } from '~/types/Works'
import style from '~/styles/components/page/WorksDetail.module.scss'
import { Picture } from '~/components/common/Picture'

type Props = {
  work: WorksType
}

const WorksDetail: NextPage<Props> = ({ work }) => {
  if (!work) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{`${work.title} | つくったやつ | YURUPPE.inc`}</title>
      </Head>
      <section className={style.main}>
        <div className={style.head}>
          <h2 className={style.title}>
            <Picture
              webp={require('@public/img/page/worksTitle.png?webp')}
              img={require('@public/img/page/worksTitle.png')}
              alt="つくったやつ"
            />
          </h2>
        </div>
        <div className={cn(style.cover, { [style.movie]: work.movie })}>
          {work.movie ? (
            <>
              <ReactPlayer
                url={work.movie}
                width="100%"
                height="100%"
                controls
                playsinline
              />
            </>
          ) : (
            <>
              <Picture
                webp={`${work.thumbnail.url}?fm=webp`}
                img={work.thumbnail.url}
              />
            </>
          )}
        </div>
        <div className={style.body}>
          <div className={style.heading}>
            <ul className={style.tagList}>
              {Array.isArray(work.tags) ? (
                <>
                  {work.tags.map((tag, index) => (
                    <li className={style.tagItem} key={index}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </>
              ) : (
                <li className={style.tagItem}>
                  <span>{work.tags}</span>
                </li>
              )}
            </ul>
            <h1 className={style.workTitle}>{work.title}</h1>
          </div>
          <div className={style.desc}>
            <h2 className={style.desc__title}>せつめい</h2>
            {Array.isArray(work.detail) ? (
              <>
                {work.detail.map((d, index) => (
                  <p className={style.desc__text} key={index}>
                    {d}
                  </p>
                ))}
              </>
            ) : (
              <p className={style.desc__text}>{work.detail}</p>
            )}
            {work.links.length > 0 ? (
              <div className={style.desc__link}>
                {work.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.desc__anchor}
                  >
                    {link.link_name}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <div className={style.credit}>
            <h2 className={style.credit__title}>つくった人たち</h2>
            {work.credits.map((credit, index) => (
              <dl key={index} className={style.credit__item}>
                <dt className={style.credit__role}>{credit.role}</dt>
                <dd className={style.credit__name}>{credit.name}</dd>
              </dl>
            ))}
          </div>
        </div>
        <div className={style.backWrap}>
          <div className={style.back}>
            <Link href="/works">
              <a>
                <span>一覧にもどる</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
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
  if (preview) {
    const draftUrl =
      process.env.END_POINT +
      'portfolios/' +
      previewData.id +
      `?draftKey=${previewData.draftKey}`
    const draftRes = await axios.get(draftUrl, key)
    data.unshift(await draftRes.data)
  }
  let content: WorksType | '' = data.find((item) => {
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
  return {
    props: {
      work: content,
    },
  }
}

export default WorksDetail
