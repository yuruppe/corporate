import Head from 'next/head'
import { routeNameList } from '~/types/meta'
import { metaData } from '~/utils/metaData'

type Props = {
  id: routeNameList
  dynamic?: {
    title: string
    description: string
    ogp: string
    path: string
  }
}

const Meta: React.FC<Props> = ({ id, dynamic }) => {
  const data = metaData.pages.find((page) => page.id === id)

  let _title = data.title
  let _description = data.description
  let _ogp = metaData.meta.domain + metaData.meta.ogpImagePath
  let _path = data.path

  if (id === 'tsukutta_id' || id === 'urabanashi_id') {
    _title = dynamic.title
    _description = dynamic.description
    _ogp = dynamic.ogp
    _path = data.path + dynamic.path
    if (id === 'tsukutta_id') {
      _title += ' | つくったもの | YURUPPE.inc'
    }
    if (id === 'urabanashi_id') {
      _title += ' | ウラ話 | YURUPPE.inc'
    }
  }
  if (id !== 'index' && !dynamic) {
    const top = metaData.pages.find((page) => page.id === 'index')
    _description += top.description
  }

  return (
    <Head>
      <title>{_title}</title>
      <link rel="canonical" href={metaData.meta.domain + _path} />
      <meta name="description" content={_description} />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta property="og:site_name" content={_title} />
      <meta property="og:image" content={_ogp} />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:description" content={_description} />
      <meta name="twitter:image" content={_ogp} />
    </Head>
  )
}

export { Meta }
