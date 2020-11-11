import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Works.module.scss'
import Link from 'next/link'
import axios from 'axios'
import { WorksType } from '~/types/Works'

type Props = {
  works: WorksType[]
}

const WorksIndex: NextPage<Props> = ({ works }) => {
  return (
    <>
      <Head>
        <title>つくったやつ | YURUPPE.inc</title>
      </Head>

      <section className={style.main}>
        <div className={style.head}>
          <h1 className={style.title}>
            <img src="/img/page/worksTitle.png" alt="つくったやつ" />
          </h1>
        </div>
        <div className={style.body}>
          <ul className={style.list}>
            {works.map((work, index) => (
              <li className={style.item} key={index}>
                <Link href={`/works/${work.id}`}>
                  <div className={style.itemInner}>
                    <div className={style.img}>
                      <img src={work.thumbnail.url} alt="" />
                    </div>
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
                    <h2 className={style.itemTitle}>{work.title}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.backWrap}>
          <div className={style.back}>
            <Link href="/">
              <span>もどる</span>
            </Link>
          </div>
        </div>
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
  const res = await axios.get(process.env.END_POINT + 'works/?limit=9999', key)
  const data: Array<WorksType> = await res.data.contents

  data.reverse()

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
      works: data
    }
  }
}

export default WorksIndex
