import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { CoverImageUserID, MemberType } from '~/types/Member'
import { MemberInner } from '~/components/member/MemberInner'

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

      <main>
        <MemberInner members={members} coverURL={coverURL} />
      </main>
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
