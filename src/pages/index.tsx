import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Home.module.scss'
import cn from 'classnames'
import axios from 'axios'
import { PageInner } from '~/components/layout/PageInner'
import { CustomLink } from '~/components/common/CustomLink'

type Props = {
  description: any
}

const Home: NextPage<Props> = ({ description }) => {
  return (
    <>
      <Head>
        <title>YURUPPE.inc</title>
      </Head>

      <PageInner>
        <div className={style.main}>
          <div className={style.inner}>
            <div className={style.innerBack} />
            <h1 className={style.title}>YURUPPE inc.</h1>
            <div
              className={style.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <ul className={style.linkList}>
            <li className={style.linkItem}>
              <CustomLink href="/works" linkClassName={style.linkAnchor}>
                <h2 className={cn(style.linkTitle, style.arrow)}>
                  つくったやつ
                </h2>
              </CustomLink>
            </li>
            <li className={style.linkItem}>
              <CustomLink href="/blog" linkClassName={style.linkAnchor}>
                <h2 className={cn(style.linkTitle, style.arrow)}>ウラ話</h2>
              </CustomLink>
            </li>
            <li className={style.linkItem}>
              <a className={style.linkAnchor}>
                <h2 className={cn(style.linkTitle, style.blank)}>
                  映像屋さんの服
                </h2>
              </a>
            </li>
          </ul>
        </div>
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
  const res = await axios.get(process.env.END_POINT + 'top/main', key)
  const data: any = await res.data.description

  return {
    props: {
      description: data,
    },
  }
}

export default Home
