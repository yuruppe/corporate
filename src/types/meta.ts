export type routeNameList =
  | 'index'
  | 'error'
  | 'member'
  | 'privacy'
  | 'about'
  | 'urabanashi_idnex'
  | 'urabanashi_id'
  | 'tsukutta_index'
  | 'tsukutta_id'
  | 'contact_index'
  | 'contact_confirm'
  | 'contact_complete'
  | 'contact_error'

export type pageDataType = {
  id: routeNameList
  title: string
  description: string
  path: string
}

export type metaDataType = {
  meta: {
    domain: string
    ogpImagePath: string
    type: 'website' | 'article'
    websiteName: string
  }
  pages: pageDataType[]
}
