import { IReadingList } from "../../interfaces/book.interfaces";
import { useGetMyReadingListsQuery } from "../../redux/features/readingList/readingLIstSlice";
import { useAppSelector } from "../../redux/hook";

export default function MyReadingList() {
  const { user } = useAppSelector((state) => state.auth || {});
  const { data = {}, isLoading } = useGetMyReadingListsQuery({ id: user?._id });
  const { data: readingLists } = data;
  return (
    <section>
      <p className="font-extrabold text-3xl  text-center mb-5">
        My Reading List
      </p>
      {!readingLists?.length && !isLoading && (
        <p className="p-10 text-red-800 font-semibold text-xl">
          No Reading List found !
        </p>
      )}
      {isLoading && (
        <p className="p-10 text-green-800 font-semibold text-xl">Loading...</p>
      )}
      {readingLists?.length && (
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
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {readingLists?.length &&
              readingLists?.map((readingList: IReadingList) => (
                <tr key={Math.random()}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {readingList?.book?.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {readingList?.book?.author}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {readingList?.book?.genre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {readingList?.book?.publicationDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {readingList?.status}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
