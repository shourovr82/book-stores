export type IBook = {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  price?: number;
  image?: string;
  description?: string;
  email?: string;
  name: string;
  userId: string;
};
export interface IProps {
  book: IBook;
}

export type IReview = {
  _id?: string;
  review: string;
  email: string;
  fullName: string;
  userId: string;
};

export type IAuthUser = {
  accessToken: string;
  user: {
    _id?: string;
    email: string;
    fullName: string;
  };
};
