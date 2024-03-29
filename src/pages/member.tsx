import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { CoverImageUserID, MemberType } from '~/types/Member'
import { MemberInner } from '~/components/member/MemberInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'

type Props = {
  members: MemberType[]
  coverURL: string
}

const Member: NextPage<Props> = ({ members, coverURL }) => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Meta id="member" />

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
