/* eslint-disable @typescript-eslint/no-var-requires */
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Member.module.scss'
import axios from 'axios'
import { CoverImageUserID, MemberType } from '~/types/Member'
import { MemberItem } from '~/components/member/MemberItem'
import { Picture } from '~/components/common/Picture'
import { PageInner } from '~/components/layout/PageInner'
import { CustomLink } from '~/components/common/CustomLink'

type Props = {
  members: MemberType[]
  coverURL: string
}

const Member: NextPage<Props> = ({ members, coverURL }) => {
  return (
    <>
      <Head>
        <title>Member | YURUPPE.inc</title>
      </Head>

      <PageInner>
        <div className={style.main}>
          <div className={style.head}>
            <h1 className={style.title}>
              <Picture
                webp={require('@public/img/page/memberTitle.png?webp')}
                img={require('@public/img/page/memberTitle.png')}
                alt="メンバー"
              />
            </h1>
          </div>
          <div className={style.inner}>
            <div className={style.cover}>
              <Picture webp={`${coverURL}?fm=webp`} img={coverURL} />
            </div>
            <div className={style.bodyWrap}>
              <div className={style.body}>
                <ul className={style.list}>
                  {members.map((member) => (
                    <MemberItem member={member} key={member.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.backWrap}>
            <div className={style.back}>
              <CustomLink href="/">
                <span>もどる</span>
              </CustomLink>
            </div>
          </div>
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
  const res = await axios.get(process.env.END_POINT + 'member/?limit=9999', key)
  const data: Array<MemberType> = await res.data.contents

  data.reverse()

  const mainMember = data.find((d) => d.id === CoverImageUserID)
  const coverURL = mainMember.cover.url

  data.map((d) => {
    if (typeof d.description === 'string') {
      return (d.description = d.description.split('\n'))
    }
  })

  return {
    props: {
      members: data,
      coverURL,
    },
  }
}

export default Member
