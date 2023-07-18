import { IBook, IWishlist } from "../../interfaces/book.interfaces";
import { useGetMyWishlistsQuery } from "../../redux/features/wishlist/wishlistApiSlice";
import { useAppSelector } from "../../redux/hook";

export default function MyWishLists() {
  const { user } = useAppSelector((state) => state.auth || {});
  const { data = {}, isLoading } = useGetMyWishlistsQuery({ id: user?._id });
  const { data: wishlists } = data;

  console.log(wishlists);

  return (
    <section>
      {" "}
      <p className="font-extrabold text-3xl  text-center mb-5">My WishLists</p>
      {!wishlists?.length && !isLoading && (
        <p className="p-10 text-red-800 font-semibold text-xl">
          No Wishlist found !
        </p>
      )}
      {isLoading && (
        <p className="p-10 text-green-800 font-semibold text-xl">Loading...</p>
      )}
      {wishlists?.length && (
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

          <tbody className="bg-white divide-y divide-gray-200">
            {wishlists?.length &&
              wishlists?.map((wishlist: IWishlist) => (
                <tr key={Math.random()}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {wishlist?.book?.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {wishlist?.book?.author}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {wishlist?.book?.genre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {wishlist?.book?.publicationDate}
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
