/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Link } from "react-router-dom";
import BookCard from "../../components/Books/BookCard";
import BooksFilter from "../../components/Books/BooksFilter";
import { IBook } from "../../interfaces/book.interfaces";
import { useGetBooksQuery } from "../../redux/features/books/booksSlice";

export default function AllBooks() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    pollingInterval: 10000,
  });

  let gettingBooks;

  if (isLoading) {
    gettingBooks = (
      <p className="items-center text-2xl font-extrabold">Loading...</p>
    );
  }

  if (!isError && !isLoading && data?.data?.length === 0) {
    <div className="items-center text-2xl font-extrabold">No Books Found</div>;
  }

  if (!isLoading && data?.data?.length > 0) {
    gettingBooks = data?.data?.map((book: IBook) => (
      <BookCard book={book} key={book._id} />
    ));
  }

  return (
    <div>
      <section className="px-[15px] lg:px-0 py-3  ">
        <div className="flex pl-10 pb-5 ">
          <Link to="/add-new-book">
            <button className="border-2 border-black font-semibold hover:text-white hover:bg-black duration-300 ease-in-out transition-all px-2 py-1 rounded-md">
              Add New Book
            </button>
          </Link>
        </div>
        <div className="container mx-auto  ">
          <div className="md:grid grid-cols-12 items-start gap-8">
            {/* Books */}
            <div className="col-span-9 bg-gray-200 shadow-book-details-card rounded-md p-3">
              <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-5 ">{gettingBooks}</div>
              </div>
            </div>
            {/* Filter */}
            <div className="col-span-3 shadow-book-details-card bg-white mb-8 md:mb-0">
              {/* search Filtering */}
              <BooksFilter />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
