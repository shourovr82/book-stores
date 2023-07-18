import { useForm } from "react-hook-form";
import { IBook } from "../../interfaces/book.interfaces";
import {
  useEditBookMutation,
  useSingleBookQuery,
} from "../../redux/features/books/booksSlice";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useEffect } from "react";

export default function EditBook() {
  const { id } = useParams();
  const { data: responseBook } = useSingleBookQuery(id);
  const [addNewBook, { isLoading, isError, isSuccess }] = useEditBookMutation();
  const navigate = useNavigate();
  const bookDetails = responseBook?.data;

  const { user } = useAppSelector((state) => state?.auth || {});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();

  const onSubmit = (data: IBook) => {
    const book = {
      title: data?.title,
      author: data?.author,
      genre: data?.genre,
      image: data?.image,
      publicationDate: data?.publicationDate,
      email: user?.email,
      name: user?.fullName,
      userId: user?._id,
    };
    addNewBook({ id, book });
  };

  useEffect(() => {
    if (!isLoading && !isError && isSuccess) {
      navigate("/all-books");
      toast.success("Successfully updated Book");
    }
  }, [isError, isLoading, isSuccess, navigate]);

  return (
    <div>
      <section className="py-3 bg-gray-100 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
          <div className="max-w-5xl mx-auto mt-3">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="px-6  sm:p-10">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Edit Book
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <div className="gap-4 grid grid-cols-2 justify-center items-center">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Book Title <span>{errors?.title?.message}</span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          defaultValue={bookDetails?.title}
                          {...register("title")}
                          name="title"
                          id="title"
                          placeholder="Enter your Book Title..."
                          className="block w-full px-4 py-4 shadow-inner shadow-gray-400 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Author <span>{errors?.author?.message}</span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          defaultValue={bookDetails?.author}
                          {...register("author")}
                          name="author"
                          id="author"
                          placeholder="Enter Author Name"
                          className="block w-full px-4 py-4 shadow-inner shadow-gray-400 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="Genre"
                        className="text-base font-medium text-gray-900"
                      >
                        Genre <span>{errors?.genre?.message}</span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          defaultValue={bookDetails?.genre}
                          {...register("genre", {
                            required: "Genre is required",
                          })}
                          name="genre"
                          id="genre"
                          placeholder="Enter your Book Genre..."
                          className="block w-full px-4 py-4 shadow-inner shadow-gray-400 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="publicationDate"
                        className="text-base font-medium text-gray-900"
                      >
                        Publication Date
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="number"
                          defaultValue={bookDetails?.publicationDate}
                          {...register("publicationDate", {
                            required: "publication Year is required",
                          })}
                          name="publicationDate"
                          id="publicationDate"
                          placeholder="Enter your Book Publication Year..."
                          className="block w-full px-4 py-4 shadow-inner shadow-gray-400 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  caret-blue-600"
                        />
                      </div>
                    </div>{" "}
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600  border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Update Book
                      </button>
                    </div>
                  </div>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
