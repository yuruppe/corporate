export type TopRecType = {
  blog_rec_id: string
  fieldId: 'blog_rec_list'
  memo: string
}

export type TopType = {
  description: any
  blog_rec: TopRecType[]
}
