export type Post = {
  _id: string;
  tittle: string;
  abstract: string;
  category: string;
  cover: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
};

export type CloudNativeStory = {
  articleId: Post;
  createdAt: Date;
  updatedAt: string;
};

export type SignedInUser = {
  _id: string;
  email: string;
  username: string;
  isVerified: boolean;
};

export type BlogCommentsProps = {
  articleId: string;
  username: string | undefined;
};

//MODAL STATE TYPES
export type AuthModalState = {
  isOpen: boolean;
};

export type DeleteModalState = {
  isOpen: boolean;
  articleId: string;
};

//EDITOR
export type EditorContent = {
  tittle: string;
  articleImage: FileList | null;
  content: any;
};

//SINGLE POST

export type ArticleData = {
  articleData: EditorContent;
};

export type CommentProps = {
  articleId: string;
  commentorName: string | undefined;
};

export type Comment = {
  commenter: string;
  article: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
};

export type PaginationState = {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
};
