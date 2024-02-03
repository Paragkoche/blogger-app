export type AdminSchemaType = {
  id: string;
  emailId: string;
  password: string;
  username: string;
  bio: string;
  joinedAt: string;
  blogs?: BlogSchemaType[];
  subs?: UserSchemeType[];
};
export type BlogSchemaType = {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  views: string;
  createAt: string;
  likeBy?: UserSchemeType[];
  comments?: CommentsSchemeType[];
};
export type UserSchemeType = {
  id: string;
  emailId: string;
  password: string;
};

export type CommentsSchemeType = {
  id: string;
  comment: string;
  user: UserSchemeType;
  likes?: UserSchemeType[];
  comments?: CommentsSchemeType[];
};
