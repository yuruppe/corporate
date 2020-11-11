export type WorksType = {
  id: string
  tags: string | string[]
  title: string
  thumbnail: { url: string }
  movie: string | undefined
  detail: string | string[]
  links: { fieldId: 'link_item'; link_name: string; link_url: string }[]
  credits: { fieldId: 'credit_item'; name: string; role: string }[]
}
