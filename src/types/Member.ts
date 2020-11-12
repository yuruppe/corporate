export type MemberType = {
  id: string
  name: string
  role: string
  description: string | string[]
  twitter: string
  instagram: string
  vimeo: string
  facebook: string
  icon: { url: string }
  cover?: { url: string }
}

export const CoverImageUserID = 'yp__'
