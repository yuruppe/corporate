export type TopRecType = {
  blog_rec_id: string
  fieldId: 'blog_rec_list'
  memo: string
}
export type TopWorkRecType = {
  fieldId: 'work_rec_list'
  memo: string
  work_rec_id: string
}

export type TopType = {
  description: any
  blog_rec: TopRecType[]
  work_rec: TopWorkRecType[]
}
