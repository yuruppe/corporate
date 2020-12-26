import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { WorksType } from '~/types/Works'
import { WorksIndexInner } from '~/components/works/WorksIndexInner'
import { Meta } from '~/components/layout/Meta'
import gsap from 'gsap'
import { ScrollTrigger } from '~/utils/ScrollTrigger'
import { WorksModal } from '~/components/works/WorsModal'
import { TopType } from '~/types/top'

type Props = {
  works: WorksType[]
  reelId: string
  reelText: string | string[]
}

const WorksIndex: NextPage<Props> = ({ works, reelId, reelText }) => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Meta id="tsukutta_index" />

      <main>
        <WorksIndexInner works={works} reelId={reelId} />
        <WorksModal
          work={works.find((d) => d.id === reelId)}
          reelText={reelText}
        />
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
  const res = await axios.get(process.env.END_POINT + 'works/?limit=9999', key)
  const data: Array<WorksType> = await res.data.contents

  // data.reverse()

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

  const topRes = await axios.get(process.env.END_POINT + 'top/main', key)

  const topData: TopType = await topRes.data
  const reelId = topData.work_reel_id
  let reelText: string | string[]
  if (typeof topData.work_reel_text === 'string') {
    reelText = topData.work_reel_text.split('\n')
  } else {
    reelText = topData.work_reel_text
  }

  return {
    props: {
      works: data,
      reelId,
      reelText,
    },
  }
}

export default WorksIndex
