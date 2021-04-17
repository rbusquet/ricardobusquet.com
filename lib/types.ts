export interface Post {
  id: string
  date: string
  title: string
  code: string
  categories?: string[]
  coverImage: string
  credits: string
  fileContents?: string
}

export type PostTuple = [date: string, id: string, title: string]
