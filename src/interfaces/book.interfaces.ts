export type IBook = {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  price?: number;
  image?: string;
  description?: string;
};
export interface IProps {
  book: IBook;
}
