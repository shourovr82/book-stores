import { Link } from "react-router-dom";

const MyBooksBar = () => {
  return (
    <div className="col-span-3 shadow-book-details-card bg-white mb-8 md:mb-0 flex flex-col gap-10 p-10 text-lg">
      <Link
        to="/my-books"
        className="px-8 py-2 bg-gray-50 hover:bg-gray-200 rounded-lg text-center"
      >
        My Books
      </Link>
      <Link
        to="/my-books/wishlist"
        className="px-8 py-2 bg-gray-50 hover:bg-gray-200 rounded-lg text-center"
      >
        Wishlist
      </Link>
      <Link
        to="/my-books/reading"
        className="px-8 py-2 bg-gray-50 hover:bg-gray-200 rounded-lg text-center"
      >
        Reading
      </Link>
    </div>
  );
};

export default MyBooksBar;
