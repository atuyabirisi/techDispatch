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
  articleId: Post;
  createdAt: Date;
  updatedAt: string;
}