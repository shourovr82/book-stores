/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from "react";
import poddoja from "../../assets/pddoja.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiHeartBold } from "react-icons/pi";
import { RiHealthBookFill } from "react-icons/ri";
import { AiFillStar, AiOutlineLoading, AiOutlineStar } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import Reviews from "../../components/Books/Reviews";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../../redux/features/books/booksSlice";
import { IBook } from "../../interfaces/book.interfaces";
import { useAppSelector } from "../../redux/hook";
import { toast } from "react-hot-toast";
import { useAddToMyWishlistMutation } from "../../redux/features/wishlist/wishlistApiSlice";
import { useAddToMyReadingListMutation } from "../../redux/features/readingList/readingLIstSlice";

export const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSingleBookQuery(id);
  const { user } = useAppSelector((state) => state.auth);
  const [deleteBook, { isLoading, isError, isSuccess }] =
    useDeleteBookMutation();

  const [
    addToMyWishlist,
    {
      isError: wishError,
      isLoading: wishLoading,
      error: wishErrors,
      isSuccess: wishSuccess,
    },
  ] = useAddToMyWishlistMutation();
  const [
    addToMyReadingList,
    {
      isError: readError,
      isLoading: readLoading,
      error: readErrors,
      isSuccess: readSuccess,
    },
  ] = useAddToMyReadingListMutation();
  const details: IBook = data?.data;
  const isUserOwner = user?._id === details?.userId;

  const handleDeleteBook = () => {
    deleteBook({ bookId: id });
  };

  const handleAddToMyWishlist = () => {
    addToMyWishlist({ user: user?._id, book: id });
  };
  const handleAddToMyReadinglist = () => {
    addToMyReadingList({ user: user?._id, book: id });
  };

  useEffect(() => {
    if (!isLoading && !isError && isSuccess) {
      navigate("/all-books");
      toast.success("Successfully Deleted Book");
    }
    if (wishErrors && wishError && !wishLoading) {
      toast.error("You have already added this book on your wishlists ");
    }
    if (readErrors && readError && !readLoading) {
      toast.error("You have already added this book on your Reading List ");
    }
    if (!wishErrors && !wishError && !wishLoading && wishSuccess) {
      toast.success("Book Successfully added to wishlist ");
    }
    if (!readErrors && !readError && !readLoading && readSuccess) {
      toast.success("Book Successfully added to Reading list");
    }
  }, [
    isError,
    isLoading,
    isSuccess,
    navigate,
    wishLoading,
    wishError,
    wishErrors,
    wishSuccess,
    readError,
    readLoading,
    readSuccess,
    readErrors,
  ]);

  return (
    <div>
      <div className=" py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg  overflow-hidden">
            <div className="md:flex gap-4">
              <div className="md:flex-shrink-0">
                <img
                  className="w-[80%] object-center h-[90%] rounded-2xl "
                  src={details?.image ? details?.image : poddoja}
                  alt="Product"
                />
              </div>
              <div className="p-6 space-y-5 w-full">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">
                    {details?.title}
                  </h2>
                  <p className="text-gray-600 font-semibold text-sm mb-4">
                    Author : {details?.author}
                  </p>
                  <p className="text-gray-600 font-semibold text-sm mb-4">
                    Genre : {details?.genre}
                  </p>
                </div>

                <div className="flex items-center ">
                  <AiFillStar size="20" />
                  <AiFillStar size="20" />
                  <AiFillStar size="20" />
                  <AiFillStar size="20" />
                  <AiOutlineStar size="20" />
                </div>
                <div className="flex  w-full justify-between items-center">
                  <div className="">
                    <h2 className=" space-x-6  font-semibold text-3xl mb-2">
                      <span className="line-through text-gray-300">$99.99</span>
                      <span className=" text-red-600">$99.99</span>
                    </h2>
                  </div>
                  <div className="flex gap-4 items-center ">
                    {isUserOwner && (
                      <>
                        <Link
                          to={`/edit-book/${details?._id}`}
                          className="flex justify-between items-center gap-2 border-2 border-green-800 rounded-md p-2 hover:bg-green-800 text-green-800 hover:text-white duration-300 ease-in-out "
                          type="button"
                        >
                          Edit
                          <BiEditAlt size="20" />
                        </Link>
                        <button
                          onClick={() => handleDeleteBook()}
                          className="border-2 flex justify-between items-center gap-2 border-red-800 rounded-md p-2 hover:bg-red-800 text-red-800 hover:text-white duration-300 ease-in-out "
                          type="button"
                        >
                          Delete
                          <RiDeleteBin6Line size="20" />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleAddToMyWishlist()}
                      className="border-2  border-black rounded-md p-2.5 hover:bg-black hover:text-white duration-300 ease-in-out"
                      type="button"
                    >
                      {!wishLoading && <PiHeartBold size="20" />}
                      {wishLoading && (
                        <AiOutlineLoading className="animate-spin" size="20" />
                      )}
                    </button>
                    <button
                      onClick={() => handleAddToMyReadinglist()}
                      className="border-2  border-black rounded-md p-2.5 hover:bg-black hover:text-white duration-300 ease-in-out"
                      type="button"
                    >
                      {!readLoading && <RiHealthBookFill size="20" />}
                      {readLoading && (
                        <AiOutlineLoading className="animate-spin" size="20" />
                      )}
                    </button>
                  </div>
                </div>

                {/*  */}
                <div>
                  <p className="text-gray-400 font-thin">book description :</p>
                </div>

                {/* date  and publisher */}
                <div className=" w-2/4">
                  <div className="flex  justify-between">
                    <h4 className="text-gray-400 font-semibold">Publisher :</h4>
                    <h4 className="font-semibold">{details?.name}</h4>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-gray-400 font-semibold">
                      Date Of Publishing :
                    </h4>
                    <h4 className="font-semibold">
                      {details?.publicationDate}
                    </h4>
                  </div>
                </div>

                {/* reviews */}
              </div>
            </div>
            {/* review section */}
            <div>
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
