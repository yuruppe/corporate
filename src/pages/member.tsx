import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Member.module.scss'
import Link from 'next/link'
import axios from 'axios'
import { CoverImageUserID, MemberType } from '~/types/Member'
import { MemberItem } from '~/components/member/MemberItem'

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

      <section className={style.main}>
        <div className={style.head}>
          <h1 className={style.title}>
            <img src="/img/page/memberTitle.png" alt="メンバー" />
          </h1>
        </div>
        <div className={style.cover}>
          <img src={coverURL} alt="" />
        </div>
        <div className={style.body}>
          <ul className={style.list}>
            {members.map((member) => (
              <MemberItem member={member} key={member.id} />
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
      coverURL
    }
  }
}

export default Member