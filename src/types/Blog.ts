export type BlogType = {
  id: string
  tags: string | string[]
  title: string
  thumbnail: { url: string }
  author: string
  date: string
  detail: any
  meta_description: string
}
