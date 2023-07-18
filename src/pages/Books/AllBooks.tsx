/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../../components/Books/BookCard";
import { IBook } from "../../interfaces/book.interfaces";
import { useGetBooksQuery } from "../../redux/features/books/booksSlice";

export default function AllBooks() {
  const [filterText, setFilterText] = useState({
    filterName: "",
    filterValue: "",
  });

  const { data, isLoading, isError } = useGetBooksQuery(filterText);

  let gettingBooks;

  if (isLoading) {
    gettingBooks = (
      <p className="items-center text-2xl font-extrabold">Loading...</p>
    );
  }

  if (!isLoading && data?.data?.length > 0) {
    gettingBooks = data?.data?.map((book: IBook) => (
      <BookCard book={book} key={book._id} />
    ));
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = e.target.name;
    const filterValue = e.target.value;
    if (filterValue) setFilterText({ filterName, filterValue });
    if (!filterValue) setFilterText({ filterName: "", filterValue: "" });
  };

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
                {!data?.data?.length && !isError && !isLoading && (
                  <div className="items-center text-2xl font-extrabold">
                    No Books Found
                  </div>
                )}
                {isError && (
                  <div className="items-center text-2xl text-red-800 font-extrabold">
                    Something error occurred !!!
                  </div>
                )}

                <div className="grid grid-cols-4 gap-5 ">{gettingBooks}</div>
              </div>
            </div>
            {/* Filter */}
            <div className="col-span-3 shadow-book-details-card bg-white mb-8 md:mb-0">
              {/* search Filtering */}
              <div>
                {/* Search bar */}
                <div className="border-b border-[#dadada]">
                  <div className="border-b border-[#dadada] py-3">
                    <h4 className="text-lg   font-semibold text-[#333] px-5 capitalize">
                      Search
                    </h4>
                  </div>
                  <div className="py-5 space-y-1">
                    <div className="flex items-center px-5">
                      <input
                        type="text"
                        name="searchTerm"
                        onChange={(e) => handleFilter(e)}
                        placeholder="Search"
                        className="w-full border-black shadow-inner border rounded-md shadow-gray-300 py-2 px-3 focus:outline-none focus:ring-1"
                      />
                    </div>
                  </div>
                </div>
                {/* Genre Filtering */}
                <div className="border-b border-[#dadada]">
                  <div className="border-b border-[#dadada] py-3">
                    <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                      Genre
                    </h4>
                  </div>
                  <div className="py-5 space-y-1">
                    <div className="flex items-center px-5">
                      <input
                        type="text"
                        name="genre"
                        onChange={(e) => handleFilter(e)}
                        placeholder="Search"
                        className="w-full border-black shadow-inner border rounded-md shadow-gray-300 py-2 px-3 focus:outline-none focus:ring-1 "
                      />
                    </div>
                  </div>
                </div>
                <div className="border-b border-[#dadada] py-3">
                  <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                    publication year
                  </h4>
                </div>
                <div className="py-5 space-y-1">
                  <div className="flex items-center px-5">
                    <input
                      type="text"
                      name="publicationDate"
                      onChange={(e) => handleFilter(e)}
                      placeholder="Search"
                      className="w-full border-black shadow-inner border rounded-md shadow-gray-300 py-2 px-3 focus:outline-none focus:ring-1 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
