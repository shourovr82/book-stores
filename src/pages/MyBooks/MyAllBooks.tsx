import { IBook } from "../../interfaces/book.interfaces";
import { useGetMyBookQuery } from "../../redux/features/books/booksSlice";

export default function MyAllBooks() {
  const { data = {} } = useGetMyBookQuery(undefined);
  const { data: books } = data;

  return (
    <section>
      {" "}
      <p className="font-extrabold text-3xl  text-center mb-5">My Book List</p>
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 text-red-500 font-extrabold">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Author
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Genre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Publish Date
            </th>
          </tr>
        </thead>
        {!books?.length && (
          <p className="p-10 text-red-800 font-semibold text-xl">
            No book found !
          </p>
        )}
        <tbody className="bg-white divide-y divide-gray-200">
          {books?.length &&
            books?.map((book: IBook) => (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {book?.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{book?.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{book?.genre}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {book?.publicationDate}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
