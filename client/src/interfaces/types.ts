export type Post  = {
    _id: string,
    tittle: string,
    abstract: string,
    category: string,
    imgfile: string,
    author: string,
    createdAt: Date,
    updatedAt: Date,
    article: string,
}

export type CloudNativeStory = {
  articleId: Post,
  createdAt: Date,
  updatedAt: string
}

export type SignedInUser = {
  _id: string,
  email: string,
  username: string,
  isVerified: boolean
}

export type BlogCommentsProps = {
  articleId: string,
  username: string | undefined,
}

//MODAL STATE TYPES
export type AuthModalState = {
  isOpen: boolean
}